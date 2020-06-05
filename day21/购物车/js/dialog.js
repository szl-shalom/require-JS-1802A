define(function () {
    function Dialog(opt) {
        Object.assign(this, opt);
        this.init();
    }

    Dialog.prototype = {
        constructor: Dialog,
        init: function () {
            this.create();
            this.bindEvent();
        },
        create: function () {
            this.mask = document.createElement("mask");
            this.mask.className = "mask";
            document.body.appendChild(this.mask);


            this.content = document.createElement("div");
            this.content.className = "content";
            this.content.innerHTML = this.HTML;
            document.body.appendChild(this.content)


        },
        bindEvent: function () {
            var btns = this.content.querySelectorAll("button"),
                b = this.content.querySelector("b"),
                that = this;

            btns[0].addEventListener("click", function () {
                that.okClick && that.okClick();
                that.mask.remove();
                that.content.remove();
            })
            btns[1].addEventListener("click", function () {
                that.mask.remove();
                that.content.remove();
            })
            b.addEventListener("click", function () {
                that.mask.remove();
                that.content.remove();
            })
        }

    }
    return Dialog;
})

// document.body.previousElementSibling