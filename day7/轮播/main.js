// 配置
require.config({
    // 配置基址路径
    baseUrl: "js",
    // 起别名
    paths: {
        $: "dom",
        s: "swiper",
        V: "../lib/velocity.min"
    }
})

// 引入
require(["$", "s"], function ($, Swiper) {
    new Swiper({
        index: 0,//下标
        banner: $.get(".banner"),
        container: $.get(".container"),
        prev: $.get(".prev"),
        next: $.get(".next"),
        page: $.get(".page"),
    })
})

