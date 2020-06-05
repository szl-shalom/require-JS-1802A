// 配置
require.config({
    // 基址路径
    baseUrl: "js",
    // 起别名
    paths: {
        r: "res",
        $: "dom"
    },
})

// 引入其他模块
require(["r", "$"], function (res, $) {
    // 获取必要的节点
    var btn = $.get("button"),
        ipts = $.gets("input");
    // 添加事件
    btn.addEventListener("click", function () {
        res({
            color: ipts[0].value,
            title: ipts[1].value
        })
    })
})



