<template>
   <div id='home'>
        <navBar class='home-nav'>
            <h4 slot="center">购物街</h4>   
        </navBar> 
        <nav-corl 
            :titles='["流行","新款","精选"]'
            class='home-navcorl'
            @catgoryindex='catgoryIndex' ref='navFixed2' :class='{navFixed:fixedTop}' v-show="fixedTop"/>
       <scroll class='content' ref='scroll'
            :probe-type='3'
            @scrollnum='scrollNum'
            @loadmore='loadMore' 
            :pull-up-load='true'>
            <home-swiper :images='banners' @imgLoad='imgLoad' />
            <recommend-view :recommends='recommends'/>
            <fulter/>
            <nav-corl 
            :titles='["流行","新款","精选"]'
            class='home-navcorl'
            @catgoryindex='catgoryIndex' ref='navFixed1' :class='{navFixed:fixedTop}' v-show="!fixedTop"/>
            <goods-list :goods='showGoods' ref='goods'/>
            <more-list class='moreText' :moreList='moreList'/>
        </scroll>
        <scroll-top @click.native='scrollTop' v-show='isShow'></scroll-top>
   </div>
</template>

<script>
import HomeSwiper from 'views/home/childcomps/HomeSwiper';
import RecommendView from 'views/home/childcomps/RecommendView';
import Fulter from 'views/home/childcomps/Fulter';

import NavBar from 'components/common/navBar/NavBar';
import NavCorl from 'components/common/navCorl/NavCorl';
import Scroll from 'components/common/scroll/Scroll';

import GoodsList from 'components/content/goods/goodsList';
import ScrollTop from 'components/content/scrollTop/ScrollTop';
import MoreList from 'components/content/moreList/MoreList';

import {getHomeMultidata,getHomeList} from 'network/home';

export default {
   data() {
       return {
           banners:[],
           recommends:[],
           goods:{
               'pop':{page:0,list:[]},
               'new':{page:0,list:[]},
               'sell':{page:0,list:[]}
           },
           currentType:'pop',
           isShow:false,
           moreList:true,
           fixedTop:false,
           tabOffsetTop:0
       }
   },
   created() {
        this.getHomeMultidata()
        this.getHomeList('pop')
        this.getHomeList('new')
        this.getHomeList('sell')
   },
   mounted() {
       const refresh = this.debounce(this.$refs.scroll && this.$refs.scroll.refresh,200);
       this.$bus.$on('imageload',()=>{
           refresh();
        })
   },
   computed:{
       showGoods() {
           return this.goods[this.currentType].list
       }
   },
   methods:{
       //防抖动
       debounce(fn,wait) {
           let timer = null;
           return function () {
               if(timer) clearTimeout(timer)
               timer=setTimeout(()=>{
                   fn.call(this)
               }, wait);
           }
       },
       getHomeMultidata() {
            getHomeMultidata().then(res=>{
                this.banners=res.data.banner.list;
                this.recommends=res.data.recommend.list;
            })
       },
       getHomeList(type) {
           let page = this.goods[type].page + 1;
           getHomeList(type,page).then(
                res=>{
                    this.goods[type].list.push(...res.data.list);
                    this.goods[type].page+=1;
                    this.$refs.scroll.pullLoad();
                }).catch(err=>{
                    console.log(err);
                    this.moreList=false;
                })
       },
       catgoryIndex(index) {
           switch(index) {
               case 0 : this.currentType='pop';break;
               case 1 : this.currentType='new';break;
               case 2 : this.currentType='sell';break;
           }
           this.$refs.navFixed1.num=index;
           this.$refs.navFixed2.num=index;
       },
       scrollTop() {
           this.$refs.scroll.scrollTop(0,0);
       },
       scrollNum(pos) {
          this.isShow=(-pos.y) > 1000;
          this.fixedTop=(-pos.y) > this.tabOffsetTop
       },
       loadMore() {
           this.getHomeList(this.currentType);
       },
       imgLoad() {
           this.tabOffsetTop=this.$refs.navFixed1.$el.offsetTop -44
       }
   },
   components:{
        NavBar,
        HomeSwiper,
        RecommendView,
        Fulter,
        NavCorl,
        GoodsList,
        Scroll,
        ScrollTop,
        MoreList
   }
}
</script>
<style scoped>
    #home {
       height: 100vh;
    }
   .home-nav {
       background-color: #f66161;
       z-index: 9999;
       width: 100%;
       position: relative;
   }
   .home-nav h4 {
       font-size: 20px;
       color: #fff;
   }
   .home-navcorl {
       position: relative;
       z-index: 999;
       background-color: #fff;
       height: 44px;
       line-height: 44px;
   }
   .content {
       height: calc(100% - 91px);
   }
   .moreText {
       text-align: center;
       font-size: 15px;
   }
</style>