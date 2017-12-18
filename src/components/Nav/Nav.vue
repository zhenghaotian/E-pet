<template>
  <div class="nav-Wrap" v-if="datas.menus">
    <div class="Nav-wrap"  ref="scrollLeft">
      <el-menu class="el-menu-demo Nav-inner" mode="horizontal" >
        <router-link to="/homeEpet/home">
          <el-menu-item class="nav"  index="1">{{datas.menus[0].menu_name}}</el-menu-item>
        </router-link>
        <router-link to="/catFoot">
          <el-menu-item class="nav" index="2" >{{datas.menus[1].menu_name}}</el-menu-item>
        </router-link>
        <router-link to="/catFoot">
          <el-menu-item class="nav" index="3" >{{datas.menus[2].menu_name}}</el-menu-item>
        </router-link>
        <router-link to="/catFoot">
          <el-menu-item class="nav" index="4" >{{datas.menus[3].menu_name}}</el-menu-item>
        </router-link>
        <router-link to="/catFoot">
          <el-menu-item class="nav" index="5" >{{datas.menus[4].menu_name}}</el-menu-item>
        </router-link>
        <router-link to="/catFoot">
          <el-menu-item class="nav" index="6" >{{datas.menus[5].menu_name}}</el-menu-item>
        </router-link>
        <router-link to="/catFoot">
          <el-menu-item class="nav" index="7" >{{datas.menus[6].menu_name}}</el-menu-item>
        </router-link>
      </el-menu>
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
        navName: '/homeEpet/home'
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
        }, 150)
      })
    },

  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .Nav-wrap
    width 100%
    position fixed
    top 52px
    z-index 10
    .Nav-inner
      width 180%
      padding 0 10px
      font-size 14px
      display inline-block
      a
        display inline-block
        height 100%
        .nav
          display inline-block
  .contentWrap
    position relative
    top 115px
    margin-bottom 115px
</style>