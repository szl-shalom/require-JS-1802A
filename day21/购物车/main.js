// 配置require
require.config({
    baseUrl: "js",
    paths: {
        c: "car",
        data: "data",
        $: "dom",
        d: "dialog",
    },
})
// 引入模块
require(["c", "data", "$"], function (Car, data, $) {
    // 实例化购物车
    new Car({
        data: data,//数据
        tbody: $.get("tbody"),//渲染的节点
        wrap: $.get(".wrap"),//事件委托元素
        checkAll: $.get(".check-all"),
        priceNum: $.get(".price-num")
    })
})

