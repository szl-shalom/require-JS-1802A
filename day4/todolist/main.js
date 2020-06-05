require.config({
    baseUrl: "js",
    paths: {
        t: "todolist",
        $: "dom"
    }
})

require(["t", "$"], function (Todolist, $) {
    new Todolist({
        add: $.get(".add"),
        headerNum: $.get(".header-num"),
        bottomNum: $.get(".bottom-num"),
        header: $.get(".header"),
        bottom: $.get(".bottom"),
        wrap: $.get(".wrap"),
    })
})