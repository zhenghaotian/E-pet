<template>
  <div class="SearchBar-wrap">
    <div class="SearchBar-span-wrap">
      <span class="SearchBar-span">猫猫站|重庆</span>
    </div>
    <div class="SearchBar-input-wrap">
      <input type="text" class="SearchBar-input" placeholder="请输入内容">
    </div>
    <div class="SearchBar-icon-wrap">
      <a href="javascript:;" class="SearchBar-icon"></a>
    </div>


  </div>
</template>

<script>
  export default {}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .SearchBar-wrap
    position fixed
    z-index 10
    background #fff
    width 100%
    padding 10px 0 0 0
    height 32px
    .SearchBar-span-wrap
      display inline-block
      width 28%
      .SearchBar-span
        padding-left 8px
        color #898989
        display inline-block
        height 32px
        line-height 32px
    .SearchBar-input-wrap
      display inline-block
      width 55%
      height 20px
      .SearchBar-input
        border none
        outline none
        width 100%
        color #898989
        background #e9e9e9
        padding 2px
        border-radius 3px
        font-size 13px
        height 100%
    .SearchBar-icon-wrap
      width 12%
      display inline-block
      .SearchBar-icon
        vertical-align middle
        margin-left 4px
        display inline-block
        width 32px
        height 25px
        background url("./mydope.png") no-repeat
        background-size 100%
        background-position 0px 0px
</style>