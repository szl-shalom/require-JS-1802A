// 主入口模块
var div = document.querySelector("div");
console.log(div)
// 引入其他模块
require(["./js/1.js"], function ($) {
    var res = $.sum(5, 6);
    console.log(res)

    var res1 = $.red(8, 3)
    console.log(res1)
})