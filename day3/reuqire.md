# 引入reuqire
```javascript
    <script src="./lib/require.js" data-main="入口文件"></script>
```
# 定义模块
```javascript
    define(function(){
        // 逻辑代码


        // 抛出模块
        reutrn 标识符
    })
```
# 引入模块 
```javascript
    require(["模块的路径1","模块的路径2"...],function(a,b,...){
        // 逻辑代码

    })
```
# reuqire配置
```javascript
    require.config({
        // 基址路径  
        baseUrl:"js",
        // 起别名
        paths:{
            $:"dom"
        },
        // 引入非AMD规范
        shim:{
            "backbone":{
                deps:["依赖"],
                exports: 抛出模块名称
            }
        }
    })

```

# 规范
- AMD       reuqire.js
- CMD       sea.js
- commonjs  node.js