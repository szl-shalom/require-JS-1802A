require.config({
    baseUrl: "js",
    paths: {
        d: "dialog",
        V: "../lib/velocity.min"
    }
})


require(["d"], function (Dialog) {
    //获取必要的节点
    var btn = document.querySelector(".add"),
        tbody = document.querySelector("tbody");
    // 添加点击事件
    btn.addEventListener("click", function () {
        // 调用弹框
        new Dialog({
            HTML: `
                <p>
                    <span>firstname</span>
                    <input type="text">
                </p>
                <p>
                    <span>lastname</span>
                    <input type="text">
                </p>
                <p>
                    <span>usertname</span>
                    <input type="text">
                </p>
                <button>确定</button>
                <button>取消</button>
            `,
            okClick: function (val1, val2, val3) {
                tbody.innerHTML += `
                <tr>
                    <td>${tbody.children.length + 1}</td>
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

    // 编辑和删除
    tbody.addEventListener("click", function (e) {
        var tar = e.target;
        if (tar.classList.contains("mod")) {
            new Dialog({
                HTML: `
                    <p>
                        <span>firstname</span>
                        <input type="text" value=${tar.parentNode.parentNode.children[1].innerHTML}>
                    </p>
                    <p>
                        <span>lastname</span>
                        <input type="text" value=${tar.parentNode.parentNode.children[2].innerHTML}>
                    </p>
                    <p>
                        <span>usertname</span>
                        <input type="text" value=${tar.parentNode.parentNode.children[3].innerHTML}>
                    </p>
                    <button>确定</button>
                    <button>取消</button>
                `,
                okClick: function (val1, val2, val3) {
                    tar.parentNode.parentNode.children[1].innerHTML = val1
                    tar.parentNode.parentNode.children[2].innerHTML = val2
                    tar.parentNode.parentNode.children[3].innerHTML = val3
                }
            })
        }

        if (tar.classList.contains("del")) {
            tar.parentNode.parentNode.remove();
        }
    })
})