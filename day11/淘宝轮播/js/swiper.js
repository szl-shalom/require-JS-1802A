define(["V"], function (V) {
    function Swiper(opt) {
        Object.assign(this, {
            index: 0, //默认下标
            time: 2000,//默认每次轮播的间隔
            autoPlayFlag: true,
        }, opt);
        this.init();
    }

    Swiper.prototype = {
        constructor: Swiper,
        init: function () {
            // 克隆节点  
            this.el = this.container.children[0].cloneNode(true)
            // 放到尾部
            this.container.appendChild(this.el);
            // 最大下标
            this.maxIndex = this.container.children.length - 1;
            // 自动轮播
            this.autoPlayFlag && this.autoPlay();
            // 绑定事件
            this.bindEvent();
        },
        autoPlay: function () {
            var that = this;
            this.timer = setInterval(function () {
                that.next.click();//调用有按钮点击事件
            }, this.time)
        },
        bindEvent: function () {
            var that = this;
            // 鼠标进入划出事件
            this.banner.addEventListener("mouseenter", function () {
                that.autoPlayFlag && clearInterval(that.timer) //清除定时器
                V(that.prev, "fadeIn")
                V(that.next, "fadeIn")
            })

            this.banner.addEventListener("mouseleave", function () {
                that.autoPlayFlag && that.autoPlay() //执行自动播放
                V(that.prev, "fadeOut")
                V(that.next, "fadeOut")
            })

            this.prev.addEventListener("click", function () {
                if (that.index === 0) {
                    that.index = that.maxIndex;
                    that.container.style.marginLeft = -that.index * 800 + "px";
                }
                that.change(that.index - 1)
            })


            this.next.addEventListener("click", function () {
                if (that.index === that.maxIndex) {
                    that.index = 0;
                    that.container.style.marginLeft = 0;
                }
                that.change(that.index + 1)
            });

            this.page && [...this.page.children].forEach(function (item, index) {
                item.addEventListener("click", function () {
                    that.change(index)
                })
            })

        },
        change: function (i) {
            var that = this;
            // 修改下标
            that.index = i;
            // 添加动画
            V(that.container, {
                marginLeft: -that.index * 800,
            })
            // 添加分页器高亮
            that.page && that.page.querySelector(".active") && that.page.querySelector(".active").classList.remove("active");
            that.page && that.page.children[that.index === that.maxIndex ? 0 : that.index].classList.add("active")
            // 修改num
            if (that.num) {
                that.num.innerHTML = `
                <span class="num">${that.index === that.maxIndex ? 1 : that.index + 1}/${that.maxIndex}</span>
            `
            }



        }
    }

    return Swiper;
})