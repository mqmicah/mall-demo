<template>
  <swiper ref="mySwiper" :options="swiperOptions">
    <slot></slot>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
  import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
  export default {
    name: 'carrousel',
    data() {
      return {
        swiperOptions: {
          pagination: {
            el: '.swiper-pagination'
          },
          loop : true,
          autoplay:true
        }
      }
    },
    computed: {
      swiper() {
        return this.$refs.mySwiper.$swiper
      }
    },
    mounted() {
      this.swiper.slideTo(1, 1000, true)
    },
    components:{
        Swiper, SwiperSlide
    }
  }
</script>
<style>
@import '~swiper/css/swiper.css'
</style>