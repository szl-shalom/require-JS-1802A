// 倒计时功能

define(function () {
    function Template(opt) {
        Object.assign(this, {}, opt);
        this.init();
    }

    Template.prototype = {
        constructor: Template,
        init: function () {
            var that = this;
            setInterval(function () {
                var time = that.furTime - new Date();//毫秒级时间差 其实就是时间戳
                // 转化对应的秒  分钟 小时 天
                var sec = parseInt(time / 1000 % 60);
                var min = parseInt(time / 1000 / 60 % 60);
                var hour = parseInt(time / 1000 / 60 / 60 % 24);
                var day = parseInt(time / 1000 / 60 / 60 / 24);
                that.el.innerHTML = `剩余${day}天${hour}小时${min}分钟${sec}秒`;
                if (time < 0) {
                    alert("下课了");
                }
            }, 1000)
        }
    }

    return Template;
})