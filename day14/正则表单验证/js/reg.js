define(function () {
    function Reg(opt) {
        Object.assign(this, opt);
        this.init()
    }

    Reg.prototype = {
        constructor: Reg,
        init: function () {
            var that = this;
            // 循环遍历数组
            this.data.forEach(function (item) {
                // 给数组中的每一个对象上的input框添加失去焦点事件
                item.input.onblur = function () {
                    // 非空验证
                    if (this.value === "") {
                        // 说明=>没有输入内容 =>让下一个兄弟节点span里面内容赋值 =>为空时的提示信息
                        this.nextElementSibling.innerHTML = item.emptyInfo;
                        return false;
                    }
                    // 正则验证
                    // regExp.test("字符串")   正则通过返回true  失败返回false
                    this.nextElementSibling.innerHTML = item.reg.test(this.value) ? item.okInfo : item.errorInfo;
                    return item.reg.test(this.value);
                }
            })

            // 提交
            this.btn.onclick = function () {
                // 思路
                // every语法：每一次返回值为真  最终返回值为真  存在依次返回值为假 最终返回值为假
                // 所有input验证通过  就验证成功  存在一次input验证没有通过   就验证失败了
                // 调用数组的高阶函数every找到每一个对象的input失去焦点事件  把事件的结果返回
                var res = that.data.every(function (item) {
                    return item.input.onblur();
                })
                res ? alert("验证通过") : alert("验证失败")
            }
        }
    }

    return Reg;
})