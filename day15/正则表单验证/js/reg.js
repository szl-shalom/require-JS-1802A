define(function () {
    function Reg(opt) {
        Object.assign(this, opt);
        this.init();
    }


    Reg.prototype = {
        constructor: Reg,
        init: function () {
            var that = this;
            this.data.forEach(function (item, index) {
                // 设置提示默认信息                          //默认信息
                item.input.nextElementSibling.innerHTML = item.defaultInfo;
                // 绑定失去焦点事件
                item.input.onblur = function () {
                    // 非空验证
                    if (item.input.value === "") {
                        //空信息
                        item.input.nextElementSibling.innerHTML = item.emptyInfo;
                        return false;
                    }

                    item.input.nextElementSibling.innerHTML = item.reg.test(item.input.value) ? item.successInfo : item.errorInfo;
                    return item.reg.test(item.input.value)
                }
                // 聚焦
                item.input.onfocus = function () {
                    // 显示格式格式要求
                    item.input.nextElementSibling.innerHTML = item.defaultInfo;
                }
            })

            // 提交事件
            this.submit.addEventListener("click", function () {
                var res = that.data.every(function (item) {
                    return item.input.onblur();
                })

                if (res && that.rePassword.onblur()) {
                    alert("验证通过")
                } else {
                    alert("验证失败")
                }
            })
            // 重复密码失去焦点
            this.rePassword.onblur = function () {
                that.rePassword.nextElementSibling.innerHTML = that.rePassword.value === that.password.value ? "√" : "两次密码不一致"
                return that.rePassword.value === that.password.value;
            }
            // 重置
            this.reset.addEventListener("click", function () {
                that.data.forEach(function (item) {
                    item.input.value = "";
                })
                that.rePassword.value = "";
            })
        }
    }

    return Reg;
})