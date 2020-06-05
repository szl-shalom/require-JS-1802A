define(function () {
    function Sel(opt) {
        Object.assign(this, opt);
        this.init();
    }

    Sel.prototype = {
        constructor: Sel,
        init: function () {
            console.log(this.data)
            this.render(this.province, this.data);//渲染省
            this.bindEvent();//绑定事件
        },
        render: function (el, data) {
            el.innerHTML = data.map(function (item) {
                return `<option value="">${item.text}</option>`
            }).join("")
        },
        bindEvent: function () {
            var that = this;
            this.province.addEventListener("change", function () {
                // 获取下标  select.selectedIndex   //获取下拉框的下标
                that.index = this.selectedIndex; //获取下标
                var data = that.data[that.index].children; //找数据
                that.render(that.city, data) //渲染
            })

            this.city.addEventListener("change", function () {
                var i = this.selectedIndex;
                var data = that.data[that.index].children[i].children
                that.render(that.area, data)
            })
        }
    }
    return Sel;
})