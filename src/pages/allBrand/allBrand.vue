<template>
  <div class="allBrand-wrap">
    <headBack title="全部品牌" url="/classify/tab2" />
    <mt-index-list class="allBrand-content">
      <div class="aaa">
        <mt-index-section v-for="(letter, index) in allBrand" :index="letter.order" :key="index">
          <mt-cell title="" v-for="(item, index) in letter.list" :key="index">
            <div class="letter-wrap">
              <div class="letter-img">
                <img :src="item.logo" alt="">
              </div>
              <div class="letter-text">
                <p class="letter-p1">{{item.name}}</p>
                <p class="letter-p2">{{item.address}}</p>
              </div>
            </div>
          </mt-cell>
        </mt-index-section>
      </div>
    </mt-index-list>
  </div>
</template>

<script>
  import {mapState} from 'vuex'

  import headBack from '../../components/headBack/headBack.vue'

  export default {
    components: {
      headBack
    },
    mounted () {
      this.$store.dispatch('getAllBrand')
    },
    computed: {
      ...mapState(['allBrand'])
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .allBrand-wrap
    width 100%
    height 100%
    position absolute
    background #fff
    z-index 20
    .allBrand-content
      .aaa
        height 616px
        .letter-wrap
          border-bottom 1px #eee solid
          overflow hidden
          display block
          width 346px
          height 63px
          padding-top 10px
          .letter-img
            display inline-block
            width 90px
            height 40px
            padding 5px
            border 1px #eee solid
            img
              width 100%
              height 100%
          .letter-text
            display inline-block
            margin-left 20px
            overflow hidden
            vertical-align middle
            p
              box-sizing border-box
              font-size 14px
              color #333
            .letter-p1
              margin-bottom  10px
            .letter-p2
              font-size 12px
              color #999
</style>