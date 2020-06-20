<template>
   <div class='recommend'>
       <div :key='index' v-for='(item,index) in recommends' class='recommend-item'>
            <a :href="item.link">
                <img :src="item.image" alt="">
                <p>{{item.title}}</p>
            </a>
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
       recommends:{
           type:Array,
           default() {
               return []
           }
       }
   },
   created() {
   
   },
   mounted() {
   
   }
}
</script>
<style scoped>
   .recommend {
       display: flex;
       text-align: center;
       border-bottom: 8px solid #eee;
   }
   .recommend-item {
       flex: 1;
       padding: 10px 5px 20px;
   }
   .recommend-item img {
       margin-bottom: 5px;
   }
</style>