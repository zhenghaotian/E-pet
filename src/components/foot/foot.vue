<template>
  <div class="foot-wrap">
    <div class="footLine"></div>
      <div class="footTab">
        <router-link to="/homeEpet/home">
          <span class="img1"></span>
        </router-link>
      </div>
      <div class="footTab">
        <router-link to="/classify/tab1">
          <span class="img2"></span>
        </router-link>
      </div>
      <div class="footTab">
        <router-link to="/shopCar">
          <span class="img3"></span>
        </router-link>
      </div>
      <div class="footTab">
        <router-link to="/myPet">
          <span class="img4"></span>
        </router-link>
      </div>
  </div>
</template>

<script>
  export default {}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .foot-wrap
    position absolute
    padding-top 4px
    z-index 10
    bottom 0px
    width 100%
    background #fff
    .footLine
      width 100%
      height 1px
      background #f3f4f5
    .footTab
      display inline-block
      width 24%
      a
        display inline-block
        width 100%
        height 38px
        text-align center
        .img1
          display inline-block
          width 35px
          height 38px
          background url("./img1.png") no-repeat
          background-size 100%
        .img2
          display inline-block
          width 35px
          height 38px
          background url("./img2.png") no-repeat
          background-size 100%
        .img3
          display inline-block
          width 35px
          height 38px
          background url("./img3.png") no-repeat
          background-size 100%
        .img4
          display inline-block
          width 35px
          height 38px
          background url("./img4.png") no-repeat
          background-size 100%
</style>