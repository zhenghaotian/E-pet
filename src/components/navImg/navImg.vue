<template>
  <div class="navImg-wrap">
    <ul>
      <li v-for="(item, index) in datas.datas[1].menus" :key="index">
        <a :href="item.target.param">
          <img :src="item.image" alt="">
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
  import {mapState} from 'vuex'

  export default {
    computed: {
      ...mapState(['datas'])
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .navImg-wrap
    ul
      overflow hidden
      li
        float left
        width 20%
        height 10%
        a
          width 100%
          height 100%
          img
            width 100%
            height 100%
</style>