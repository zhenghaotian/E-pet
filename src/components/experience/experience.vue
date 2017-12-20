<template>
  <div class="experience-wrap">
    <div class="experience-head">
      <img class="experience-img1" :src="datas.datas[27].value.left.img.image" alt="">
      <img class="experience-img2" :src="datas.datas[27].value.right.img.image" alt="">
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