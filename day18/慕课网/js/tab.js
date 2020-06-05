define(function () {
    function Tab(opt) {
        Object.assign(this, opt);
        this.init();
    }

    Tab.prototype = {
        constructor: Tab,
        init: function () {
            // this.title 标题父元素
            // this.content 内容盒子父元素
            var that = this;
            [...this.title.children].forEach(function (item, index) {
                item.addEventListener("click", function () {
                    // 标题切换
                    that.title.querySelector(".active") && that.title.querySelector(".active").classList.remove("active");
                    item.classList.add("active");

                    // 内容切换
                    that.content.querySelector(".active") && that.content.querySelector(".active").classList.remove("active");
                    that.content.children[index].classList.add("active");
                })
            })
        }
    }

    return Tab;
})