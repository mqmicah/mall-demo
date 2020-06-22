<template>
   <div class='list-item'>
       <div>
           <img :src="goodsItem.show.img" alt="" @load="imageLoad">
           <div class='item-content'>
               <p>{{goodsItem.title}}</p>
               <div class='price-coll'>
                    <span class='item-price'>￥{{goodsItem.price}}</span>
                    <span class='item-coll'>{{goodsItem.cfav}}</span>
               </div>
           </div>
       </div>
   </div>
</template>

<script>
export default {
   data() {
       return {
   
       }
   },
   props:{
       goodsItem:{
           type:Object,
           default(){
               return {}
           }
       }
   },
   created() {
   
   },
   mounted() {
   
   },
   methods:{
       imageLoad() {
           this.$bus.$emit('imageload')
       }
   }
}
</script>
<style scoped>
   .list-item {
       max-width: 180px;
       width: 180px;
       padding: 5px 5px 10%;
       position: relative;
        box-shadow: -3px -3px 10px #ccc;
        margin-bottom: 5px;
   }
   .list-item div:first-child {
       margin-left: 10px;
       margin-right: 10px;
   }
   .item-content p {
       font-size: 14px;
       margin: 5px 0;
   }
   .price-coll {
       position: absolute;
       bottom: 0;
       padding-bottom: 5px;
   }
   .item-price {
       color: var(--color-high-text);
   }
   .item-coll {
       position: relative;
       margin-left: 50px;
   }
   .item-coll::before {
        content:'';
        background: url('~assets/images/ax.svg') no-repeat center center /cover;
        width: 16px;
        height: 17px;
        position: absolute;
        left: -18px;
   }
</style>