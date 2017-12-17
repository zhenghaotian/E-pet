<template>
  <div class="advertisingCommodity-wrap" v-if="catFood.datas">
    <!--第一个-->
    <div class="goods1-wrap">
      <!--图片1-->
      <div class="img1">
        <a :href="catFood.datas[5].data.advAndGoods[0].big_image.target.param">
          <img :src="catFood.datas[5].data.advAndGoods[0].big_image.image" alt="">
        </a>
      </div>
      <!--商品1-->
      <div class="goods1" ref="goods1">
        <ul>
          <li v-for="(good, index) in catFood.datas[5].data.advAndGoods[0].goods" :key="index">
            <a :href="good.small_image.target.param">
              <div class="logo">
                <img :src="good.small_image.image" alt="">
              </div>
              <p class="text">{{good.subject}}</p>
              <p class="price">{{good.price}}</p>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <!--第二个-->
    <div class="goods1-wrap">
      <!--图片2-->
      <div class="img2">
        <a :href="catFood.datas[5].data.advAndGoods[1].big_image.target.param">
          <img :src="catFood.datas[5].data.advAndGoods[1].big_image.image" alt="">
        </a>
      </div>
      <!--商品2-->
      <div class="goods2" ref="goods2">
        <ul>
          <li v-for="(good, index) in catFood.datas[5].data.advAndGoods[1].goods" :key="index">
            <a :href="good.small_image.target.param">
              <div class="logo">
                <img :src="good.small_image.image" alt="">
              </div>
              <p class="text">{{good.subject}}</p>
              <p class="price">{{good.price}}</p>
            </a>
          </li>
        </ul>
      </div>
    </div>

  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import BScroll from 'better-scroll'
  export default {
    computed: {
      ...mapState(['catFood'])
    },
    mounted () {
      this.$nextTick(() => {
        console.log(this.$refs.goods1)
        setTimeout(() => {
          new BScroll(this.$refs.goods1, {
            click: true,
            tap: true,
            scrollX: true
          })
          new BScroll(this.$refs.goods2, {
            click: true,
            tap: true,
            scrollX: true
          })
        },100)
      })
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .advertisingCommodity-wrap
    .goods1-wrap
      .img1,.img2
        a
          display inline-block
          width 100%
          height 100%
          img
            width 100%
      .goods1,.goods2
        overflow hidden
        ul
          overflow hidden
          width 200%
          li
            padding 0 5px
            float left
            width 110px
            height 170px
            border 1px solid #e7e7e7
            a
              display inline-block
              width 100%
              height 100%
              .logo
                padding 18px
                img
                  width 100%
              .text
                color #666
                height 32px
                font-size 12px
                line-height 16px
                overflow hidden
              .price
                margin-top 5px
                color #e35356
                font-size 14px
                text-align center

</style>