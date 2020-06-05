define(function () {
    function Sel(opt) {
        Object.assign(this, opt);
        // 设置必填项
        if (!this.input) {
            throw new Error("input必须传！！！！");
        }
        this.init();
    }

    Sel.prototype = {
        constructor: Sel,
        init: function () {
            var that = this;
            this.input.addEventListener("focus", function () {
                that.ul.classList.add("active")
            })

            this.input.addEventListener("blur", function () {
                that.ul.classList.remove("active")
            })
        },
    }

    return Sel;
})