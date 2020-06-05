// 配置
require.config({
    baseUrl: "js",
    paths: {
        r: "reg",
        $: "dom"
    }
})


// d引入
require(["r", "$"], function (Reg, $) {
    new Reg({
        data: [{
            reg: /^[\u4e00-\u9fa5]{2,4}$/,
            input: $.get(".username"),
            defaultInfo: "姓名必须是2-4个汉字",
            emptyInfo: "姓名不可以为空",
            errorInfo: "姓名格式不正确",
            successInfo: "√",
        }, {
            reg: /^\w{6,12}$/,
            input: $.get(".password"),
            defaultInfo: "密码必须是6-12个字母或数字或下划线",
            emptyInfo: "密码不可以为空",
            errorInfo: "密码格式不正确",
            successInfo: "√",
        }, {
            reg: /^\w+@\w+\.(com|net|cn)$/,
            input: $.get(".email"),
            defaultInfo: "",
            emptyInfo: "邮箱不可以为空",
            errorInfo: "邮箱格式不正确",
            successInfo: "√",
        }],
        submit: $.get(".submit"),
        rePassword: $.get(".rePassword"),
        password: $.get(".password"),
        reset: $.get(".reset"),
    })
})