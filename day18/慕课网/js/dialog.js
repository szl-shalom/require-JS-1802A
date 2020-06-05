define(["tab", "reg"], function (Tab, Reg) {
    function Dialog(opt) {
        Object.assign(this, opt);
        this.init();
    }

    Dialog.prototype = {
        constructor: Dialog,
        init: function () {
            // 动态创建弹框
            this.create();
            this.bindEvent();
        },
        create: function () {
            // 创建遮罩层
            this.mask = document.createElement("div");
            this.mask.classList.add("mask");
            document.body.appendChild(this.mask)


            // 创建内容盒子
            this.content = document.createElement("div");
            this.content.classList.add("content");
            this.content.innerHTML = this.HTML;
            document.body.appendChild(this.content)
        },
        bindEvent: function () {
            var that = this;
            // 关闭
            var b = this.content.querySelector("b");
            b.addEventListener("click", function () {
                // 删除
                that.mask.remove()
                that.content.remove()
            })


            // Tab切换
            new Tab({
                title: this.content.querySelector(".title"),
                content: this.content.querySelector(".con"),
            })

            // 正则登录验证
            new Reg({
                data: [{
                    input: this.content.querySelector(".zh"),
                    reg: /^\w{6,12}$/,
                    okInfo: "√",
                    noInfo: "账号格式不正确",
                }, {
                    input: this.content.querySelector(".password"),
                    reg: /^\w{6,12}$/,
                    okInfo: "√",
                    noInfo: "密码格式不正确",
                }, {
                    input: this.content.querySelector(".email"),
                    reg: /^\w+@\w+\.(com|cn|net)$/,
                    okInfo: "√",
                    noInfo: "邮箱格式不正确",
                }, {
                    input: this.content.querySelector(".nikename"),
                    reg: /^[\u4e00-\u9fa5]{2,10}$/,
                    okInfo: "√",
                    noInfo: "昵称格式不正确",
                }],
                btn: this.content.querySelector(".btn"),
            })

        }
    }

    return Dialog
})