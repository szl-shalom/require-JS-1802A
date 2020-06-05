require.config({
    baseUrl: "js",
    paths: {
        s: "sel"
    }
})


require(["s"], function (Sel) {
    new Sel({
        input: document.querySelector("input"),
        ul: document.querySelector("ul"),
    })
})