<template>
  <div class="brandSpecial-wrap">
    <div class="brandSpecial-head">
      <img class="brandSpecial-img1" :src="datas.datas[12].value.left.img.image" alt="">
      <img class="brandSpecial-img2" src="data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAABkAAD/4QOJaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzExMSA3OS4xNTgzMjUsIDIwMTUvMDkvMTAtMDE6MTA6MjAgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6MUU0NjkyM0Q4MURERTcxMTgwNjQ5QjE1Q0E4Njk5RDgiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OUM4RDhDQTRERjM3MTFFNzg4QTZCNTQxODY4MDNGN0EiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OUFGMzM3OUNERjM3MTFFNzg4QTZCNTQxODY4MDNGN0EiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MjBmYmUzZTUtOTJmNy0xNjRmLWIzYTgtMjcxNWJjNTFjN2M4IiBzdFJlZjpkb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6YTgwNDBlYjEtZGYzNC0xMWU3LWJhZWQtYmQ1NGUwNGJjZjU3Ii8+IDwvcmRmOkRl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" alt="">
    </div>
    <div class="brandSpecial-imgWrap">
      <a :href="datas.datas[13].content_images[0][0].target.param">
        <img :src="datas.datas[13].content_images[0][0].image" alt="">
      </a>
    </div>

    <!--分割线-->
    <CuttingLine />
    <div class="brandSpecial-imgWrap">
      <a :href="datas.datas[15].content_images[0][0].target.param">
        <img :src="datas.datas[15].content_images[0][0].image" alt="">
      </a>
    </div>
    <!--分割线-->
    <CuttingLine />
    <div class="brandSpecial-imgWrap">
      <a :href="datas.datas[17].content_images[0][0].target.param">
        <img :src="datas.datas[17].content_images[0][0].image" alt="">
      </a>
    </div>
    <!--分割线-->
    <CuttingLine />
    <div class="brandSpecial-imgWrap">
      <a :href="datas.datas[19].content_images[0][0].target.param">
        <img :src="datas.datas[19].content_images[0][0].image" alt="">
      </a>
    </div>
    <!--分割线-->
    <CuttingLine />
    <div class="brandSpecial-imgWrap">
      <a :href="datas.datas[21].content_images[0][0].target.param">
        <img :src="datas.datas[21].content_images[0][0].image" alt="">
      </a>
    </div>
    <!--分割线-->
    <CuttingLine />
    <div class="brandSpecial-imgWrap">
      <a :href="datas.datas[23].content_images[0][0].target.param">
        <img :src="datas.datas[23].content_images[0][0].image" alt="">
      </a>
    </div>
    <!--分割线-->
    <CuttingLine />
    <div class="brandSpecial-imgWrap">
      <a :href="datas.datas[25].content_images[0][0].target.param">
        <img :src="datas.datas[25].content_images[0][0].image" alt="">
      </a>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import CuttingLine from '../CuttingLine/CuttingLine.vue'
  export default {
    computed: {
      ...mapState(['datas'])
    },
    components: {
      CuttingLine
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .brandSpecial-wrap
    .brandSpecial-head
      .brandSpecial-img1
        margin-left 10px
        width 200px
      .brandSpecial-img2
        float right
        width 80px
    .brandSpecial-imgWrap
      a
        display inline-block
        width 100%
        height 100%
        img
          width 100%
</style>