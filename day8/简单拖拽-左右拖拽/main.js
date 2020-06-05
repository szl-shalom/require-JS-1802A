require.config({
    baseUrl: "js",
    paths: {
        $: "dom",
        d: "drag"
    }
})


require(["$", "d"], function ($, Drag) {
    new Drag({
        left: $.get(".left"),
        right: $.get(".right"),
        progress: $.get(".progress"),
        content: $.get(".content"),
        sel: document.querySelector("select")
    })
})