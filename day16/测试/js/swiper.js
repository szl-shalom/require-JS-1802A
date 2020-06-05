define(function () {
    function Swiper(opt) {
        Object.assign(this, opt);
        this.init();
    }


    Swiper.prototype = {
        constructor: Swiper,
        init: function () {
            var that = this;
            // 每一个盒子的宽度
            this.width = Math.floor(1000 / this.num);
            // 动态设置每个设置的宽度
            [...this.container.children].forEach(function (item) {
                item.style.width = that.width + "px";
            })

            // 下标最大值
            this.maxIndex = this.container.children.length - this.num;

            // 初始化位置
            that.container.style.marginLeft = -that.index * that.width + "px";


            // 渲染分页
            // var str = ""
            // for (var i = 0; i <= this.maxIndex; i++) {
            //     str += `<li class="${i === this.index ? "active" : ""}"></li>`
            // }
            // this.page.innerHTML = str;
            this.prev.addEventListener("click", function () {
                if (that.index <= 0) {
                    return;
                }
                that.index--;
                that.container.style.marginLeft = -that.index * that.width + "px";
                // that.page.querySelector(".active") && that.page.querySelector(".active").classList.remove("active");
                // that.page.children[that.index].classList.add("active");

            })

            this.next.addEventListener("click", function () {
                if (that.index >= that.maxIndex) {
                    return;
                }
                that.index++;
                that.container.style.marginLeft = -that.index * that.width + "px";
                // that.page.querySelector(".active") && that.page.querySelector(".active").classList.remove("active");
                // that.page.children[that.index].classList.add("active");
            })
        }
    }

    return Swiper;

})