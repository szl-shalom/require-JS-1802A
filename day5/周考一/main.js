require.config({
    baseUrl: "js",
    paths: {
        $: "dom",
        M: "message"
    }
})



require(["$", "M"], function ($, Message) {
    var message = new Message({
        time: 3000,//配置时间
    }),
        btns = $.gets("button");

    // 警告按钮点击事件
    btns[0].addEventListener("click", function () {
        message.warning("我是警告框", this);
        this.disabled = true;
    })

    // 成功按钮点击事件
    btns[1].addEventListener("click", function () {
        message.success("我是成功框", this);
        this.disabled = true;
    })


    // 错误按钮点击事件
    btns[2].addEventListener("click", function () {
        message.error("我是错误框", this);
        this.disabled = true;
    })
})