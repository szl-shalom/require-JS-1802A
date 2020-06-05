define(function () {
    function Tab(opt) {
        Object.assign(this, {
            // 默认参数
            index: 0,
            type: "click",
            className: "active"
        }, opt);
        this.init();
    }

    Tab.prototype = {
        constructor: Tab,
        init: function () {
            // 默认高亮
            this.title.children[this.index].classList.add(this.className);
            this.content.children[this.index].classList.add(this.className);
            
            this.bindEvent();//执行事件
        },
        bindEvent: function () {
            var that = this;
            [...this.title.children].forEach(function (item, index) {
                item.addEventListener(that.type, function () {
                    // 获取标题原来高亮的元素 存在就删除类名
                    that.title.querySelector(`.${that.className}`) && that.title.querySelector(`.${that.className}`).classList.remove(that.className)
                    // 给标题添加高亮
                    item.classList.add(that.className)
                    //  获取内容原来高亮的元素 存在就删除类名
                    that.content.querySelector(`.${that.className}`) && that.content.querySelector(`.${that.className}`).classList.remove(that.className)
                    // 给内容添加高亮  注意：标题和内容盒子下标一一对应
                    that.content.children[index].classList.add(that.className)
                })
            })

        }
    }

    return Tab;
})