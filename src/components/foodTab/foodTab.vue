<template>
  <div class="foodTab-wrap" v-if="catFood.datas">
    <div class="foodTab">
      <div class="tab1"  @click="active(1)">
        <img :src="catFood.datas[1].data.categorys[0].image" alt="" v-if="!tab1">
        <img :src="catFood.datas[1].data.categorys[0].image_choose" alt="" v-if="tab1">
      </div>
      <div class="tab2"  @click="active(2)">
        <img :src="catFood.datas[1].data.categorys[1].image" alt=""  v-if="!tab2">
        <img :src="catFood.datas[1].data.categorys[1].image_choose" alt="" v-if="tab2">
      </div>
      <div class="tab3"  @click="active(3)">
        <img :src="catFood.datas[1].data.categorys[2].image" alt="" v-if="!tab3">
        <img :src="catFood.datas[1].data.categorys[2].image_choose" alt="" v-if="tab3">
      </div>
      <div class="tab4"  @click="active(4)">
        <img :src="catFood.datas[1].data.categorys[3].image" alt="" v-if="!tab4">
        <img :src="catFood.datas[1].data.categorys[3].image_choose" alt="" v-if="tab4">
      </div>
    </div>
    <div class="foodContent">
      <!--进口主粮-->
      <div class="content" v-if="tab1">
        <div class="item" v-for="(item, index) in catFood.datas[1].data.categorys[0].small_cate.menus" :key="index">
          <a href="https://wap.epet.com/goodslist.html?extend_pam=cateid:722|extends_str:4603|">
            <img :src="item.image" alt="">
          </a>
        </div>
      </div>
      <!--国产主粮-->
      <div class="content" v-if="tab2">
        <div class="item" v-for="(item, index) in catFood.datas[1].data.categorys[1].small_cate.menus" :key="index">
          <a href="https://wap.epet.com/goodslist.html?extend_pam=cateid:722|extends_str:4603|">
            <img :src="item.image" alt="">
          </a>
        </div>
      </div>
      <!--口味配方-->
      <div class="content" v-if="tab3">
        <div class="item" v-for="(item, index) in catFood.datas[1].data.categorys[2].small_cate.menus" :key="index">
          <a href="https://wap.epet.com/goodslist.html?extend_pam=cateid:722|extends_str:4603|">
            <img :src="item.image" alt="">
          </a>
        </div>
      </div>
      <!--单斤价格-->
      <div class="content" v-if="tab4">
        <div class="item" v-for="(item, index) in catFood.datas[1].data.categorys[3].small_cate.menus" :key="index">
          <a href="https://wap.epet.com/goodslist.html?extend_pam=cateid:722|extends_str:4603|">
            <img :src="item.image" alt="">
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  export default {
    data () {
      return {
        tab1: true,
        tab2: false,
        tab3: false,
        tab4: false,
      }
    },
    computed: {
      ...mapState(['catFood'])
    },
    methods: {
      active (num){
        this.tab1 = false
        this.tab2 = false
        this.tab3 = false
        this.tab4 = false

        switch (num) {
          case 1 :
            this.tab1 = true
            break
          case 2 :
            this.tab2 = true
            break
          case 3 :
            this.tab3 = true
            break
          case 4 :
            this.tab4  = true
            break

        }
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .foodTab-wrap
    .foodTab
      font-size 0
      div
        display inline-block
        width 25%
        img
          width 100%
    .foodContent
      .content
        overflow hidden
        .item
          float left
          width 33%
          a
            display inline-block
            width 100%
            height 100%
            img
              width 100%
</style>