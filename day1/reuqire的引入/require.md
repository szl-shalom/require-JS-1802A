#  require的引入

```javascript
    <script src="./lib/require.js" data-main="入口文件"></script>
```

# 模块定义
```javascript
    define(function(){
        // 逻辑代码
        // 面向对象

        // 抛出模块
        return 名称
    })  

```


# 引入模块
```javascript
    require(["模块的路径1","模块的路径2"],function(a,b){
        // 逻辑代码
        // 调用实例化
    })
```