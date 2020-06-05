
require.config({
    baseUrl: "js",
    paths: {
        V: "../lib/velocity.min"
    }
})

require(["V"], function (V) {

    var box = document.querySelector(".box");
    document.addEventListener("scroll", function () {
        var scroll = document.documentElement.scrollTop;
        if (scroll <= 0) {
            // var img = new Image();
            var img = document.createElement("img")
            img.src = `img/${Math.floor(Math.random() * 15) + 1}.jpg`
            box.insertBefore(img, box.firstElementChild);
            img.onload = function () {
                V(img, "slideDown")
            }

        }
    })
})

