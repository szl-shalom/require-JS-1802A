//  排序和数据筛选模块
define(function () {
    function Template(opt) {
        Object.assign(this, {}, opt);
        this.init();
    }

    Template.prototype = {
        constructor: Template,
        init: function () {
            this.render(this.data); //渲染默认数据
            this.bindEvent();//绑定事件
        },
        render: function (data) {
            this.content.innerHTML = data.map(function (item) {
                return `
                <dl>
                    <dd>
                        <img src="${item.url}" alt="">
                    </dd>
                    <dt>
                        <p>
                            <span>￥${item.price}</span>
                            <s>￥${item.oldPrice}</s>
                        </p>
                        <p>
                           ${item.title}
                        </p>

                        <p>
                            销量：${item.sale}
                            <b>${item.flag ? "有货" : "无货"}</b>
                        </p>
                    </dt>
                </dl>
                `
            }).join("")
        },
        bindEvent: function () {
            var that = this;
            // Tab标题切换
            [...this.ul.children].forEach(function (item, index) {
                item.addEventListener("click", function () {
                    // tab切换
                    that.ul.querySelector(".active") && that.ul.querySelector(".active").classList.remove("active");
                    item.classList.add("active")
                    // 排序  数据的 sort
                    var type = item.getAttribute("type");//获取自定义属性 =>对应数据的字段名称
                    item.classList.toggle("flag");//切换类名
                    var data = that.data.slice().sort(function (a, b) {
                        // 是否包含类名flag 真 升序  假  降序
                        return item.classList.contains("flag") ? a[type] - b[type] : b[type] - a[type]
                    })
                    // 数据筛选  数据的 filter 
                    if (that.ipt.checked) {
                        data = data.filter(function (item) {
                            return item.flag
                        })
                    }
                    that.render(data)  //渲染
                })
            })

            this.ipt.addEventListener("click", function () {
                that.ul.querySelector(".active").click();
            })
        }
    }

    return Template;
})