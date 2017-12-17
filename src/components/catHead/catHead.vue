<template>
  <div class="catHead-wrap">
    <router-link to="/homeEpet/home"></router-link>
    <span>{{catFood.page_title}}</span>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  export default {
    computed: {
      ...mapState(['catFood'])
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .catHead-wrap
    height 50px
    text-align center
    a
      margin-top 15px
      margin-left 10px
      float left
      width 11px
      height 18px
      background url("./img.png") no-repeat
      background-size 234px 159px
      background-position -201px -10px
    span
      display inline-block
      font-size 18px
      line-height 50px
</style>