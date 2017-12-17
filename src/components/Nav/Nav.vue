<template>
  <div class="navWrap">
    <div class="Nav-wrap">
      <div class="navWrap">
        <el-menu class="el-menu-demo Nav-inner" mode="horizontal" >
          <el-menu-item  select="click(index)" class="nav" v-for="(item, index) in datas.menus" :index="index" :key="index" >
            <router-link :to="navName">{{item.menu_name}}</router-link>
          </el-menu-item>
        </el-menu>
      </div>
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
    counted () {
//        alert('aaa')
//        let wrapper = document.querySelector('.Nav-wrap')
//        let scroll = new BScroll(wrapper, {
//          click: true,
//          scrollX: true
//        })
//        setTimeout(() => {
//          scroll.refresh()
//        }, 2000)
    },
    methoes: {
      click (index) {
        alert(index)
        switch (index) {
          case 0:
            this.navName = '/home'
            break
          case 1:
            this.navName = '/catFoot'
        }
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .Nav-wrap
    width 100%
    position fixed
    top 52px
    z-index 10
    .Nav-inner
      width 200%
      padding 0 10px
      font-size 14px
      display inline-block
      .nav
        display inline-block
  .contentWrap
    position relative
    top 112px
    margin-bottom 112px
</style>