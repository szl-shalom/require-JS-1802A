define(function () {
    function Page(opt) {
        Object.assign(this, opt);
        this.init();
    }

    Page.prototype = {
        constructor: Page,
        init: function () {
            this.change();//初始化
            this.bindEvent();//绑定事件
        },
        render: function (data) {
            this.box.innerHTML = data.map(function (item) {
                return `
                <dl>
                    <dd>
                        <img src="${item.url}" alt="">
                    </dd>
                    <dt>
                        ${item.title}
                    </dt>
                </dl>
                `
            }).join("")
        },
        renderPage: function () {
            var str = "";
            for (var i = 1; i <= this.maxLen; i++) {
                str += `<li class="${i === this.index + 1 ? "active" : ""}">${i}</li>`
            }
            this.page.innerHTML = str;
        },
        change: function () {
            // 获取对应的数据
            var data = this.data.slice(this.index * this.num, (this.index + 1) * this.num);
            // 渲染数据
            this.render(data)
            // 获取分页器最大页码
            this.maxLen = Math.ceil(this.data.length / this.num);
            // 渲染页码
            this.renderPage();
        },
        bindEvent: function () {
            var that = this;
            this.bottom.addEventListener("click", function (e) {
                var tar = e.target;//获取事件源
                if (tar.nodeName === "LI") { //点击的事li元素
                    that.index = tar.innerHTML - 1;  //下标和页码差1
                    that.change();
                } else {
                    switch (tar.className) {
                        case "first":   // 首页
                            that.index = 0;
                            that.change()
                            break;
                        case "prev":
                            if (that.index === 0) {
                                return;
                            }
                            that.index--;
                            that.change()
                            break;
                        case "next":
                            if (that.index === that.maxLen - 1) {
                                return;
                            }
                            that.index++;
                            that.change()
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
    return Page
})