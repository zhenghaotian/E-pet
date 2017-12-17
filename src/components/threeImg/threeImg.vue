<template>
  <div class="threeImg-wrap" v-if="url">
    <div class="threeImg-left">
      <a :href="url.content_images[0][0].target.param">
        <img :src="url.content_images[0][0].image" alt="">
      </a>
    </div>
    <div class="threeImg-right">
      <div class="threeImg-top">
        <a :href="url.content_images[1][0].target.param">
          <img :src="url.content_images[1][0].image" alt="">
        </a>
      </div>
      <div class="threeImg-bottom">
        <a :href="url.content_images[1][1].target.param">
          <img :src="url.content_images[1][1].image" alt="">
        </a>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  export default {
    props: {
      url: Object
    },
    computed: {
      ...mapState(['datas'])
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .threeImg-wrap
    height 250px
    .threeImg-left
      float left
      width 50%
      height 100%
      a
        display inline-block
        width 100%
        height 100%
        img
          width 100%
          height 100%
    .threeImg-right
      float right
      width 50%
      height 100%
      .threeImg-top
        height 50%
        a
          display inline-block
          width 100%
          height 100%
          img
            width 100%
            height 100%
      .threeImg-bottom
        height 50%
        a
          display inline-block
          width 100%
          height 100%
          img
            width 100%
            height 100%

</style>