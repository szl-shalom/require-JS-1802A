// 配置 
require.config({
    baseUrl: "js",
    paths: {
        c: "car",
        data: "data",
        $: "dom",
        r: "reg",
        s: "sel"
    }
})


// 引入
require(["c", "data", "$", "r", "s"], function (Car, data, $, Reg, Sel) {
    // console.log(data)
    // 调用购物车
    new Car({
        table: $.get("table"),//父元素
        data: data.carData, //购物车数据
        tbody: $.get("tbody"),//渲染的节点
        checkAll: $.get(".check-all"),//全选
        priceAll: $.get(".price-all")
    })

    // console.log(data.selData)
    new Sel({
        data: data.selData,
        province: $.get(".province"),
        city: $.get(".city"),
        area: $.get(".area"),
    })
})