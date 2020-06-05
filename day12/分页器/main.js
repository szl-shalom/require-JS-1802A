require.config({
    baseUrl: "js",
    paths: {
        data: "data",
        $: "dom",
        p: "page"
    }
})

require(["data", "$", "p"], function (data, $, Page) {
    // 调用分页
    var s = new Page({
        data: data,//大数据
        num: 12,//每页显示几条数据
        index: 5,//下标
        content: $.get(".content"), //渲染的内容盒子
        page: $.get(".page"),//渲染的分页节点
        code: $.get(".code"),
        wrap: $.get(".wrap")
    })
    console.log(s)
})