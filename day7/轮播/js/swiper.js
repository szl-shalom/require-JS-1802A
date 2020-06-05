define(["V"], function (V) {
    function Swiper(opt) {
        Object.assign(this, opt);
        this.init();
    }

    Swiper.prototype = {
        constructor: Swiper,
        init: function () {
            //克隆第一张图片    语法： el.cloneNode(true)
            var el = this.container.children[0].cloneNode(true);
            // 放入末尾
            this.container.appendChild(el)
            // 最大下标
            this.maxIndex = this.container.children.length - 1;
            // 开始轮播
            this.autoPlay();
            // 绑定事件
            this.bindEvent();
        },
        autoPlay: function () {
            var that = this;
            that.timer = setInterval(function () {
                //调用右按钮 点击事件
                that.next.click()
            }, 2000);
        },
        bindEvent: function () {
            var that = this;
            // 鼠标进入
            this.banner.addEventListener("mouseenter", function () {
                // 清除定时器
                clearInterval(that.timer)
            })
            // 鼠标离开
            this.banner.addEventListener("mouseleave", function () {
                // 再一次自动轮播
                that.autoPlay();
            })
            // 右按钮点击事件
            this.next.addEventListener("click", function () {
                // 判断
                if (that.index === that.maxIndex) {
                    // 下标赋值为0  left也赋值为0
                    that.index = 0;
                    that.container.style.left = 0;
                }
                that.change(that.index + 1)
            })
            // 做按钮点击事件
            this.prev.addEventListener("click", function () {
                // 判断
                if (that.index === 0) {
                    // 下标赋值为0  left也赋值为0
                    that.index = that.maxIndex;
                    that.container.style.left = -that.index * that.banner.offsetWidth + "px";
                }
                that.change(that.index - 1)
            });
            // 分页器点击事件
            [...this.page.children].forEach(function (item, index) {
                item.addEventListener("click", function () {
                    that.change(index)
                })
            })
        },
        change: function (index) {
            var that = this;
            // 修改下标
            that.index = index;
            // 动画
            V(that.container, {
                left: - that.index * that.banner.offsetWidth
            })
            // 分页器高亮
            that.page.querySelector(".active") && that.page.querySelector(".active").classList.remove("active");
            that.page.children[that.index === that.maxIndex ? 0 : that.index].classList.add("active")
        }
    }

    return Swiper;
})