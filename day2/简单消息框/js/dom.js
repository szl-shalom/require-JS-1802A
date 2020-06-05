// 定义模块
define(function () {
    // 获取单个节点的方法
    function get(el) {
        return document.querySelector(el);
    }
    // 封装获取多个节点的方法
    function gets(el) {
        return document.querySelectorAll(el)
    }
    // 抛出
    return {
        get: get,
        gets: gets,
    };
})