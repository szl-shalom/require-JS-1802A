define(["V"], function (V) {
    function Template(opt) {
        Object.assign(this, {}, opt);
        this.init();
    }

    Template.prototype = {
        constructor: Template,
        init: function () {
            this.create()
            this.bindEvent();
        },
        create: function () {
            this.mask = document.createElement("div");
            this.mask.className = "mask";
            document.body.appendChild(this.mask)


            this.content = document.createElement("div");
            this.content.className = "content";
            this.content.innerHTML = this.HTML;
            document.body.appendChild(this.content)

        },
        bindEvent: function () {
            var btns = this.content.querySelectorAll("button"),
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
        }

    }
    return Template;
})