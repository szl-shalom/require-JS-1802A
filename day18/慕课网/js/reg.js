define(function () {
    function Reg(opt) {
        Object.assign(this, opt);
        this.init();
    }

    Reg.prototype = {
        constructor: Reg,
        init: function () {
            var that = this;
            // 正则验证
            this.data.forEach(function (item) {
                console.log(item)
                // 绑定失去焦点事件
                item.input.onblur = function () {
                    // 非空验证
                    if (this.value === "") {
                        this.nextElementSibling.innerHTML = "不可以为空";
                        return false;
                    }
                    // 正则验证   item.reg正则表达式
                    // if (item.reg.test(this.value)) {
                    //     // 正则验证通过
                    //     this.nextElementSibling.innerHTML = item.okInfo;
                    //     return true
                    // } else {
                    //     // 正则验证没通过
                    //     this.nextElementSibling.innerHTML = item.noInfo;
                    //     return false;
                    // }

                    this.nextElementSibling.innerHTML = item.reg.test(this.value) ? item.okInfo : item.noInfo
                    return item.reg.test(this.value)
                }
            })

            this.btn.addEventListener("click", function () {
                var res = that.data.every(function (item) {
                    return item.input.onblur()
                })
                if (res) {
                    location.href = "https://www.baidu.com/";
                } else {
                    alert("失败")
                }
            })
        }
    }

    return Reg;
})