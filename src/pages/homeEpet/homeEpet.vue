<template>
  <div>
    <!--顶部搜索栏-->
    <SearchBar />
    <!--导航栏-->
    <Nav />
  </div>
</template>

<script>
  import SearchBar from '../../components/SearchBar/SearchBar.vue'
  import Nav from '../../components/Nav/Nav.vue'
  export default {
    components: {
      SearchBar,
      Nav
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">

</style>