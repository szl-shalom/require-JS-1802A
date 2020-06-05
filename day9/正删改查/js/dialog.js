define(["V"], function (V) {
    function Dialog(opt) {
        Object.assign(this, opt);
        this.init()
    }

    Dialog.prototype = {
        constructor: Dialog,
        init: function () {
            this.create();//创建弹框
            this.bindEvent();//绑定事件
        },
        create: function () {
            // 创建遮罩层   document.createElement("标签")
            this.mask = document.createElement("div");
            this.mask.className = "mask";
            document.body.appendChild(this.mask);
            // 创建内容
            this.content = document.createElement("div");
            this.content.classList.add("content");
            this.content.innerHTML = this.HTML;
            document.body.appendChild(this.content);

            V(this.mask, "fadeIn", 2000)
            V(this.content, {
                left: ["50%", "-10%"],
                // top: ["50%", "-50%"],
            }, {
                duration: 2000,
                easing: "spring"
            })
        },
        bindEvent: function () {
            var that = this;
            // 获取必要的节点
            var btns = this.content.querySelectorAll("button"),
                ipts = this.content.querySelectorAll("input");

            // 确定事件
            btns[0].addEventListener("click", function () {
                // 执行确定按钮回调
                that.okClick(ipts[0].value, ipts[1].value, ipts[2].value)
                // 删除内容盒子以及遮罩层
                that.remove();
            })
            // 取消点击事件
            btns[1].addEventListener("click", function () {
                // 删除内容盒子以及遮罩层
                that.remove();
            })
        },
        remove: function () {
            var that = this;
            V(this.content, {
                left: ["150%", "50%"],
            }, {
                duration: 2000,
                complete: function () {
                    that.mask.remove();
                    that.content.remove()
                }
            })


        }
    }

    return Dialog;
})
