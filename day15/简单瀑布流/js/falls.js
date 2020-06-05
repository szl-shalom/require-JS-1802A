define(function () {
    function Falls(opt) {
        Object.assign(this, opt);
        this.init();
    }


    Falls.prototype = {
        constructor: Falls,
        init: function () {
            this.setStyle();
            this.bindEvent();
        },
        setStyle: function () {
            var arr = [];//保存每一个区域的高度
            [...this.ul.children].forEach(function (item, index) {
                // 第一排
                if (index < 5) {
                    item.style.left = index * 220 + "px"; 
                    arr.push(item.offsetHeight)
                } else {
                    // 非第一排
                    var min = Math.min.apply(null, arr);
                    var i = arr.indexOf(min);
                    item.style.top = min + 10 + "px";
                    item.style.left = i * 220 + "px";
                    arr[i] = min + item.offsetHeight + 10;
                }

            })
        },
        bindEvent: function () {
            var that = this;
            document.addEventListener("scroll", function () {
                // 证明滚动条滚动到了最后
                // 滚动条滚动距离
                var scrollTop = document.documentElement.scrollTop;
                var offsetTop = that.ul.lastElementChild.offsetTop;
                var clientHeight = document.documentElement.clientHeight;

                if (offsetTop < scrollTop + clientHeight) {
                    var str = ""
                    for (var i = 1; i <= 15; i++) {
                        str += `<li><img src="img/${i}.jpg" alt=""></li>`
                    }
                    that.ul.innerHTML += str;
                    that.setStyle()
                }

            })
        }
    }

    return Falls;
})