<template>
  <div class="classify-wrap">
    <div class="classify-head">
      <router-link to="/classify/tab1" class="tab1">分类</router-link>
      <router-link to="/classify/tab2" class="tab2">品牌</router-link>
      <a class="search" href="https://wap.epet.com/search.html?pet_type=cat&fw=0">
        <span></span>
      </a>
    </div>
    <div class="classify-content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  export default {
    mounted () {
      this.$store.dispatch('getClassify')
      this.$store.dispatch('getBrand')
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .classify-wrap
    background #f3f4f5
    .classify-head
      position relative
      z-index 10
      height 40px
      padding-left 35%
      background #ffffff
      border-bottom 1px #cbcbcb solid
      overflow hidden
      .tab1,.tab2
        color #333
        height 40px
        line-height 40px
        padding-left 10px
        margin-right 20px
        display inline-block
      .active
        border-bottom 2px solid #ed4044
      .search
        float right
        padding 5px
        margin-top 5px
        margin-right 5px
        width 30px
        height 30px
        span
          display inline-block
          width 20px
          height 20px
          background url("//static.epetbar.com/static_web/wap/src/images/background/search-ico.png")no-repeat
          background-size 100% 100%



</style>