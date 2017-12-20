<template>
  <div class="brand-wrap" ref="brandScroll">
    <!--内容区-->
    <div class="brand-content">
      <div class="brand-card" v-for="(item, index) in brand" :key="index">
        <div class="title">
          <span>—— {{item.title}} ——</span>
        </div>
        <ul>
          <li v-for="(brand, index) in item.list" :key="index">
            <a href="https://wap.epet.com/brand/bd14.html?fw=0">
              <div class="brand-img">
                <img :src="brand.logo" alt="">
              </div>
              <p class="name">{{brand.name}}</p>
              <p class="place">{{brand.address}}</p>
            </a>
          </li>
        </ul>
        <div class="brand-line"></div>
      </div>
    </div>
    <!--显示全部的跳转图标-->
    <router-link to="/allBrand" class="allBrand">全部</router-link>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  import {mapState} from 'vuex'
  export default {
    computed: {
      ...mapState(['brand'])
    },
    mounted () {
      this.$nextTick(() => {
      setTimeout(() => {
        new BScroll(this.$refs.brandScroll, {
          click: true,
          scrollY: true,
        })
      },100)
    })
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .brand-wrap
    position relative
    height 600px
    background #fff
    .brand-content
      .title
        padding-top 30px
        color #999
        font-size 12px
        text-align center
      ul
        width 100%
        li
          width 30%
          display inline-block
          margin-top: 20px
          margin-left 10px
          overflow hidden
          a
            width 100%
            height 100%
            display inline-block
            .brand-img
              width 90px
              height 42px
              border 1px solid #e2e2e2
              padding 10px
              img
                width 100%
                height 100%
            .name
              text-align center
              height 20px
              overflow hidden
              text-overflow ellipsis
              white-space nowrap
              font-size 13px
              margin-top 5px
            .place
              text-align center
              color #999
              height 20px
              overflow hidden
              text-overflow ellipsis
              white-space nowrap
              font-size 13px
              margin-top 5px

      .brand-line
        margin 20px 0
        background #eeee
        width 100%
        height 10px
    .allBrand
      position absolute
      bottom 15%
      right 10px
      background rgba(0,0,0,.4)
      line-height 40px
      border-radius 50%
      width 40px
      height 40px
      color #fff
      font-size 12px
      text-align center

</style>