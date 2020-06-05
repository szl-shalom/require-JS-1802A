// 配置  要求：基址路径定位到JS下
require.config({
    baseUrl: "js",//设置基址路径
    paths: {
        $: "dom",
        t: "tab",
        d: "dialog",
        V: "../lib/velocity.min"
    }
})


// 引入
require(["$", "t", "d"], function ($, Tab, Dialog) {
    var btn = $.get(".add"),
        tbody = document.querySelector("tbody");
    // 调用tab切换
    new Tab({
        title: $.get(".left"), //标题父元素
        content: $.get(".right"),//内容盒子父元素
    })

    // 添加添加事件
    btn.addEventListener("click", function () {
        new Dialog({
            HTML: `
            <h2>
                添加数据
                <b>X</b>
            </h2>
            <p>
                <span>用户名</span>
                <input type="text">
            </p>
            <p>
                <span>籍 &nbsp;&nbsp;贯</span>
                <input type="text">
            </p>
            <p>
                <span>年 &nbsp;&nbsp;龄</span>
                <input type="text">
            </p>
            <button class="ok">确定</button>
            <button class="no">取消</button>
            `,
            okClick: function (val1, val2, val3) {
                tbody.innerHTML += `
                <tr>
                    <td>${val1}</td>
                    <td>${val2}</td>
                    <td>${val3}</td>
                    <td>
                        <button class="mod">编辑</button>
                        <button class="del">删除</button>
                    </td>
                </tr>
                `
            }
        })
    })

    // 编辑
    tbody.addEventListener("click", function (e) {
        var tar = e.target;
        // 判断点击的是编辑按钮  类名是 mod
        if (tar.classList.contains("mod")) {
            new Dialog({
                HTML: `
                <h2>
                    添加数据
                    <b>X</b>
                </h2>
                <p>
                    <span>用户名</span>
                    <input type="text" value=${tar.parentNode.parentNode.children[0].innerHTML}>
                </p>
                <p>
                    <span>籍 &nbsp;&nbsp;贯</span>
                    <input type="text" value=${tar.parentNode.parentNode.children[1].innerHTML}>
                </p>
                <p>
                    <span>年 &nbsp;&nbsp;龄</span>
                    <input type="text"value=${tar.parentNode.parentNode.children[2].innerHTML}>
                </p>
                <button class="ok">确定</button>
                <button class="no">取消</button>
                `,
                okClick: function (val1, val2, val3) {
                    tar.parentNode.parentNode.children[0].innerHTML = val1
                    tar.parentNode.parentNode.children[1].innerHTML = val2
                    tar.parentNode.parentNode.children[2].innerHTML = val3
                }
            })
        }
    })
})