



require(["js/big"], function (B) {
    [...document.querySelectorAll("img")].forEach(function (item) {
        item.addEventListener("click", function () {
            new B({
                src: item.src,
            })
        })
    })

})