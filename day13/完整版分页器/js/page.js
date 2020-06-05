define(function () {
    function Page(opt) {
        Object.assign(this, opt);
        this.init(0)
    }

    Page.prototype = {
        constructor: Page,
        init: function () {
            this.change();
            this.bindEvent();
        },
        render: function (data) {
            this.tbody.innerHTML = data.map(function (item) {
                return `
                <tr>
                    <td>${item.ID}</td>
                    <td>${item.name}</td>
                    <td>${item.age}</td>
                </tr>
                `
            }).join("")

            var str = "";
            // 点击前三页   0 1 2  < 3
            if (this.index < 3) {
                for (var i = 1; i <= 7; i++) {
                    str += `<li class="${i === this.index + 1 ? "active" : ""}">${i}</li>`
                }
            } else if (this.index > this.maxLen - 4) {
                // 点击后三页
                for (var i = this.maxLen - 6; i <= this.maxLen; i++) {
                    str += `<li class="${i === this.index + 1 ? "active" : ""}">${i}</li>`
                }
            } else {
                // 其他
                str = `
                    <li>${this.index - 2}</li>
                    <li>${this.index - 1}</li>
                    <li>${this.index}</li>
                    <li class="active">${this.index + 1}</li>
                    <li>${this.index + 2}</li>
                    <li>${this.index + 3}</li>
                    <li>${this.index + 4}</li>
                `
            }
            this.page.innerHTML = str;
        },
        change: function () {
            // 获取对应的数据
            // this.data 大数据
            // this.index 下标
            // this.num  下拉框 
            // this.num.value 每页显示的个数
            console.log(typeof this.num.value)
            var data = this.data.slice(this.index * this.num.value, (this.index + 1) * this.num.value);
            // this.data.length 数据长度
            // this.num.value 每页显示的个数
            this.maxLen = Math.ceil(this.data.length / this.num.value);
            this.render(data)
            // 修改总页码和当前页码
            this.allNum.innerHTML = `共${this.data.length}条`
            this.allCode.innerHTML = `共${this.maxLen}页`
        },
        bindEvent: function () {
            var that = this;
            // 事件委托 绑定所有点击事件
            this.box.addEventListener("click", function (e) {
                var tar = e.target;
                if (tar.nodeName === "LI") {
                    // 修改下标
                    that.index = tar.innerHTML - 1;
                    that.change();
                } else {
                    switch (tar.className) {
                        case "first"://首页
                            that.index = 0;
                            that.change();
                            break;
                        case "prev"://上一页
                            if (that.index === 0) {
                                return;
                            }
                            that.index--;
                            that.change();
                            break;
                        case "next": //下一页
                            if (that.index === that.maxLen - 1) {
                                return;
                            }
                            that.index++;
                            that.change();
                            break;
                        case "end": //尾页
                            that.index = that.maxLen - 1;
                            that.change();
                            break;
                        case "go": //跳转
                            if (that.code.value >= 1 && that.code.value <= that.maxLen) {
                                that.index = that.code.value - 1;
                                that.change()
                            } else {
                                alert("很遗憾，没有该页码！！！！");
                            }
                            break;
                    }

                }
            })

            // 改变事件
            this.num.addEventListener("change", function () {
                that.index = 0;
                that.change()
            })
        }
    }

    return Page;
})