define(["V"], function (V) {
    function Template(opt) {
        Object.assign(this, {}, opt);
        this.init();
    }

    Template.prototype = {
        constructor: Template,
        init: function () {
            var that = this;
            // 标题绑定事件
            [...this.title.children].forEach(function (item, index) {
                item.addEventListener("click", function () {
                    that.title.querySelector(".active") && that.title.querySelector(".active").classList.remove("active");
                    item.classList.add("active")
                    that.con.querySelector(".active") && that.con.querySelector(".active").classList.remove("active");
                    that.con.children[index].classList.add("active");
                    // 动画
                    V(that.con.children[index], {
                        marginTop: [0, 500]
                    })
                })
            })
        }
    }
    return Template;
})