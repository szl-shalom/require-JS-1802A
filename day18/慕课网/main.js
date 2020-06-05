// 配置
require.config({
    baseUrl: "js",
    paths: {
        d: "dialog",
        $: "dom",
        tab: "tab",
        reg: "reg",
        page: "page",
        data: "data"
    }
})


require(["d", "$", "page", "data"], function (Dialog, $, Page, data) {
    // 添加点击事件 
    $.get(".login").addEventListener("click", function () {
        // =>调用弹框
        new Dialog({
            HTML: `
            <b>X</b>
            <div class="title">
                <span class="active">登录</span>
                <span>注册</span>
            </div>
            <div class="con">
                <div class="con-content  active">
                    <p>
                        <input type="text" placeholder="请输入账号" class="zh">
                        <span></span>
                    </p>
                    <p>
                        <input type="text" placeholder="请输入密码" class="password">
                        <span></span>
                    </p>
                    <p>
                        <input type="text" placeholder="请输入邮箱" class="email">
                        <span></span>
                    </p>
                    <p>
                        <input type="text" placeholder="请输入昵称" class="nikename">
                        <span></span>
                    </p>
                    <button class="btn">登录</button>
                </div>
                <div class="con-content">注册页面</div>
            </div>
            `
        })
    })

    //  调用分页器
    new Page({
        data: data, //大数据
        index: 2, //下标
        num: 12, //每页显示的数据
        box: $.get(".box"),
        page: $.get(".page"),
        bottom: $.get(".bottom"),
    })


})