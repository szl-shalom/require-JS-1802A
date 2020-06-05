require.config({
    baseUrl: "js",
    paths: {
        $: "dom",
        r: "reg"
    }
})


require(["$", "r"], function ($, Reg) {
    new Reg({
        data: [{
            input: $.get(".username"),
            reg: /^[\u4e00-\u9fa5]{2,4}$/,
            errorInfo: "姓名格式不正确",
            okInfo: "√",
            emptyInfo: "姓名不可以为空",
        },
        {
            input: $.get(".email"),
            reg: /^\w+@\w+\.(com|cn|net)$/,
            errorInfo: "邮箱格式不正确",
            okInfo: "√",
            emptyInfo: "邮箱不可以为空",
        },
        {
            input: $.get(".tel"),
            reg: /^1[3-8]\d{9}$/,
            errorInfo: "手机号格式不正确",
            okInfo: "√",
            emptyInfo: "手机号不可以为空",
        },
        {
            input: $.get(".password"),
            reg: /^\w{6,12}$/,
            errorInfo: "密码格式不正确",
            okInfo: "√",
            emptyInfo: "密码不可以为空",
        },
        {
            input: $.get(".address"),
            reg: /^.+$/,
            errorInfo: "地址格式不正确",
            okInfo: "√",
            emptyInfo: "地址不可以为空",
        },
        ],
        btn: $.get(".btn")
    })
})  