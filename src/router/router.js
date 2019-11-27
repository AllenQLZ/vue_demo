import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/home/index'
import Login from '../components/login/index'
import Mine from '../components/mine/index'
import HomePage from '../components/homePage/index'
import Cart from '../components/cart/index'
import Shopping from '../components/shopping/index'
import Setting from '../components/setting/index'
Vue.use(Router);
export default new Router({
    routes: [
        {
            path: '/home', name: 'home', component: Home,

        },
        {
            path: '/login',
            name: 'login',
            component: Login
        },
        {
            path: '/mine',
            name: 'mine',
            component: Mine
        },
        {
            path: '/homePage',
            name: 'homePage',
            component: HomePage
        },
        {
            path: '/cart',
            name: 'cart',
            component: Cart
        },
        {
            path: '/shopping',
            name: 'shopping',
            component: Shopping
        },
        {
            path: '/setting',
            name: 'setting',
            component: Setting
        },
    ]
})
