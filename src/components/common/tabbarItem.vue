<template>
   <div class='tabbar-item' @click='itemClick'>
       <div v-if='!isActive'><slot name='item-icon'></slot></div>
       <div v-else><slot name='item-icon2'></slot></div>
       <div :style='colorStyle'><slot name='item-text'></slot></div>
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
   
   },
   methods:{
       itemClick() {
           this.$router.replace(this.path);
       }
   },
   props:{
       path:String,
       activeColor:{
           type:String,
           default:'red'
       }
   },
   computed:{
        isActive() {
            return this.$route.path.indexOf(this.path) !=-1;
        },
        colorStyle() {
            return this.isActive?{color:this.activeColor}:{}
        }
   }
}
</script>
<style scoped>
    .tabbar-item {
        flex: 1;
        text-align: center;
        padding: 5px 0;
    }
    .tabbar-item img {
        width: 25px;
        height: 25px;
    }
</style>