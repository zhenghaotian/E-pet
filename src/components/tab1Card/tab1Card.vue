<template>
  <div class="card-wrap" v-if="card">
    <div v-if="card.type == 0">
      <div class="title">
        <h2>
          <a href="https://wap.epet.com/goodslist.html?extend_pam=cateid:721&fw=0">{{card.title}}</a>
        </h2>
      </div>
      <div class="card-list">
        <ul>
          <li v-for="(item, index) in card.list" :key="index">
            <a href="https://wap.epet.com/goodslist.html?id_param=cateid_722&fw=0">
              <img :src="item.photo" alt="">
              <p>{{item.name}}</p>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div v-if="card.type == 2">
      <div class="title2">
        <h2>
          {{card.title}}
        </h2>
      </div>
      <div class="card-list2">
        <ul>
          <li v-for="(item, index) in card.list" :key="index">
            <a href="https://wap.epet.com/brand/bd495.html?fw=0">
              <img :src="item.logo" alt="">
              <p>{{item.name}}</p>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  export default {
    computed: {
      ...mapState(['classify'])
    },
    props: {
      card: Object
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .card-wrap
    background #fff
    .title
      padding-top 20px
      padding-left 5px
      padding-bottom 5px
      h2
        a
          width 100%
          height 100%
          color #999
    .card-list
      padding-left 5px
      ul
        li
          padding 5px 0
          display inline-block
          width 96px
          height 116px
          a
            display inline-block
            width 100%
            height 100%
            img
              width 85px
              height 85px
            p
              padding-top 10px
              text-align center
    .title2
      padding-top 30px
      padding-left 5px
      padding-bottom 5px
      color #999
    .card-list2
      padding-left 5px
      ul
        li
          margin-bottom 10px
          padding 5px 0
          display inline-block
          width 135px
          a
            display inline-block
            width 100%
            height 100%
            text-align center
            img
              width 90px
              height 45px
            p
              padding-top 10px
              text-align center
</style>