define(function () {
    function Tab(opt) {
        Object.assign(this, {
            // 默认参数
        }, opt);
        this.init();
    }

    Tab.prototype = {
        constructor: Tab,
        init: function () {
            var that = this;
            // 循环遍历 添加点击事件
            [...this.title.children].forEach(function (item, index) {
                // 添加事件
                item.addEventListener("click", function () {
                    // 去除标题原来高亮的效果
                    that.title.querySelector(".active") && that.title.querySelector(".active").classList.remove("active")
                    // 给当前触发事件的元素添加高亮
                    item.classList.add("active")
                    // 去除内容原来高亮的效果
                    that.content.querySelector(".active") && that.content.querySelector(".active").classList.remove("active")
                    // 根据下标  找到对用的内容盒子元素 添加高亮
                    that.content.children[index].classList.add("active")
                })
            })
        }
    }

    return Tab;
})