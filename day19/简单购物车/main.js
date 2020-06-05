require.config({
    baseUrl: "js",
    paths: {
        c: "car"
    }
})



require(["c"], function (Car) {
    new Car({
        table: document.querySelector("table")
    })
})