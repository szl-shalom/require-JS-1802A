// 主文件  入口文件
// 引入其他模块
require(["./js/1.js"], function (a) {
    var res = a(2, 3)
    console.log(res)
    var res1 = a(4, 5)
    console.log(res1)
})
