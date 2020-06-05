require.config({
    baseUrl: "js"
})





require(["dialog", "data"], function (D, data) {
    var box = document.querySelector(".box"),
        add = document.querySelector(".add");
    // 数据渲染
    box.innerHTML = data.map(function (item) {
        return `
        <dl>
            <b>编辑</b>
            <dt>
                ${item.src}
            </dt>
            <dd>
                ${item.title}
            </dd>
        </dl>
        `
    }).join("")


    // 添加 
    add.addEventListener("click", function () {
        new D({
            HTML: `
            <p>
                <span>名称</span>
                <input type="text">
            </p>
            <button class="close">取消</button>
            <button class="ok">完成</button>
            <button class="del">删除</button>
            `,
            okClick: function (val) {
                box.innerHTML += `
                <dl>
                    <b>编辑</b>
                    <dt>
                        图片
                    </dt>
                    <dd>
                        ${val}
                    </dd>
                </dl>
                `
            },
            noClick: function () {
                console.log("取消")
            },
            delFlag: true,  //禁用
        })
    })


    // 事件委托编辑
    box.addEventListener("click", function (e) {
        var tar = e.target;
        if (tar.nodeName === "B") {
            new D({
                HTML: `
                <p>
                    <span>名称</span>
                    <input type="text" value=${tar.nextElementSibling.nextElementSibling.innerHTML}>
                </p>
                <button class="close">取消</button>
                <button class="ok">完成</button>
                <button class="del">删除</button>
                `,
                okClick: function (val) {
                    tar.nextElementSibling.nextElementSibling.innerHTML = val
                },
                delClick: function () {
                    tar.parentNode.remove();
                }
            })
        }
    })

})