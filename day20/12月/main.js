// 配置
require.config({
    baseUrl: "js",
    paths: {
        a: "addDialog",
        data: "data",
        $: "dom",
        p: "page",
        r: "relDialog",
        t: "tab",
        V: "../lib/velocity.min",
    }
})


// 引入
require(["a", "$", "data", "p", "r", "t"], function (AddDialig, $, data, Page, RelDialog, Tab) {
    // tab切换
    new Tab({
        title: $.get(".title"),
        con: $.get(".con"),
    })
    // 添加按钮事件
    $.get(".add").addEventListener("click", function () {
        // 调用新增弹框
        new AddDialig({
            HTML: `
            <p>
                <span>姓名：</span>
                <input type="text">
            </p>
            <p>
                <span>电话：</span>
                <input type="text">
                <b>提示信息</b>
            </p>
            <p>
                <span>邮箱：</span>
                <input type="text">
                <b>提示信息</b>
            </p>
            <p>
                <span>支付方式</span>
                <select name="" id="">
                    <option value="支付宝">支付宝</option>
                    <option value="微信支付">微信支付</option>
                    <option value="网易支付">网易支付</option>
                </select>
            </p>
            <button class="submit">提交</button>
            <button class="close">取消</button>
            `,
            okClick: function (res1, res2, res3, res4) {
                var obj = {
                    name: res1,
                    tel: res2,
                    email: res3,
                    type: res4
                }
                // 调用实例化属性  data  面向对象的实际应用
                initPage.data.push(obj)
                initPage.change();
            }
        })
    })
    // 调用分页
    var initPage = new Page({
        data: data,
        num: 2,
        index: 0,
        page: $.get(".page"),
        tbody: $.get("tbody"),
        prev: $.get(".prev"),
        span: $.get(".num-all span"),
    })
    // 删除
    $.get("tbody").addEventListener("click", function (e) {
        var tar = e.target;
        if (tar.className === "del") {
            new RelDialog({
                HTML: `
                    <h1>确认要删除吗？</h1>
                    <button>确认</button>
                    <button>取消</button>
                `,
                okClick: function () {
                    tar.parentNode.parentNode.remove(); //删除节点
                }
            })
        }
    })
})