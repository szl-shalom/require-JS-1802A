define(function () {
    function Template(opt) {
        Object.assign(this, opt);
        this.init()
    }

    Template.prototype = {
        construtor: Template,
        init: function () {
            var that = this;
            // 循环遍历所有子元素 添加点击事件
            [...this.title.children].forEach(function (item, index) {
                item.addEventListener("mouseover", function () {
                    // 标题Tab
                    that.title.querySelector(".active") && that.title.querySelector(".active").classList.remove("active");
                    item.classList.add("active");
                    // 随机颜色
                    that.wrap.style.background = "#" + Math.random().toString(16).substr(2, 6);
                    // 轮播  核心：-下标 * 每一张的高度
                    that.container.style.marginTop = - index * 800 + "px";
                })
            })
        }
    }

    return Template;
})