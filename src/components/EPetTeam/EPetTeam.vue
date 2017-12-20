<template>
  <div class="EPetTeam-wrap">
    <a href="javascript:;">
      <img :src="datas.datas[5].content_images[0][0].image" alt="">
    </a>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  export default {
    computed: {
      ...mapState(['datas'])
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .EPetTeam-wrap
    a
      img
        width 100%
</style>