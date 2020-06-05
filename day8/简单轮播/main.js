require.config({
    baseUrl: "js",
    paths: {
        s: "swiper",
        V: "../lib/velocity.min"
    }
})


require(["s"], function (Swiper) {
    new Swiper({
        box: document.querySelector(".swiper"),
        prev: document.querySelector(".prev"),
        next: document.querySelector(".next"),
        page: document.querySelector(".page"),
        container: document.querySelector(".container")
        // index: 0,
    })
})