define(["V"], function (V) {
    function Template(opt) {
        Object.assign(this, {}, opt);
        this.init();
    }

    Template.prototype = {
        constructor: Template,
        init: function () {
            this.change();
            this.bindEvent();
        },
        render: function (data) {
            this.tbody.innerHTML = data.map(function (item) {
                return `
                <tr>
                    <td>
                        <input type="checkbox">
                    </td>
                    <td>
                        ${item.name}
                    </td>
                    <td>
                        ${item.tel}
                    </td>
                    <td>
                       ${item.email}
                    </td>
                    <td>
                        ${item.type}
                    </td>
                    <td>
                        <button class="del"> 删除</button>
                    </td>
                </tr>
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
            var data = this.data.slice(this.index * this.num, (this.index + 1) * this.num)
            this.render(data)
            this.maxLen = Math.ceil(this.data.length / this.num);
            this.renderPage();

            //禁用
            this.prev.disabled = this.index === 0;
            // 总条数
            this.span.innerHTML = this.data.length;
        },
        bindEvent: function () {
            var that = this;
            this.page.addEventListener("click", function (e) {
                var tar = e.target;
                if (tar.nodeName === "LI") {
                    that.index = tar.innerHTML - 1;
                    that.change();
                }
            })
        }

    }
    return Template;
})