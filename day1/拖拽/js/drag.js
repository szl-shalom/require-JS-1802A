// 定义模块

define(function () {
    // 逻辑代码
    function Drag(opt) {
        Object.assign(this, opt);//合并参数
        this.init();//初始化
    }

    Drag.prototype = {
        constructor: Drag,
        init: function () {
            this.bindEvent();
        },
        bindEvent: function () {
            // 拖拽三要素
            var flag = false,//开关变量
                pos = {},//存储鼠标点距离元素上边距和左边距
                that = this;//存储this指向
            this.el.addEventListener("mousedown", function (e) {
                pos = {
                    x: e.offsetX, //存鼠标点距离元素的左边距
                    y: e.offsetY, //存鼠标点距离元素的上边距
                };
                flag = true;//开大开关变量
                that.el.style.position = "absolute";//开启定位
            })

            document.addEventListener("mousemove", function (e) {
                // 判断开关变量  是否可以拖拽
                if (flag) {
                    var x = e.pageX - pos.x,
                        y = e.pageY - pos.y;
                    // 边界
                    if (x < 0) x = 0;
                    if (y < 0) y = 0;
                    if (x > window.innerWidth - that.el.offsetWidth) x = window.innerWidth - that.el.offsetWidth;
                    if (y > window.innerHeight - that.el.offsetHeight) y = window.innerHeight - that.el.offsetHeight
                    // 运动
                    that.el.style.left = x + "px";
                    that.el.style.top = y + "px";
                }
            })

            this.el.addEventListener("mouseup", function () {
                flag = false;//关闭开关变量
            })
        }
    }

    // 抛出接口
    return Drag;

})