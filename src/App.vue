<template>
  <div id="app">
    <tabbartext></tabbartext>
    <router-view/>
  </div>
</template>
<script>

import Tabbartext from 'components/content/tabbartext';
export default {
   components:{
     Tabbartext
   }
}
</script>
<style lang="less">
@import 'assets/css/base.css';
</style>
