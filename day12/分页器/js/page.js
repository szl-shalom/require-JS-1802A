define(function () {
    function Page(opt) {
        Object.assign(this, opt);
        this.init();
    }

    Page.prototype = {
        constructor: Page,
        init: function () {
            // 初始化
            this.change();
            // 绑定事件
            this.bindEvent();
        },
        render: function (data) {
            this.content.innerHTML = data.map(function (item) {
                return `
                <dl>
                    <dt>
                        <img src="${item.url}" alt="">
                    </dt>
                    <dd>
                        <h2>${item.title}</h2>
                        观看人：${item.num}
                    </dd>
                </dl>
                `
            }).join("")
        },
        renderPage: function () {
            var str = "";
            for (var i = 1; i <= this.maxLen; i++) {
                str += `<li class="${i === this.index + 1 ? "active" : ""}">${i}</li>`
            };
            this.page.innerHTML = str;
        },
        change: function () {
            // data:大数据
            // index:下标
            // num:每页显示几条数据
            // data.slice( index * num,  index * num + num  )
            // 获取下标对应的数据
            var data = this.data.slice(this.index * this.num, this.index * this.num + this.num);
            // 渲染内容
            this.render(data)
            // 计算页码最大值
            this.maxLen = Math.ceil(this.data.length / this.num);
            // 渲染页码
            this.renderPage()
            // 显示页码
            this.code.innerHTML = `${this.index + 1}/${this.maxLen}`
        },
        bindEvent: function () {
            var that = this;
            this.wrap.addEventListener("click", function (e) {
                var tar = e.target;
                if (tar.nodeName === "LI") {
                    that.index = tar.innerHTML - 1;
                    that.change()
                } else {
                    switch (tar.className) {
                        case "first":
                            that.index = 0;
                            that.change()
                            break;
                        case "prev":
                            if (that.index === 0) {
                                return;
                            }
                            that.index--;
                            that.change();
                            break;
                        case "next":
                            if (that.index === that.maxLen - 1) {
                                return;
                            }
                            that.index++;
                            that.change();
                            break;
                        case "left":
                            if (that.index === 0) {
                                return;
                            }
                            that.index--;
                            that.change();
                            break;
                        case "right":
                            if (that.index === that.maxLen - 1) {
                                return;
                            }
                            that.index++;
                            that.change();
                            break;
                        case "end":
                            that.index = that.maxLen - 1;
                            that.change()
                            break;

                    }
                }
            })
        }
    }

    return Page;
})