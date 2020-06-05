define(["V"], function (V) {
    function Dialog(opt) {
        Object.assign(this, {
            // 默认参数
            title: "我是标题",
            okValue: "确定",
            noValue: "取消"
        }, opt);
        this.init();
    }

    Dialog.prototype = {
        constructor: Dialog,
        init: function () {
            this.create() //动态创建DOM结构
            this.bindEvent();//绑定事件
        },
        create: function () {
            // 判断是否创建遮罩层
            if (this.hasMask) {
                // 动态创建遮罩层
                this.mask = document.createElement("div");
                this.mask.classList.add("mask");
                document.body.appendChild(this.mask);
            }
            // 动态创建内容盒子
            this.content = document.createElement("div");
            this.content.classList.add("content");
            this.content.innerHTML = `
                <h2>${this.title}</h2>
                <button>${this.okValue}</button>
                <button>${this.noValue}</button>
            `
            document.body.appendChild(this.content);
            // 添加动画  淡入动画
            V(this.content, "fadeIn", 2000);
            if (this.hasMask) {
                V(this.mask, "fadeIn", 2000);
            }

        },
        bindEvent: function () {
            var btns = this.content.querySelectorAll("button"),
                that = this;
            // 确定按钮
            btns[0].addEventListener("click", function () {
                that.okClick && that.okClick() //执行确定回调函数
                // 删除内容盒子以及遮罩层
                that.remove();
            })
            // 取消按钮
            btns[1].addEventListener("click", function () {
                that.noClick && that.noClick()//执行取消回调函数
                that.remove();
            })
        },
        remove: function () {
            var that = this;
            V(this.content, {
                top: ["-50%", "50%"]
            }, {
                duration: 2000,
                complete: function () { // 动画完成函数
                    // 动画结束 删除遮罩以及内容盒子
                    that.hasMask && that.mask.remove();
                    that.content.remove();
                }
            })
        }
    }

    return Dialog;
})