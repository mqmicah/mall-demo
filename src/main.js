import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueAwesomeSwiper from 'vue-awesome-swiper'

Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper)
Vue.prototype.$bus = new Vue();

new Vue({
    router,
    store,
    VueAwesomeSwiper,
    render: h => h(App)
}).$mount('#app')