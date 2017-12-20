<template>
  <div class="Carousel-wrap block">
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="(carousel, index) in url.value" :key="index">
        <a :href="carousel.target.param">
          <img class="Carousel-img" :src="carousel.image" alt="">
        </a>
      </mt-swipe-item>
    </mt-swipe>
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
    height 160px
    a
      display inline-block
      width 100%
      height 100%
      .Carousel-img
        width 100%
</style>