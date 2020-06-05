// 配置require

require.config({
    baseUrl: "js",//基址路径,
    paths: {
        V: "../lib/velocity.min",
        data: "data",
        $: "dom",
        s: "swiper",
    }

})

// 引入
require(["data", "$", "s"], function (data, $, Swiper) {
    // 调用轮播
    new Swiper({
        index: 0,//下标
        data: data, //数据
        container: $.get(".container"),//移动的盒子
        page: $.get(".page"),//分页盒子
        time: 2000,//轮播间隔时间
        banner: $.get(".banner"),//轮播容器
        prev: $.get(".prev"),//左按钮可配置
        next: $.get(".next"),//右按钮可配置
    })
})