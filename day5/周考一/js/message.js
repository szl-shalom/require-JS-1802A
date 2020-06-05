define(function () {
    function Message(opt) {
        Object.assign(this, {
            time: 2000,
        }, opt);
        
    }
    Message.prototype = {
        constructor: Message,
        success: function (val, btn) {
            this.create(val, "#F0F9EB", btn)
        },
        warning: function (val, btn) {
            this.create(val, "#FDF6EC", btn)
        },
        error: function (val, btn) {
            this.create(val, "#FEF0F0", btn)
        },
        create: function (val, bc, btn) {
            // 动态创建Dom结构
            var div = document.createElement("div");
            div.classList.add("con");
            div.innerHTML = val;
            div.style.backgroundColor = bc;
            document.body.appendChild(div);
            // 删除
            setTimeout(function () {
                div.remove();
                btn.disabled = false;
            }, this.time)
        }
    }

    return Message;
})