# E宠商城

## 使用better-scroll滑屏库

### 问题:
- new BScroll时要注意是否页面渲染完成
- 使用时要注意外层包裹容器一定要比内层包裹容器高度要小,否则无法滑动
- 注意配置选项

## 使用mint-ui库

### 问题
- 同时使用mint-ui和element-ui库时无法按需加载,会报错

## 使用gVerify.js库来完成图片验证码

### 使用方法
```
//HTML
<div id="v_container" style="width: 200px;height: 50px;"></div>
<input type="text" id="code_input" value="" placeholder="请输入验证码"/><button id="my_button">验证</button>

//JS
<script src="js/gVerify.js"></script>//引入插件
//调用
<script>
    var verifyCode = new GVerify("v_container");
    document.getElementById("my_button").onclick = function(){
        var res = verifyCode.validate(document.getElementById("code_input").value);
        if(res){
            alert("验证正确");
        }else{
            alert("验证码错误");
        }
    }
</script>
```

### 问题
1. 在mounted () {}生命周期函数中new 一个实例时要注意作用域
    - 在methods中需要引用实例
    - 所以在创建实例时不能用let,而是绑定到this中


## 使用服务器代理来解决本地服务器的跨域问题

### 使用方法
1. 打开config --> index.js
2. 配置dev中的proxyTable
```
proxyTable: {
    '/api': { //以 /api开头的地址都会被代理/api/login
      target: 'http://localhost:3000',  //访问服务器的地址
      changeOrigin: true, //是否允许跨域
      pathRewrite: {
        '^/api': '/'  //在服务器地址前加上前缀/login(/api/login)
      }
    }
  }
```


## 使用mock数据来模拟真实访问接口来获取数据
### 使用
1. 下载mockjs
2. 配置mockServer.js(自己创建)
    ```
    import Mock from 'mockjs'
    import data from './data.json'
    // 通过mockjs向外暴露接口
    Mock.mock('/api/home', data.header)
    ```
3. 在main中配置
    ```
    import './mock/mockServer'  //mock数据
    ```

## 使用vuex来管理状态
### 使用
1. 下载vuex
2. 配置
```
import Vue from 'vue'
import Vuex from 'vuex'

import state from './state'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'

Vue.use(Vuex)

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
```
3. 在main.js中配置
```
import store from './store/index'

new Vue({
  el: '#app',
  store,
  template: '<App/>',
  components: { App }
})
```

## 打包
### 方法
1. 打开build --> webpack.base.conf.js
2. 找到module.exports --> output -->publicPath
3. 修改publicPath为希望生成文件的目录名
    ```
    publicPath: '/epet/'
    ```
4. 运行npm run bulid命令

## 发送短信验证码
### 注册账号
1. 登录容联云通信,注册账号
2. 获取账号信息
    - ACCOUNT_SID: 账户id, 唯一
    - AUTH_TOKEN: 授权令牌, 唯一
    - Rest_URL: 基本url, 一样
    - AppID: 应用ID, 唯一

### 请求容联发送验证码短信
1. 下载依赖包
    ```
    npm install --save blueimp-md5 js-base64 moment request
    ```
2. 编写请求代码: login/sms_util.js
    ```
    /*
    用于生成短信验证码和发送验证码短信的工具模块
     */
    var md5 = require('blueimp-md5')
    var moment = require('moment')
    var Base64 = require('js-base64').Base64
    var request = require('request')
    
    /*
     生成指定长度的随机数
     */
    function randomCode(length) {
        var chars = ['0','1','2','3','4','5','6','7','8','9']
        var result = "" // 统一改名: alt + shift + R
        for(var i = 0; i < length ; i ++) {
            var index = Math.ceil(Math.random()*9)
            result += chars[index]
        }
        return result
    }
    exports.randomCode = randomCode
    
    /*
    向指定号码发送指定验证码
     */
    function sendCode(phone, code, callback) {
      
        var ACCOUNT_SID = '8aaf070855b647ab0155b9f80994058a'
        var AUTH_TOKEN = 'aa8aa679414e49df8908ea5b3d043c24'
        var Rest_URL = 'https://app.cloopen.com:8883'
        var AppID = '8aaf070855b647ab0155b9f809f90590'
        // 1. 准备请求url
        /*
         1.使用MD5加密（账户Id + 账户授权令牌 + 时间戳）。其中账户Id和账户授权令牌根据url的验证级别对应主账户。
         时间戳是当前系统时间，格式"yyyyMMddHHmmss"。时间戳有效时间为24小时，如：20140416142030
         2.SigParameter参数需要大写，如不能写成sig=abcdefg而应该写成sig=ABCDEFG
         */
        var sigParameter = ''
        var time = moment().format('YYYYMMDDHHmmss')
        sigParameter = md5(ACCOUNT_SID+AUTH_TOKEN+time)
        var url = Rest_URL+'/2013-12-26/Accounts/'+ACCOUNT_SID +'/SMS/TemplateSMS?sig='+sigParameter
    
        // 2. 准备请求体
        var body = {
            to : phone,
            appId : AppID,
            templateId : '1',
            "datas":[code,"1"]
        }
        //body = JSON.stringify(body);
    
        // 3. 准备请求头
        /*
         1.使用Base64编码（账户Id + 冒号 + 时间戳）其中账户Id根据url的验证级别对应主账户
         2.冒号为英文冒号
         3.时间戳是当前系统时间，格式"yyyyMMddHHmmss"，需与SigParameter中时间戳相同。
         */
        var authorization = ACCOUNT_SID + ':' + time
        authorization = Base64.encode(authorization)
        var headers = {
            'Accept' :'application/json',
            'Content-Type' :'application/json;charset=utf-8',
            'Content-Length': JSON.stringify(body).length+'',
            'Authorization' : authorization
        }
    
        // 4. 发送请求, 并得到返回的结果, 调用callback
        request({
            method : 'POST',
            url : url,
            headers : headers,
            body : body,
            json : true
        }, function (error, response, body) {
            callback(body.statusCode==='000000')
        })
    }
    exports.sendCode = sendCode
    ```

### 后台路由
1. 定义发送验证码和登陆的路由: login/login_server.js
    ```
    /**
     * 配置处理用户相关请求的路由模块
     */
    var sms_util = require('./sms_util')
    
    module.exports = function (router) {
    
        //保存所有phone:code的对象
        var users = {};
        // 模拟数据库用户表数据
        var db_users= [
          {_id: 1, phone: '13716962779'},
          {_id: 2, phone: '13716961234'},
          {_id: 3, phone: '13716962345'},
        ]
        /*
        发送验证码短信
         */
        router.get('/sendcode', function (req, res, next) {
            //1. 获取请求参数数据
            var phone = req.query.phone;
            //2. 处理数据
                //生成验证码(6位随机数)
            var code = sms_util.randomCode(6);
                //发送给指定的手机号
            console.log(`向${phone}发送验证码短信: ${code}`);
            sms_util.sendCode(phone, code, function (success) {//success表示是否成功
                if(success) {
                    //存储数据
                    users[phone] = code;
                    console.log('保存验证码: ', phone, code)
                }
            })
    
            //3. 返回响应数据
            res.send({"code": 0})
        })
    
    
        /*
        登陆
         */
        router.post('/login', function (req, res, next) {
            // /login?phone=13716962779&code=123123
            var phone = req.body.phone;
            var code = req.body.code;
            console.log('/login', phone, code);
    
            //检查code是否正确, 如果不正确, 返回{"code" : 1}
            if(users[phone]!=code) {
                res.send({code : 1});
                console.log('返回响应---不正确')
                return;
            }
            //删除保存的code
            delete users[phone];
    
            //模拟: 查询数据库表, 如果有, 返回, 如果没有添加
          // 根据phone在表中查找
          let user = db_users.find(user => user.phone===phone)
          // 如果存在, 返回包含user数据的对象
          if(user!=null) {
            res.send({
              "code": 0,
              "data": user
            })
            console.log('返回响应---查询')
            // 如果不存在, 添加一个新的user到表中, 并返回包含user数据的对象
          } else {
            user = {id: Date.now(), phone: phone}
            db_users.push(user)
            res.send({
              "code": 0,
              "data": user
            })
            console.log('返回响应---添加')
          }
        })
    }
    ```
2. 注册路由: routes/index.js
    ```
    var loginServer = require('../login/login_server')
    loginServer(router)
    ```