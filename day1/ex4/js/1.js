// 定义模块
define(function () {
    function sum(a, b) {
        return a + b
    }


    function red(a, b) {
        return a - b
    }


    return {
        sum: sum,
        red: red,
    }
})