require.config({
    baseUrl: "js",
    paths: {
        s: "sel",
        V: "../lib/velocity.min"
    }
})


require(["s"], function (Sel) {
    new Sel({
        ul: document.querySelector("ul"),
    })
})