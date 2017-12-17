<template>
  <div class="SearchBar-wrap">
    <el-row>
      <el-col :span="7">
        <span class="SearchBar-span">猫猫站|重庆</span>
      </el-col>
      <el-col :span="14">
        <el-input size="mini" class="SearchBar-input" placeholder="请输入内容" prefix-icon="el-icon-search"></el-input>
      </el-col>
      <el-col :span="3">
        <a href="javascript:;" class="SearchBar-icon"></a>
      </el-col>
    </el-row>
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
    padding 20px 0 0 0
    height 32px
    .SearchBar-span
      padding-left 8px
      color #898989
      display inline-block
      height 32px
      line-height 32px
    .SearchBar-input
      color #898989
      background #e9e9e9
      padding 2px
      border-radius 3px
      font-size 13px
      height 100%
      padding 2px
    .SearchBar-icon
      margin-left 4px
      display inline-block
      width 32px
      height 25px
      background url("./mydope.png") no-repeat
      background-size 100%
      background-position 0px 0px
</style>