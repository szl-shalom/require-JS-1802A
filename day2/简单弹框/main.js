// 入口模块
// 配置reuqire
require.config({
    // 配置基址路径
    baseUrl: "js",
    // 起别名
    paths: {
        d: "dialog"
    }
})

// 引入模块
require(["d"], function (Dialog) {
    // 逻辑代码
    // 获取节点
    var btn = document.querySelector("button");
    // 添加点击事件
    btn.addEventListener("click", function () {
        new Dialog({
            // title: "123",
            okValue: "ok",
            // cancelValue: "no"
        })
    })
})