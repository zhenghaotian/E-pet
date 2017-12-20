<template>
  <div class="nav-Wrap" v-if="datas.menus">
    <div class="Nav-wrap"  ref="scrollLeft">
      <ul class="Nav-inner">
        <li class="navLi" v-for="(item, index) in datas.menus" :key="index">
          <router-link :to=navName[index]>{{item.menu_name}}</router-link>
        </li>
      </ul>
    </div>
    <div class="contentWrap">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  import {mapState} from 'vuex'
  export default {
    data () {
      return {
        navName: ['/homeEpet/home', '/catFoot', '/catFoot', '/catFoot', '/catFoot', '/catFoot', '/catFoot']
      }
    },
    computed: {
      ...mapState(['datas'])
    },
    mounted () {
      this.$nextTick(() => {


        setTimeout(() => {
          this.scroll = new BScroll(this.$refs.scrollLeft, {
            click: true,
            scrollX: true,
            eventPassthrough: 'vertical',
            bounce: false
          })

          let liNodes = document.querySelectorAll('.navLi')
          liNodes[0].classList.add('active')
        }, 150)
      })



    }

  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .Nav-wrap
    width 100%
    position fixed
    top 42px
    padding-top 10px
    padding-bottom 10px
    z-index 10
    background #fff
    .Nav-inner
      width 170%
      padding 0 10px
      font-size 14px
      display inline-block
      li
        display inline-block
        a
          display inline-block
          padding 5px 20px
          height 100%
          .nav
            display inline-block
      .active
        border-bottom 1px solid #333
  .contentWrap
    position relative
    top 90px
</style>