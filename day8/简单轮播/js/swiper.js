define(["V"], function (V) {
    function Swiper(opt) {
        Object.assign(this, { index: 0 }, opt);
        this.init()
    }

    Swiper.prototype = {
        constructor: Swiper,
        init: function () {
            // 克隆第一组图片放到末尾   el.cloneNode(true)
            var el = this.container.children[0].cloneNode(true)
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
                that.next.click()
            }, 2000)
        },
        bindEvent: function () {
            var that = this;
            this.next.addEventListener("click", function () {
                if (that.index === that.maxIndex) {
                    that.index = 0;
                    that.container.style.left = 0;
                }
                that.change(that.index + 1)
            })

            this.prev.addEventListener("click", function () {
                if (that.index === 0) {
                    that.index = that.maxIndex;
                    that.container.style.left = -that.index * that.box.offsetWidth + "px";
                }
                that.change(that.index - 1)
            })

            this.box.addEventListener("mouseenter", function () {
                clearInterval(that.timer)
            })

            this.box.addEventListener("mouseleave", function () {
                that.autoPlay()
            });

            [...this.page.children].forEach(function (item, index) {
                item.addEventListener("click", function () {
                    that.change(index)
                })
            })
        },
        change: function (i) {
            var that = this;
            that.index = i;
            V(that.container, {
                left: -that.index * that.box.offsetWidth
            })
            that.page.querySelector(".active") && that.page.querySelector(".active").classList.remove("active");
            that.page.children[that.index === that.maxIndex ? 0 : that.index].classList.add("active")
        }
    }

    return Swiper;
})