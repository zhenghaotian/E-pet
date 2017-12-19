<template>
  <div id="wrap">
    <router-view></router-view>
    <!--底部-->
    <foot />
  </div>
</template>

<script>

  import foot from './components/foot/foot.vue'


  export default {
    mounted () {
      this.$store.dispatch('getData')
    },
    components: {
      foot
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  #wrap
    width 100%
    height 100%
    overflow hidden

</style>