define(["V"], function (V) {
    function Dialog(opt) {
        Object.assign(this, opt);
        this.init();
    }
    Dialog.prototype = {
        constructor: Dialog,
        init: function () {
            this.create(); //动态创建
            this.bindEvent();//绑定事件
        },
        create: function () {
            // 动态创建DOM结构
            this.mask = document.createElement("div");
            this.mask.className = "mask";
            document.body.appendChild(this.mask);

            this.content = document.createElement("div");
            this.content.className = "content";
            this.content.innerHTML = this.HTML; //修改内容
            document.body.appendChild(this.content);
        },
        bindEvent: function () {
            // 获取必要的节点
            var ok = this.content.querySelector(".ok"),
                no = this.content.querySelector(".no"),
                b = this.content.querySelector("b"),
                that = this,
                ipts = this.content.querySelectorAll("input");

            // 确定点击事件
            ok.addEventListener("click", function () {
                that.okClick && that.okClick(
                    ipts[0].value,
                    ipts[1].value,
                    ipts[2].value,
                )
                that.mask.remove();
                that.content.remove();
                that.alert()
            })

            // 取消点击事件
            no.addEventListener("click", function () {
                that.mask.remove();
                that.content.remove()
            })

            // X号点击事件
            b.addEventListener("click", function () {
                that.mask.remove();
                that.content.remove()
            })
        },
        alert: function () {
            var div = document.createElement("div");
            div.innerHTML = "新增成功"
            div.style = `
                width:300px;
                height:30px;
                line-height:30px;
                padding-left:20px;
                position:fixed;
                left:50%;
                transform:translate(-50%,0);
                background:red;
                opacity:.5;
            `
            document.body.appendChild(div);
            V(div, {
                top: ["30px", "-300px"],
            })
            setTimeout(function () {
                div.remove();
            }, 5000)
        }
    }

    return Dialog;
})