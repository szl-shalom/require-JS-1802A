// 配置
require.config({
    baseUrl: "js",
    paths: {
        t: "tabBanner"
    }
})


require(["t"], function (T) {
    new T({
        title: document.querySelector(".tab"),//标题父元素
        wrap: document.querySelector(".wrap"),//包括元素，切换背景颜色的
        container: document.querySelector(".container"),//上下移动的轮播元素
    })
})  