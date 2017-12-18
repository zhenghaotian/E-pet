<template>
  <div class="everyDay-wrap">
    <!--头部标题-->
    <div class="everyDay-head">
      <a href="javascript:;" class="a1">
        <img class="img1" src="./suprice.png" alt="">
      </a>
      <!--剩余时间-->
      <span class="text">距本场结束 <span class="time">{{m}}</span> : <span class="time">{{s}}</span></span>
      <a href="javascript:;" class="a2">
        <img class="img2" src="./c6b7ac04e8c6cb827365c17bd74aef59.png" alt="">
      </a>
    </div>
    <!--商品内容-->
    <div class="everyDay-content" ref="every">
      <ul>
        <li v-for="(good, index) in datas.datas[3].goods" :key="index">
          <a href="javascript:;">
            <img :src="good.image.image" alt="">
            <p class="p1">￥{{good.sale_price}}</p>
            <p class="p2">{{good.little_price}}</p>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  import {mapState} from 'vuex'
  export default {
    data () {
      return {
        m:'29',
        s:'59'
      }
    },
    computed: {
      ...mapState(['datas'])
    },
    mounted () {
      this.countTime()

      this.$nextTick(() => {
        setTimeout(() => {
          new BScroll(this.$refs.every, {
            click: true,
            scrollX: true,
            eventPassthrough: 'vertical'
          })
        },100)
      })
    },
    methods: {
      countTime () {
        let mm = 29
        let ss = 59
        let timer = 0

        timer = setInterval(() => {
          ss--
          if(ss<0){
            ss = 59
            mm--
          }

          if(mm == 0){
            clearInterval(timer)
          }
          if(mm <10){
            this.m = '0'+mm
          }else {
            this.m = mm+''
          }
          if(ss <10){
            this.s = '0'+ss
          }else {
            this.s = ss+''
          }
        }, 1000)

      }

    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .everyDay-wrap
    .everyDay-head
      overflow hidden
      .img1
        height 24px
        vertical-align top
        margin-top 10px
      .text
        display inline-block
        padding-top 10px
        height 40px
        line-height 20px
        .time
          display inline-block
          width 20px
          height 20px
          border 1px brown solid
      .a2
        float right
        .img2
          height 40px
    .everyDay-content
      ul
        overflow hidden
        width 120%
        li
          float left
          margin-right 10px
          margin-top 10px
          margin-bottom 10px
          a
            display inline-block
            width 100%
            height 100%
            text-align center
            img
              width 84px
              height 84px
            .p1
              font-size 14px
              color red
              margin-top 10px
              margin-bottom 10px
            .p2
              font-size 12px
              color #999
</style>