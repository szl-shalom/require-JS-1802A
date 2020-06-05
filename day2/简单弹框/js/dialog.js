// 定义模块
define(function () {
    // 逻辑代码
    function Dialog(opt) {
        // 合并参数
        Object.assign(this, {
            // 默认参数
            title: "我是默认标题",
            okValue: "确定",
            cancelValue: "取消"
        }, opt);
        // 初始化
        this.init()
    }
    // 修改下构造函数原型
    Dialog.prototype = {
        constructor: Dialog,//指回去
        init: function () {
            this.create() //动态创建Dom结构

        },
        create: function () {
            // 创建遮罩层
            var mask = document.createElement("div"); //创建盒子
            mask.classList.add("mask") //修改类名
            document.body.appendChild(mask) //加入页面
            // 创建内容盒子
            var content = document.createElement("div");//创建盒子
            content.innerHTML = ` 
                <h2>${this.title}</h2>
                <button>${this.okValue}</button>
                <button>${this.cancelValue}</button>
            `;//修改内容
            content.classList.add("content");//修改类名
            document.body.appendChild(content)//加入页面
        }
    }

    // 抛出
    return Dialog
})