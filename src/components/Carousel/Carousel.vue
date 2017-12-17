<template>
  <div class="Carousel-wrap block">
    <el-carousel height="150px" arrow="hover">
      <el-carousel-item v-for="carousel in url.value" :key="item">
        <a :href="carousel.target.param">
          <img class="Carousel-img" :src="carousel.image" alt="">
        </a>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
  export default {
    props: {
      url: Object
    }

  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .Carousel-wrap
    width 100%
    a
      display inline-block
      width 100%
      height 100%
      .Carousel-img
        width 100%
</style>