// 配置
require.config({
    baseUrl: "js",
    paths: {
        t: "tab"
    }
})

// 引入
require(["t"], function (Tab) {
    new Tab({
        title: document.querySelector(".title"),
        content: document.querySelector(".content"),
    })
})