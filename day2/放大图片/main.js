// 配置
require.config({
    baseUrl: "js",
    paths: {
        b: "bigImg"
    }
})

// 引入
require(["b"], function (B) {
    var imgs = [...document.querySelectorAll("img")];
    imgs.forEach(function (item) {
        item.addEventListener("click", function () {
            new B({
                src: item.src,
            })
        })
    })
})