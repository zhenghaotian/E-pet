<template>
  <div class="catFood-wrap" v-if="catFood.datas">
    <!--头部-->
    <catHead />
    <!--图片轮播广告-->
    <Carousel :url="catFood.datas[0]"  v-if="catFood.datas"/>
    <!--食物切换-->
    <foodTab />
    <!--三图-->
    <threeImg :url="catFood.datas[3]" />
    <!--精选活动-->
    <div class="activity-wrap" v-if="catFood.datas">
      <div class="activity-inner">
        <img :src="catFood.datas[4].value.center.img.image" alt="">
      </div>
    </div>
    <!--2个广告/商品-->
    <advertisingCommodity />
  </div>
</template>

<script>
  import {mapState} from 'vuex'

  import catHead from '../../components/catHead/catHead.vue'
  import Carousel from '../../components/Carousel/Carousel.vue'
  import foodTab from '../../components/foodTab/foodTab.vue'
  import threeImg from '../../components/threeImg/threeImg.vue'
  import advertisingCommodity from '../../components/advertisingCommodity/advertisingCommodity.vue'

  export default {
    mounted () {
      this.$store.dispatch('getCatFood')
    },
    computed: {
      ...mapState(['catFood'])
    },
    components: {
      catHead,
      Carousel,
      foodTab,
      threeImg,
      advertisingCommodity
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .catFood-wrap
    margin-bottom 115px
    .activity-wrap
      .activity-inner
        width 50%
        margin 0 auto
        img
          margin-top 10px
          margin-bottom 10px
          width 100%
</style>