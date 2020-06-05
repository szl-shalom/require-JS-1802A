// 主入口文件
// require配置
require.config({
    baseUrl: "js",
    paths: {
        $: "dom",
        d: "dialog",
        V: "../lib/velocity.min",
    }
})
// 引入其他模块
require(["$", "d"], function ($, Dialog) {
    var btn = $.get("button");
    // 点击事件
    btn.addEventListener("click", function () {
        // 调用弹框
        new Dialog({
            title: "今天下午周考一吗？", //配置标题
            okValue: "考", //配置确定按钮的文字
            noValue: "不考", //配置取消按钮的文字
            okClick: function () {//配置确定按钮回调函数
                console.log("您点击了确定")
            },
            noClick: function () {//配置取消按钮回调函数
                console.log("您点击了取消")
            },
            hasMask: true, //配置是否有遮罩层
        })
    })
})


