<template>
   <div>
    <tabbar>
      <tabbar-item path='/home' activeColor='red'>
          <img slot="item-icon" src="~assets/images/home.svg" alt="">
          <img slot="item-icon2" src="~assets/images/home-active.svg" alt="">
          <p slot="item-text">首页</p>
      </tabbar-item>
      <tabbar-item path='/catgory' activeColor='red'>
          <img slot="item-icon" src="~assets/images/catgory.svg" alt="">
          <img slot="item-icon2" src="~assets/images/catgory-active.svg" alt="">
          <p slot="item-text">分类</p>
      </tabbar-item>
      <tabbar-item path='/cart' activeColor='red'>
          <img slot="item-icon" src="~assets/images/cart.svg" alt="">
          <img slot="item-icon2" src="~assets/images/cart-active.svg" alt="">
          <p slot="item-text">购物车</p>
      </tabbar-item>
      <tabbar-item path='/user' activeColor='red'>
          <img slot="item-icon" src="~assets/images/user.svg" alt="">
          <img slot="item-icon2" src="~assets/images/use-active.svg" alt="">
          <p slot="item-text">我的</p>
      </tabbar-item>
    </tabbar>
   </div>
</template>

<script>
import Tabbar from 'components/common/tabBar/tabbar';
import TabbarItem from 'components/common/tabBar/tabbarItem';
export default {
   data() {
       return {
   
       }
   },
   components:{
        Tabbar,TabbarItem
   },
   created() {
   
   },
   mounted() {
       
   }
}
</script>
<style scoped>
   
</style>