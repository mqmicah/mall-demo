<template>
   <div>
       <navBar class='home-nav'>
            <h4 slot="center">购物街</h4>   
        </navBar>   
        <home-swiper :images='banners' />
        <recommend-view :recommends='recommends'/>
        <fulter/>
        <NavCorl :titles='["流行","新款","精选"]' class='home-navcorl' />
   </div>
</template>

<script>
import HomeSwiper from 'views/home/childcomps/HomeSwiper';
import RecommendView from 'views/home/childcomps/RecommendView';
import Fulter from 'views/home/childcomps/Fulter';

import NavBar from 'components/common/navBar/NavBar';
import NavCorl from 'components/common/navCorl/NavCorl'

import {getHomeMultidata} from 'network/home';

export default {
   data() {
       return {
           banners:[],
           recommends:[]
       }
   },
   created() {
       getHomeMultidata().then(res=>{
           this.banners=res.data.banner.list;
           this.recommends=res.data.recommend.list;
        })
   },
   mounted() {
   },
   components:{
        NavBar,
        HomeSwiper,
        RecommendView,
        Fulter,
        NavCorl
   }
}
</script>
<style scoped>
   .home-nav {
       background-color: #f66161;
       position: fixed;
       top:0;
       z-index: 100;
       width: 100%;
   }
   .home-nav h4 {
       font-size: 20px;
       color: #fff;
   }
   .home-navcorl {
       margin-top: 10px;
   }
</style>