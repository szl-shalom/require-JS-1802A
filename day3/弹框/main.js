require.config({
    baseUrl: "js",
    paths: {
        d: "dialog",
        $: "dom",
        V: "../lib/velocity.min"
    }
})



require(["d", "$"], function (Dialog, $) {
    var btn = $.get("button");
    btn.addEventListener("click", function () {
        new Dialog({
            title: "今天出门了吗？",//配置标题
            okValue: "出去了", //配置确定按钮文字
            noValue: "没有",//配置取消按钮文字
            okClick: function () { //配置确定回调函数
                console.log("出去买了个菜")
            },
            noClick: function () { //配置取消回到函数

            }
        })
    })
})