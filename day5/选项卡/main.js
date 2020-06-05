require.config({
    baseUrl: "js",
    paths: {
        t: "tab"
    }
})


require(["t"], function (Tab) {
    new Tab({
        // 标题父元素
        title: document.querySelector(".title"),
        // 内容父元素
        content: document.querySelector(".content"),

        
        // 事件类型
        type: "mouseover",
        // 类名
        className: "active",
        // 默认高亮
        index: 3
    })


    new Tab({
        // 标题父元素
        title: document.querySelector(".box .title"),
        // 内容父元素
        content: document.querySelector(".box .content"),
        // 事件类型
        type: "click",
        // 换个类名
        className: "active1",
        // 默认高亮
        index: 0,
    })


    new Tab({
        // 标题父元素
        title: document.querySelector(".box1 .title"),
        // 内容父元素
        content: document.querySelector(".box1 .content"),
    })
})