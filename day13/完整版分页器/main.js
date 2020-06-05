// 配置
require.config({
    baseUrl: "js", //基址路径
    paths: { //配置路径
        d: "data",
        $: "dom",
        p: "page",
    }
})

// 引入其他模块
require(["d", "$", "p"], function (data, $, Page) {
    new Page({
        data: data, //大数据
        index: 0,//下标
        num: $.get(".num"),
        tbody: $.get("tbody"),
        page: $.get(".page"),
        box: $.get(".box"),
        code: $.get(".code"),
        allCode: $.get(".all-code"),
        allNum: $.get(".all-num"),
    })
})