<template>
  <div class="home-scroll-wrap" ref="homeScroll">
    <div class="home-wrap">
      <!--无缝滑屏-->
      <Carousel :url="datas.datas[0]" />
      <!--导航图片-->
      <navImg />
      <!--分割线-->
      <CuttingLine />
      <!--每日疯抢-->
      <everyDaySpecial />
      <!--分割线-->
      <CuttingLine />
      <!--E宠团-->
      <EPetTeam />
      <!--分割线-->
      <CuttingLine />
      <!--E宠国际-->
      <threeImg :url="datas.datas[7]" />
      <!--分割线-->
      <CuttingLine />
      <!--潮品视频-->
      <petVideo :url1="datas.datas[9]" :url2="datas.datas[10]" />
      <!--分割线-->
      <CuttingLine />
      <!--品牌特惠-->
      <brandSpecial />
      <!--分割线-->
      <CuttingLine />
      <!--体验馆-->
      <experience />
      <!--分割线-->
      <CuttingLine />
      <!--萌宠说-->
      <petVideo :url1="datas.datas[30]" :url2="datas.datas[31]" />
      <!--分割线-->
      <CuttingLine />
      <!--小剧场-->
      <petVideo :url1="datas.datas[33]" :url2="datas.datas[34]" />
      <!--底部分割线-->
      <div class="lineFoot">
        <img :src="datas.datas[36].content_images[0][0].image" alt="">
      </div>
      <!--底部-->
      <div class="footer-wrap">
        <div class="top-foot">
        <span class="top-span1">
          <a href="https://wap.epet.com/?pet_type=cat">触屏版</a>
        </span>
          <span class="top-span2">
          <a href="https://wap.epet.com/app.html">手机客户端</a>
        </span>
          <span class="top-span3">
          <a href="https://wap.epet.com/AboutEpet.html">
            关于我们
          </a>
        </span>
          <span class="top-span4">
          <a href="https://wap.epet.com/faq.html">
            关于我们
          </a>
        </span>
        </div>
        <div class="bottom-foot">
          © wap.epet.com 版权：重庆易宠科技有限公司
        </div>
      </div>

    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'

  import {mapState} from 'vuex'
  import Carousel from '../../components/Carousel/Carousel.vue'
  import navImg from '../../components/navImg/navImg.vue'
  import CuttingLine from '../../components/CuttingLine/CuttingLine.vue'
  import everyDaySpecial from '../../components/everyDaySpecial/everyDaySpecial.vue'
  import EPetTeam from '../../components/EPetTeam/EPetTeam.vue'
  import threeImg from '../../components/threeImg/threeImg.vue'
  import brandSpecial from '../../components/brandSpecial/brandSpecial.vue'
  import experience from '../../components/experience/experience.vue'
  import petVideo from '../../components/video/petVideo.vue'

  export default {
    computed: {
      ...mapState(['datas'])
    },
    components: {
      Carousel,
      navImg,
      CuttingLine,
      everyDaySpecial,
      EPetTeam,
      threeImg,
      brandSpecial,
      experience,
      petVideo
    },
    mounted () {
      this.$nextTick(() => {
        setTimeout(() => {
          this.scroll = new BScroll(this.$refs.homeScroll, {
            click: true,
            scrollY: true,
          })
        }, 150)
      })
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .home-scroll-wrap
    height 500px
    .home-wrap
      .lineFoot
        img
          width 100%
      .footer-wrap
        width 100%
        height 80px
        .top-foot
          margin-top 30px
          margin-bottom 15px
          font-size 14px
          color #333
          text-align center
          span
            margin-right 5px
        .bottom-foot
          text-align center
          font-size 12px
</style>