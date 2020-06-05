// 入口文件
// 加载其他模块

require(["./js/drag.js"], function (Drag) {
    //  调用
    new Drag({
        el: document.querySelector("div")
    })
})