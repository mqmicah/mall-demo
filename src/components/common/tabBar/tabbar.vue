<template>
   <div id='tabBar'>
       <slot></slot>
   </div>
</template>

<script>
export default {
   data() {
       return {
   
       }
   },
   created() {
   
   },
   mounted() {
   
   }
}
</script>
<style scoped>
   #tabBar {
       width: 100%;
       background-color: #f6f6f6;
       position: fixed;
       display: flex;
       bottom: 0;
   }
</style>