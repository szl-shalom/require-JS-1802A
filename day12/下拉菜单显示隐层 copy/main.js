require.config({
    baseUrl: "js",
    paths: {
        s: "sel"
    }
})


require(["s"], function (Sel) {
    new Sel({
        floor: document.querySelector(".floor"),
        floorMiddle: document.querySelector(".floor-middle")
    })
})