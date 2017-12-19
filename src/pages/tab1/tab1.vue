<template>
  <div class="tab1-wrap" v-if="classify[0]">
    <div class="tab1Left-wrap" ref="tab1Scroll">
      <ul>
        <li v-for="(item, index) in classify" :key="index" @click="toggleShow(index)">
          {{item.name}}
        </li>
      </ul>
    </div>
    <div class="tab1CardScroll" ref="tab1CardScroll" >
      <div class="tab1CardScroll-inner">
        <div class="tab1Right-wrap" v-for="(list, index) in classify" v-if="isShow == index" :key="index">
          <tab1Card v-for="(card, index) in list.cate_list" :card="card" :key="index"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import BScroll from 'better-scroll'

  import tab1Card from '../../components/tab1Card/tab1Card.vue'
  export default {
    data () {
      return {
        isShow: 0
      }
    },
    computed: {
      ...mapState(['classify'])
    },
    mounted () {
      this.$nextTick(() => {
        setTimeout(() => {
          new BScroll(this.$refs.tab1Scroll, {
            click: true,
            scrollY: true,
            momentum: false
          })
          new BScroll(this.$refs.tab1CardScroll, {
            click: true,
            scrollY: true,
            momentum: false
          })
        },100)
      })
    },
    components: {
      tab1Card
    },
    methods: {
      toggleShow (num) {
        this.isShow = num
        console.log(num)
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .tab1-wrap
    overflow hidden
    .tab1Left-wrap
      position absolute
      z-index 10
      background #fff
      width 70px
      height 700px
      ul
        width 70px
        height 820px
        li
          border-bottom 1px solid #f3f4f5
          height 50px
          width 70px
          font-size 13px
          text-overflow ellipsis
          overflow hidden
          white-space nowrap
          text-align center
          box-sizing border-box
          padding 15px 0
    .tab1CardScroll
      height 570px
      .tab1Right-wrap
        margin-left 75px
        width 300px

</style>