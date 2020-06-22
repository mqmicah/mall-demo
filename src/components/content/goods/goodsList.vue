<template>
   <div class='goods'>
       <goods-list-item :key='index' v-for='(item,index) in goods' :goodsItem='item'></goods-list-item>
   </div>
</template>

<script>
import GoodsListItem from 'components/content/goods/goodsListItem';
export default {
   data() {
       return {
   
       }
   },
   props:{
       goods:{
           type:Array,
           default() {
               return []
           }
       }
   },
   created() {
   
   },
   mounted() {
   
   },
   components:{
        GoodsListItem
   }
}
</script>
<style scoped>
   .goods{
       display: flex;
       flex-wrap: wrap;
       justify-content: center;
       margin-top: 20px;
   }
</style>