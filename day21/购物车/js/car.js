define(["d"], function (Dialog) {
    function Car(opt) {
        Object.assign(this, opt);
        this.init();
    }

    Car.prototype = {
        constructor: Car,
        init: function () {
            // 数据渲染
            this.render();
            // 绑定事件
            this.bindEvent();
            // 计算总价
            this.compute();
        },
        render: function () {
            this.tbody.innerHTML = this.data.map(function (item) {
                return `
                <tr>
                    <td>
                        <input type="checkbox" class="check-one">
                    </td>
                    <td>
                        <img src="${item.img}" alt="">
                    </td>
                    <td>
                        ${item.title}
                    </td>
                    <td class="price">
                        ${item.price}
                    </td>
                    <td>
                        <button class="reduce">-</button>
                        <span class="num">${item.num}</span>
                        <button class="add">+</button>
                    </td>
                    <td class="lit">
                        ${item.price * item.num}
                    </td>
                    <td>
                        <button class="del">删除</button>
                    </td>
                </tr>
                `
            }).join("")
        },
        bindEvent: function () {
            var that = this;
            //事件委托
            this.wrap.addEventListener("click", function (e) {
                var tar = e.target;
                // 使用switch  准确区分事件源
                switch (tar.className) {
                    case "del": //删除  弹框
                        // 赵天国
                        new Dialog({
                            HTML: `
                            <h2>
                                确认要删除吗？
                                <b>X</b>
                            </h2>
                            <button>确认</button>
                            <button>取消</button>
                            `,
                            okClick: function () {
                                tar.parentNode.parentNode.remove();
                                that.compute();
                            }
                        })
                        break;
                    case "add": //数量+
                        // 郭恒胜
                        tar.previousElementSibling.innerHTML++;
                        // 董超群
                        tar.parentNode.nextElementSibling.innerHTML = tar.previousElementSibling.innerHTML * tar.parentNode.previousElementSibling.innerHTML;
                        break;
                    case "reduce"://数量-
                        if (tar.nextElementSibling.innerHTML <= 1) {
                            tar.disabled = true;//禁用
                            return;
                        }
                        // 郭恒胜
                        tar.nextElementSibling.innerHTML--;
                        // 董超群
                        tar.parentNode.nextElementSibling.innerHTML = tar.nextElementSibling.innerHTML * tar.parentNode.previousElementSibling.innerHTML;
                        break;
                    case "check-all": //全选
                        // 董凯萌
                        // 获取元素
                        // querySelector(css样式名) 获取单个节点
                        // querySelectorAll(css样式名) 获取单个节点
                        var ipts = [...document.querySelectorAll(".check-one")];
                        ipts.forEach(function (item) {
                            item.checked = tar.checked;
                        })
                        break;
                    case "check-one": //单选||反选
                        that.checkAll.checked = [...that.tbody.querySelectorAll(".check-one")].every(function (item) {
                            return item.checked;
                        })
                        break;
                    case "del-all": //批量删除
                        new Dialog({
                            HTML: ` <h2>
                                    确认要删除吗？
                                    <b>X</b>
                                </h2>
                                <button>确认</button>
                                <button>取消</button>`,
                            okClick: function () {
                                var ipts = [...that.tbody.querySelectorAll(".check-one:checked")];
                                ipts.forEach(function (item) {
                                    item.parentNode.parentNode.remove();
                                })
                                that.compute();
                            }
                        })
                        break;
                    case "clear": //清空购物车
                        that.tbody.innerHTML = ""
                        break;
                }


                // 计算总价
                that.compute();
            })
        },
        compute: function () {
            var ipts = [...this.tbody.querySelectorAll(".check-one:checked")],
                price = 0,
                num = 0;
            ipts.forEach(function (item) {
                num += +item.parentNode.parentNode.querySelector(".num").innerHTML;
                price += +item.parentNode.parentNode.querySelector(".lit").innerHTML;
            })

            this.priceNum.innerHTML = `  总价钱：<span>${price}</span> ,总数量：<span>${num}</span>`
        }
    }
    return Car;
})

// document.body.previousElementSibling