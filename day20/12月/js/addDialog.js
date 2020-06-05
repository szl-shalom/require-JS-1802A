define(["V"], function (V) {
    function Template(opt) {
        Object.assign(this, {}, opt);
        this.init();
    }

    Template.prototype = {
        constructor: Template,
        init: function () {
            // 动态创建
            this.create();
            this.bindEvnet();
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
        bindEvnet: function () {
            var btns = this.content.querySelectorAll("button"),
                that = this,
                ipts = [...this.content.querySelectorAll("input")],
                sel = this.content.querySelector("select"),
                regTel = /^1[3-8]\d{9}$/,
                regEmail = /^\w+@\w+\.(com|cn|net)$/;
            // 确定
            btns[0].addEventListener("click", function () {
                if ((regTel.test(ipts[1].value) && regEmail.test(ipts[2].value))) {
                    that.okClick && that.okClick(ipts[0].value, ipts[1].value, ipts[2].value, sel.value)
                    that.mask.remove();
                    that.content.remove();
                } else {
                    alert("正则表达式不正确");
                }

            })

            btns[1].addEventListener("click", function () {
                that.mask.remove();
                that.content.remove();
            })
        }
    }
    return Template;
})