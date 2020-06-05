require.config({
    baseUrl: "js",
    paths: {
        b: "bigImg",
    }
})


require(["b"], function (BigImg) {
    new BigImg({
        left: document.querySelector(".left"),
        mask: document.querySelector(".mask"),
        img: document.querySelector(".right img"),
        right: document.querySelector(".right")
    })
})