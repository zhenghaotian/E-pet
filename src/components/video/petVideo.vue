<template>
  <div class="petVideo-wrap">
    <div class="petVideo-head">
      <a class="a1" :href="url1.value.left.img.target.param">
        <img class="petVideo-img1" :src="url1.value.left.img.image" alt="">
      </a>
      <a class="a2" :href="url1.value.right.img.target.param">
        <img class="petVideo-img2" :src="url1.value.right.img.image" alt="">
      </a>
    </div>
    <div class="petVideo-content">
      <a :href="url2.value[0].share_target.param.url">
        <img :src="url2.value[0].share_target.param.image" alt="">
      </a>
      <p class="petVideo-p1">{{url2.value[0].share_target.param.title}}</p>
      <p class="petVideo-p2">
        <img class="petVideo-logo" src="./view-black.png" alt="">
        <span class="petVideo-span1">{{url2.value[0].visit}} | </span>
        <span class="petVideo-span2">{{url2.value[0].time}}</span>
      </p>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  export default {
    props: {
      url1: Object,
      url2: Object
    },
    computed: {
      ...mapState(['datas'])
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .petVideo-wrap
    .petVideo-head
      .a1
        display inline-block
        width 200px
        height 100%
        .petVideo-img1
          margin-left 10px
          width 200px
      .a2
        display inline-block
        float right
        width 80px
        height 100%
        .petVideo-img2
          width 80px
  .petVideo-content
    text-align center
    a
      img
        width 100%
    .petVideo-p1
      margin-top 10px
      margin-bottom 10px
      color: #333
      white-space nowrap
      text-overflow ellipsis
      overflow hidden
      font-size 12px
    .petVideo-p2
      color #999
      font-size 12px
      margin-bottom 10px
      .petVideo-logo
        width 12px
</style>