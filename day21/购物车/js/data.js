define(function () {
    function random(max, min) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
    return [{
        img: `img/${random(1, 15)}.jpg`,
        title: "我是标题",
        num: random(1, 5),
        price: random(100, 2000),
    }, {
        img: `img/${random(1, 15)}.jpg`,
        title: "我是标题",
        num: random(1, 5),
        price: random(100, 2000),
    }, {
        img: `img/${random(1, 15)}.jpg`,
        title: "我是标题",
        num: random(1, 5),
        price: random(100, 2000),
    }, {
        img: `img/${random(1, 15)}.jpg`,
        title: "我是标题",
        num: random(1, 5),
        price: random(100, 2000),
    }]
})