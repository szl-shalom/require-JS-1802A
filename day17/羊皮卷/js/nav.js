// 吸顶功能
define(function () {
    function Template(opt) {
        Object.assign(this, {}, opt);
        this.init();
    }
    Template.prototype = {
        constructor: Template,
        init: function () {
            var that = this;
            // 获取el盒子 距离顶部的距离
            var offsetTop = that.el.offsetTop;
            document.addEventListener("scroll", function () {
                // 获取滚动条的滚动距离
                var scrollTop = document.documentElement.scrollTop;
                // 当滚动条滚动的距离大于盒子距离顶部的距离时  吸顶（添加类名）
                if (scrollTop >= offsetTop) {
                    that.el.classList.add("fixed");
                } else {
                    that.el.classList.remove("fixed");
                }
            })
        }
    }
    return Template;
})



