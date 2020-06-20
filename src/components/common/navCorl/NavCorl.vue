<template>
   <div class='nav-corl'>
       <div :key='item' v-for='(item,index) in titles' @click='itemClick(index)' class='corl-item'>
           <span :class='{"item-acitve":index==num}'>{{item}}</span>
       </div>
   </div>
</template>

<script>
export default {
   data() {
       return {
           num:0
       }
   },
   props:{
       titles:{
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
   methods:{
       itemClick(index) {
           this.num=index;
       }
   }
}
</script>
<style scoped>
   .nav-corl {
       display: flex;
       text-align: center;
   }
   .corl-item {
       flex:1;
   }

    .corl-item span {
        padding-bottom: 5px;
    }

   .item-acitve {
       color: var(--color-high-text);
       border-bottom: 3px solid #ff5777;
   }
</style>