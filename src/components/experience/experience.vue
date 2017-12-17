<template>
  <div class="experience-wrap">
    <div class="experience-head">
      <img class="experience-img1" src="./0954d3cd070051587d8f4d6af79882aa.jpg" alt="">
      <img class="experience-img2" src="./017c21f7004f3e834cebd12305d266cc.jpg" alt="">
    </div>
    <div class="experience-carousel">
      <carousel :url="datas.datas[28]"/>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import carousel from '../Carousel/Carousel.vue'
  export default {
    components: {
      carousel
    },
    computed: {
      ...mapState(['datas'])
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .experience-wrap
    .experience-head
      .experience-img1
        margin-left 10px
        width 200px
      .experience-img2
        float right
        width 80px
</style>