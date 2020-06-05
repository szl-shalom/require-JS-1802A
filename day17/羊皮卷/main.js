// 配置
require.config({
    baseUrl: "js",
    paths: {
        c: "cortDownTime",
        data: "data",
        $: "dom",
        n: "nav",
        s: "sort"
    }
})

// 引入
require(["c", "data", "$", "n", "s"], function (CortDownTime, data, $, Nav, Sort) {
    // 倒计时
    new CortDownTime({
        el: $.get(".time"), //倒计时节点
        furTime: new Date(2020, 2, 13, 0, 0, 0),//未来时间  2020年3月13号0小时0分0秒
    })
    // 吸顶
    new Nav({
        el: $.get(".nav")
    })
    // 排序和筛选
    new Sort({
        data: data,
        content: $.get(".content"),
        ul: $.get("ul"),
        ipt: $.get(".ipt"),

    })
})