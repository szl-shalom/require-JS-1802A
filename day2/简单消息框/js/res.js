define(function () {
    // 逻辑代码
    function res(opt) {
        // 动态创建标签div
        var div = document.createElement("div");
        // 给div添加类名 res
        div.classList.add("res")
        // 修改内容
        div.innerHTML = opt.title;
        // 修改边框
        div.style.borderColor = opt.color;
        // 添加页面
        document.body.appendChild(div)
    }
    // 抛出
    return res;
})