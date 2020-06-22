<template>
   <div>
       <p v-if='moreList'>上拉加载更多~</p>
        <p v-else>已经没有更多啦~</p>
   </div>
</template>

<script>
export default {
   data() {
       return {
   
       }
   },
   props:{
       moreList:{
           type:Boolean,
           default:true
       }
   },
   created() {
   
   },
   mounted() {
   
   }
}
</script>
<style scoped>
   
</style>