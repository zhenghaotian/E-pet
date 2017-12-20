<template>
  <div class="login-wrap">
    <div class="login-head">
     <div class="head-top">
       <!--返回箭头-->
       <router-link to="/"  class="back"></router-link>
       <!--注册-->
       <a class="register" href="https://wap.epet.com/register.html">注册</a>
     </div>
     <div class="head-img">
       <!--E宠-->
       <img src="//static.epetbar.com/mpet/images/login/logo.png" alt="">
     </div>
      <div class="head-tab">
        <div @click="tabLogin(false)">普通登录<span v-show="isShow"></span></div>
        <div @click="tabLogin(true)">手机动态密码登录<span v-show="!isShow"></span></div>

      </div>
    </div>
    <div class="loginScroll"  ref="loginScroll">
      <div class="login-content">
        <!--tab1-->
        <div class="loginTab1-wrap" v-show="isShow">
          <div class="tab1-user">
            <span></span>
            <input type="text" placeholder="手机号/邮箱/用户名">
          </div>
          <div class="tab1-pwd">
            <span></span>
            <input type="text" placeholder="输入密码">
          </div>
        </div>
        <!--tab2-->
        <div class="loginTab2-wrap" v-show="!isShow">
          <div class="tab2-user">
            <span></span>
            <input type="text" value="" placeholder="已注册的手机号" v-model="phone">
          </div>
          <div class="tab2-pwd tab2-pwd1">
            <span></span>
            <input type="text" id="code_input" value="" placeholder="请输入图片内容">
            <!--图片验证-->
            <div id="v_container"></div>
          </div>
          <div class="tab2-pwd">
            <span></span>
            <input type="text" placeholder="动态密码" v-model="verifyPassword">
            <a class="verifyBtn" href="javascript:;" @click="getverifyPwd">获取动态密码</a>
          </div>
        </div>
        <!--主体内容-->
        <div class="content-wrap">
          <div class="forgetPwd">
            <a href="https://wap.epet.com/login.html?do=findpassword">忘记密码?</a>
          </div>
          <div class="loginBtn" @click="phoneLogin">
            登录
          </div>
          <div class="loginWay">
            <span>合作网站登录</span>
            <div class="loginWay-img">
              <img src="https://static.epetbar.com/mpet/images/login/login_ico4.png" alt="">
              <img src="https://static.epetbar.com/mpet/images/login/login_ico2.png" alt="">
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  import axios from 'axios'
  import BScroll from 'better-scroll'

  import '../../../static/js/gVerify'
  export default {
    data () {
      return {
        isShow: true,
        imgPwd: '',
        phone: '',
        verifyPassword: ''
      }
    },
    methods: {
      tabLogin (isPhone){
        if(isPhone){
          this.isShow = false
        }else {
          this.isShow = true
        }
      },
      getverifyPwd () {
        let {phone,imgPwd} = this
        //验证图形验证码
        var res = this.verifyCode.validate(document.getElementById("code_input").value);
        imgPwd = res?true:false

        if(imgPwd){
          let url = `/api/sendcode?phone=${phone}`
          axios.get(url)
            .then((req) => {
              if(req.data.code == 0){
                console.log('请求短信验证成功!')
              }
            },(err) => {
              console.log('请求短信验证失败!')
            })
        }

      },
      phoneLogin () {
        let {verifyPassword, phone} = this

        axios.post('/api/login', {
          phone: phone,
          code: verifyPassword
        })
          .then((req) => {
            if(req.data.code==0){
              alert('登录成功')
            }else {
              alert('手机号或验证码输入错误')
            }

          }, (err) => {
            console.log('发送登录请求失败')
          })

      }
    },
    mounted () {
      this.verifyCode = new GVerify("v_container")

      new BScroll(this.$refs.loginScroll,{
        scrollY: true,
        click: true
      })
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .login-wrap
    .login-head
      position relative
      z-index 10
      width 100%
      height 171px
      background url("https://img1.epetbar.com/2017-09/21/11/2ac7b0a4f0ab1e4a63819e0668d1cb39.png") no-repeat
      .head-top
        height 50px
        padding 20px 10px 0 10px
        .back
          display inline-block
          width 15px
          height 20px
          background url("https://static.epetbar.com/mpet/images/personal-bico3.png") no-repeat
          background-size 100% 100%
        .register
          float right
          color #fff
      .head-img
        text-align center
        margin-bottom 7px
        img
          width 20%
      .head-tab
        background rgba(255,255,255,.2)
        div
          position relative
          display inline-block
          color #fff
          text-align center
          line-height 44px
          width 49%
          height 44px
          span
            position absolute
            bottom 0
            left 0
            right 0
            margin auto
            border-left 10px solid transparent;
            border-right 10px solid transparent;
            border-bottom 10px solid #fff;
            width 0
            height 0
    .loginScroll
      height 400px
      .login-content
        .loginTab1-wrap
          margin-top 10px
          .tab1-user,.tab1-pwd
            margin 0 auto
            width 80%
            padding 12px
            border-bottom #e2e2e2 solid 1px
            span
              display inline-block
              vertical-align top
              width 17px
              height 21px
            input
              color #666
              border none
              outline none
              font-size 15px
              &::-webkit-input-placeholder
                color #999
          .tab1-user
            span
              background url("https://static.epetbar.com/mpet/images/ico3.png") no-repeat
              background-size contain
          .tab1-pwd
            span
              background url("https://static.epetbar.com/mpet/images/ico4.png") no-repeat
              background-size contain
        .loginTab2-wrap
          margin-top 10px
          .tab2-user,.tab2-pwd
            margin 0 auto
            width 80%
            padding 12px
            border-bottom #e2e2e2 solid 1px
            span
              display inline-block
              vertical-align top
              width 17px
              height 21px
            input
              width 170px
              color #666
              border none
              outline none
              font-size 15px
              &::-webkit-input-placeholder
                color #999
          .tab2-user
            span
              background url("https://static.epetbar.com/mpet/images/ico3.png") no-repeat
              background-size contain
          .tab2-pwd
            span
              background url("https://static.epetbar.com/mpet/images/ico4.png") no-repeat
              background-size contain
            .verifyBtn
              display inline-block
              width 100px
              height 30px
              border 1px solid #eb4c33
              border-radius 5px
              text-align center
              line-height 30px
              vertical-align middle
          .tab2-pwd1
            #v_container
              vertical-align middle
              display inline-block
              width 85px
              height 30px
        .content-wrap
          width 80%
          margin 0 auto
          .forgetPwd
            overflow hidden
            margin-top 10px
            color #898989
            a
              float right
              font-size 14px
          .loginBtn
            margin-top 20px
            text-align center
            font-size 16px
            background #2ec975
            color #fff
            height 40px
            line-height 40px
            border-radius 10px
          .loginWay
            margin-top 100px
            span
              display block
              color #999
              text-align center
            .loginWay-img
              margin-top 20px
              img
                margin-left 60px
                width 60px
                height 60px
</style>