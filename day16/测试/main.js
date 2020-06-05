require.config({
    baseUrl: "js",
    paths: {
        s: "swiper"
    }
})



require(["s"], function (Swiper) {
    new Swiper({
        // 左右按钮可配置
        prev: document.querySelector(".prev"),
        next: document.querySelector(".next"),
        // 配置背景颜色
        background: "red",
        // 一页显示几个小组
        num: 4,
        // 显示第几个日期
        index: 0,
        // 移动盒子
        container: document.querySelector(".container"),
        // page: document.querySelector(".page")
    })
})