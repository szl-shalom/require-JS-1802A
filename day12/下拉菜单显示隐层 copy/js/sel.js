define(function () {
    function Sel(opt) {
        Object.assign(this, opt);
        // 设置必填项
        if (!this.floor) {
            throw new Error("input必须传！！！！");
        }
        this.init();
    }

    Sel.prototype = {
        constructor: Sel,
        init: function () {
            var arr = [...this.floor.children].map(function (item) {
                return item.offsetTop
            }), that = this;
            document.addEventListener("scroll", function () {
                var scrollTop = document.documentElement.scrollTop || document.body.scrollTop || window.scrollTop;
                arr.forEach(function (item, index) {
                    if (scrollTop >= item) {
                        that.floorMiddle.querySelector(".active") && that.floorMiddle.querySelector(".active").classList.remove("active")
                        that.floorMiddle.children[index].classList.add("active")
                    }
                })
            })
        },
    }

    return Sel;
})