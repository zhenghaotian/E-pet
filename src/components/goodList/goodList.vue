<template>
  <div class="goodList-wrap" v-if="catFood.datas">
    <div class="goodList-head demo-affix" ref="goodlist">
      <ul>
        <li class="list" v-for="(item, index) in catFood.datas[6].menus" :key="index" @click="toggleClass(index)">{{item.menu_name}}</li>
      </ul>
    </div>
    <div class="goodList-content"  v-for="(goods,index) in catFood.datas[6].list" v-if="isShow == index" :key="index">
      <ul>
        <li v-for="(good, index) in goods" :key="index">
          <a href="https://wap.epet.com/goods/110828.html?fw=0">
            <div class="contentLeft">
              <img :src="good.photo" alt="">
            </div>
            <div class="contentRight">
              <h2 class="title">{{good.subject}}</h2>
              <p class="goodPrice">
                <span class="s1">{{good.sale_price}}</span>
                <s class="s2">{{good.dprice}}</s>
              </p>
              <img class="car" src="//static.epetbar.com/static_web/wap/src/images/addcart.png" alt="">
              <p class="sales">{{good.comments}}{{good.sold}}</p>
            </div>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import BScroll from 'better-scroll'
  export default {
    data () {
      return {
        isShow: 0
      }
    },
    computed: {
      ...mapState(['catFood'])
    },
    methods: {
      toggleClass (mun) {
        let list = document.querySelectorAll('.list')
        list.forEach((item, index) => {
          item.classList.remove('active')
          if(index == mun){
            item.classList.add('active')
          }
        })
        /*设置内容区显示*/
        this.isShow = mun
      }
    },
    mounted () {
      this.$nextTick(() => {
        new BScroll(this.$refs.goodlist, {
          click: true,
          scrollX: true,
          eventPassthrough: 'vertical',
          bounce: false,
          momentum: false
        })
      })
    }

  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .goodList-wrap
    margin-top 20px
    .goodList-head
      ul
        padding -bottom 20px
        width 130%
        li
          display inline-block
          margin 5px 10px 5px 5px
          padding 5px 15px
          color #333
          font-size 12px
          border 1px #f5f5f5 solid
          background #f5f5f5
          border-radius 5px
        .active
          border 1px #e35356 solid
          background #fff
          color #e35356
    .goodList-content
      ul
        li
          border 1px #e7e7e7 solid
          a
            display inline-block
            width 100%
            height 100%
            padding 10px
            .contentLeft
              vertical-align top
              display inline-block
              width 100px
              height 100px
              img
                width 100%
                height 100%
            .contentRight
              display inline-block
              height 100px
              width 245px
              .title
                height 32px
                font-size 15px
                width 100%
                overflow hidden
                color #333
                margin-bottom 30px
              .goodPrice
                .s1
                  color #e35356
                  font-size 15px
                  font-weight: 700
                .s2
                  color #666
                  font-size 12px
              .sales
                margin-top 10px
                color #999
                font-size 12px
              .car
                float right
                width 25px
</style>