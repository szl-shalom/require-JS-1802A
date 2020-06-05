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
            this.mask = document.createElement("div");
            this.mask.className = "mask";
            document.body.appendChild(this.mask);
            this.content = document.createElement("div");
            this.content.className = "content";
            this.content.innerHTML = this.HTML;
            document.body.appendChild(this.content);
        },
        bindEvent: function () {
            var close = this.content.querySelector(".close"), //取消
                ok = this.content.querySelector(".ok"),//确定
                del = this.content.querySelector(".del"),//删除
                that = this,
                input = this.content.querySelector("input");

            del.disabled = that.delFlag;

            close.addEventListener("click", function () {
                that.noClick && that.noClick();
                that.mask.remove();
                that.content.remove();
            })

            ok.addEventListener("click", function () {
                that.okClick && that.okClick(input.value)
                that.mask.remove();
                that.content.remove();
            })


            del.addEventListener("click", function () {
                that.delClick && that.delClick()
                that.mask.remove();
                that.content.remove();
            })

            input.addEventListener("input", function () {
                ok.disabled = !input.value.length
            })

            ok.disabled = !input.value.length


        }
    }

    return Dialog;
})