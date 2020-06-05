//配置
require.config({
    baseUrl: "js",
    paths: {
        s: "swiper",
        $: "dom",
        V: "../lib/velocity.min",
    }
})


// 引入模块
require(["s", "$"], function (Swiper, $) {
    // 调用上面轮播
    new Swiper({
        container: $.get(".banner1 .container"),//移动的盒子
        banner: $.get(".banner1"),//轮播容器
        time: 2000,//轮播间隔
        page: $.get(".page"),//分页器
        prev: $.get(".banner1 .prev"),//左按钮
        next: $.get(".banner1 .next"),//右按钮
        autoPlayFlag: true,//是否开启自动轮播
    })

    // 调用下面轮播
    new Swiper({
        container: $.get(".banner2 .container"),
        banner: $.get(".banner2"),
        time: 3000,
        prev: $.get(".banner2 .prev"),
        next: $.get(".banner2 .next"),
        num: $.get(".num"),
    })
})