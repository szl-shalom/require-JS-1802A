define(["V"], function (V) {
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
            this.mask = document.createElement("div");
            this.mask.classList.add("mask");
            document.body.appendChild(this.mask)

            this.content = document.createElement("div");
            this.content.classList.add("content");
            this.content.innerHTML = `
                <h2>${this.title}</h2>
                <button>${this.okValue}</button>
                <button>${this.noValue}</button>
            `
            document.body.appendChild(this.content)
            // 动画
            // V(this.content, "fadeIn", 2000)
            V(this.content, {
                top: ["50%", "-50%"]
            }, 5000)
        },
        bindEvent: function () {
            var btns = this.content.querySelectorAll("button"),
                that = this;

            btns[0].addEventListener("click", function () {
                that.okClick()
                that.mask.remove();
                that.content.remove();
            })

            btns[1].addEventListener("click", function () {
                that.mask.remove();
                that.content.remove();
            })
        }

    }


    return Dialog;
})