define(["V"], function (V) {
    function Sel(opt) {
        Object.assign(this, opt);
        this.init();
    }

    Sel.prototype = {
        constructor: Sel,
        init: function () {
            this.bindEvent();
        },
        bindEvent: function () {
            [...this.ul.children].forEach(function (item) {
                item.addEventListener("click", function () {
                    if (item.lastElementChild.style.display === "block") {
                        V(item.lastElementChild, "slideUp")
                        V(item.children[1], {
                            rotateZ: "0deg"
                        })
                    } else {
                        V(item.lastElementChild, "slideDown")
                        V(item.children[1], {
                            rotateZ: "90deg"
                        })
                    }
                })
            })
        }
    }

    return Sel;
})