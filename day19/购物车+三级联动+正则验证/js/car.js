define(function () {
    function Car(opt) {
        Object.assign(this, opt);
        this.init();
    }

    Car.prototype = {
        constructor: Car,
        init: function () {
            this.render();//渲染
            this.bindEvnet();//绑定事件
            this.compute();//计算总价
        },
        render: function () {
            this.tbody.innerHTML = this.data.map(function (item) {
                return `
                <tr>
                    <td>
                        <input type="checkbox" class="check-one">
                    </td>
                    <td>
                        ${item.title}
                    </td>
                    <td class="price">
                        ${item.price}
                    </td>
                    <td>
                        <button class="red">-</button>
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
            }).join("");
        },
        bindEvnet: function () {
            var that = this;
            // 事件委托
            this.table.addEventListener("click", function (e) {
                // 获取事件源
                var tar = e.target;
                // switch判断类名
                switch (tar.className) {
                    case "check-all": //全选
                        // 获取所有单选框
                        var ipts = [...that.tbody.querySelectorAll(".check-one")];
                        // 循环遍历
                        ipts.forEach(function (item) {
                            item.checked = tar.checked; //让每一个单选框状态 等于 全选的状态
                        });
                        break
                    case "check-one": //单选
                        // 方案一
                        // // 获取所有单选框
                        // var ipts = [...that.tbody.querySelectorAll(".check-one")];
                        // // 数组的高阶 every  ||  some
                        // var res = ipts.every(function (item) {
                        //     return item.checked
                        // })
                        // that.checkAll.checked = res;
                        // 方案二：
                        var a = that.tbody.querySelectorAll(".check-one").length;
                        var b = that.tbody.querySelectorAll(".check-one:checked").length;
                        that.checkAll.checked = a == b;
                        break
                    case "red": //数量-
                        if (tar.nextElementSibling.innerHTML <= 1) {
                            return;
                        }
                        tar.nextElementSibling.innerHTML--;
                        tar.parentNode.nextElementSibling.innerHTML = tar.nextElementSibling.innerHTML * tar.parentNode.previousElementSibling.innerHTML
                        break
                    case "add": //数量+
                        // 根据节点关系 数量++
                        tar.previousElementSibling.innerHTML++;
                        tar.parentNode.nextElementSibling.innerHTML = tar.previousElementSibling.innerHTML * tar.parentNode.previousElementSibling.innerHTML
                        break
                    case "del": //删除
                        tar.parentNode.parentNode.remove();
                        break;
                }
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
            this.priceAll.innerHTML = `
                总价钱：${price}元，
                总数量：${num}个
            `
        }
    }
    return Car;
})

