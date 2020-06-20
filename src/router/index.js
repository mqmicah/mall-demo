import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const originalReplace = VueRouter.prototype.replace;
VueRouter.prototype.replace = function replace(location) {
    return originalReplace.call(this, location).catch(err => err);
};

const Home = () =>
    import ('views/home/Home.vue')
const User = () =>
    import ('views/user/User.vue')
const Catgory = () =>
    import ('views/catgory/Catgory.vue')
const Cart = () =>
    import ('views/cart/Cart.vue')

const routes = [{
    path: '/',
    redirect: '/home'
}, {
    path: '/home',
    component: Home
}, {
    path: '/catgory',
    component: Catgory
}, {
    path: '/cart',
    component: Cart
}, {
    path: '/user',
    component: User
}]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router