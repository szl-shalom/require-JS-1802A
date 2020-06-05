define(function () {
    function Tab(opt) {
        Object.assign(this, opt);
        this.init()
    }

    Tab.prototype = {
        constructor: Tab,
        init: function () {
            this.bindEvent();//绑定事件
        },
        bindEvent: function () {
            var that = this;
            //  循环遍历添加事件
            [...this.title.children].forEach(function (item, index) {
                // 绑定事件
                item.addEventListener("click", function () {
                    // 去除标题原来的高亮
                    that.title.querySelector(".active") && that.title.querySelector(".active").classList.remove("active")
                    // 给点击的元素添加高亮
                    item.classList.add("active");
                    // 去除内容原来的高亮
                    that.content.querySelector(".active") && that.content.querySelector(".active").classList.remove("active")
                    // 切换内容盒子   注意：标题高亮的下标和内容盒子的下标 一一对应
                    that.content.children[index].classList.add("active");
                })
            })
        }
    }



    return Tab
})