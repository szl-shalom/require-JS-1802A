define(function () {
    function Drag(opt) {
        Object.assign(this, opt);
        this.init()
    }

    Drag.prototype = {
        constructor: Drag,
        init: function () {
            this.bindEvent();
        },
        bindEvent: function () {
            // 事件三要素
            // 事件委托 => 因为有两个盒子要进行拖拽  所以使用事件委托
            // 必要的参数
            var flag = false,
                el = null,
                pos = {},
                that = this;

            // 鼠标按下
            document.addEventListener("mousedown", function (e) {
                // 区分事件源 是不是left盒子或者right
                var tar = e.target; //获取事件源
                if (tar.classList.contains("left") || tar.classList.contains("right")) {
                    // 保存鼠标点距离元素的左边距和上边距
                    pos = {
                        x: e.offsetX,
                    }
                    flag = true;//打开开关
                    el = tar; //保存事件源
                    e.preventDefault()//阻止默认事件
                }
            })
            // 鼠标移动 
            document.addEventListener("mousemove", function (e) {
                if (flag) {
                    // 拖拽
                    var x = e.pageX - pos.x - that.progress.offsetLeft;
                    if (x < 0) x = 0;
                    if (x > that.progress.offsetWidth - el.offsetWidth) x = that.progress.offsetWidth - el.offsetWidth;
                    el.style.left = x + "px";
                    // content位置
                    that.content.style.left = that.left.offsetLeft + that.left.offsetWidth / 2 + "px";
                    // content宽度
                    that.content.style.width = that.right.offsetLeft - that.left.offsetLeft + "px";
                }
            })
            // 鼠标抬起
            document.addEventListener("mouseup", function () {
                flag = false;
            })

            // 改变事件
            this.sel.addEventListener("change", function () {
                that.left.className = `left ${this.value}`
                that.right.className = `right ${this.value}`
                that.content.style.left = parseInt(that.left.style.left) + that.left.offsetWidth / 2 + "px";
            })
        }
    }

    return Drag;
})