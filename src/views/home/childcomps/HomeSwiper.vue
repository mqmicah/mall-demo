<!--  -->
<template>
<div class='home-swiper'>
    <Swiper>
        <swiper-slide :key='index' v-for='(item,index) in images'>
            <a :href="item.link"><img slot="swiper-img" :src="item.image" alt="" @load='imgLoad'></a>
        </swiper-slide>
    </Swiper>
</div>
</template>

<script>
import Swiper from 'components/content/swiper/Swiper'
import {SwiperSlide} from 'vue-awesome-swiper'
export default {
    data() {
        return {
            emitLoad:false
        }
    },
    props:{
        images:{
            type:Array,
            default() {
                return {}
            }
        }
    },
    created() {

    },
    mounted() {

    },
    components:{
        Swiper,SwiperSlide,
    },
    methods:{
        imgLoad() {
            if(!this.emitLoad) {
                this.$emit('imgLoad');
                this.emitLoad=true;
            }
        }
    }
}
</script>
<style scoped>

</style>