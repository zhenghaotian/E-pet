<template>
  <div class="headBack-wrap">
    <router-link :to=url></router-link>
    <span>{{title}}</span>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  export default {
    props: {
      title: String,
      url: String
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .headBack-wrap
    position relative
    z-index 10
    background #fff
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