var imgs = [...document.querySelectorAll("img")];

document.addEventListener("scroll", function () {
    imgs.forEach(function (item) {
        if (item.getBoundingClientRect().top < window.innerHeight) {
            setTimeout(function () {
                item.src = item.getAttribute("realSrc");
            }, 2000)
        }
    })
})


