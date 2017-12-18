<template>
  <div class="brand-wrap">
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
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  export default {
    computed: {
      ...mapState(['brand'])
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .brand-wrap
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
</style>