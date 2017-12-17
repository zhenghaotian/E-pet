<template>
  <div class="brandSpecial-wrap">
    <div class="brandSpecial-head">
      <img class="brandSpecial-img1" src="./70adf3f7cc4cbe58a7dc4865c4b4f932.jpg" alt="">
      <img class="brandSpecial-img2" src="./017c21f7004f3e834cebd12305d266cc.jpg" alt="">
    </div>
    <div class="brandSpecial-imgWrap">
      <a :href="datas.datas[13].content_images[0][0].target.param">
        <img :src="datas.datas[13].content_images[0][0].image" alt="">
      </a>
    </div>
    <!--分割线-->
    <CuttingLine />
    <div class="brandSpecial-imgWrap">
      <a :href="datas.datas[15].content_images[0][0].target.param">
        <img :src="datas.datas[15].content_images[0][0].image" alt="">
      </a>
    </div>
    <!--分割线-->
    <CuttingLine />
    <div class="brandSpecial-imgWrap">
      <a :href="datas.datas[17].content_images[0][0].target.param">
        <img :src="datas.datas[17].content_images[0][0].image" alt="">
      </a>
    </div>
    <!--分割线-->
    <CuttingLine />
    <div class="brandSpecial-imgWrap">
      <a :href="datas.datas[19].content_images[0][0].target.param">
        <img :src="datas.datas[19].content_images[0][0].image" alt="">
      </a>
    </div>
    <!--分割线-->
    <CuttingLine />
    <div class="brandSpecial-imgWrap">
      <a :href="datas.datas[21].content_images[0][0].target.param">
        <img :src="datas.datas[21].content_images[0][0].image" alt="">
      </a>
    </div>
    <!--分割线-->
    <CuttingLine />
    <div class="brandSpecial-imgWrap">
      <a :href="datas.datas[23].content_images[0][0].target.param">
        <img :src="datas.datas[23].content_images[0][0].image" alt="">
      </a>
    </div>
    <!--分割线-->
    <CuttingLine />
    <div class="brandSpecial-imgWrap">
      <a :href="datas.datas[25].content_images[0][0].target.param">
        <img :src="datas.datas[25].content_images[0][0].image" alt="">
      </a>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import CuttingLine from '../CuttingLine/CuttingLine.vue'
  export default {
    computed: {
      ...mapState(['datas'])
    },
    components: {
      CuttingLine
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .brandSpecial-wrap
    .brandSpecial-head
      .brandSpecial-img1
        margin-left 10px
        width 200px
      .brandSpecial-img2
        float right
        width 80px
    .brandSpecial-imgWrap
      a
        display inline-block
        width 100%
        height 100%
        img
          width 100%
</style>