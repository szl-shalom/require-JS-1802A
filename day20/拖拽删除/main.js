var box = document.querySelector(".box"),
    box1 = document.querySelector(".box1");
var flag = false, pos = {};


box1.addEventListener("mousedown", function (e) {
    flag = true;
    pos = {
        x: e.offsetX,
        y: e.offsetY
    }
    box1.style.position = "absolute";
    e.preventDefault();
})

document.addEventListener("mousemove", function (e) {
    if (flag) {
        box1.style.left = e.pageX - pos.x + "px";
        box1.style.top = e.pageY - pos.y + "px";
    }
})

document.addEventListener("mouseup", function (e) {
    if (flag) {
        var obj = box.getBoundingClientRect();
        if (obj.left < e.pageX && obj.right > e.pageX && obj.top < e.pageY && obj.bottom > e.pageY) {
            box1.remove();
        }
        flag = false;
    }

})