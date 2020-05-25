import Vue from 'vue'
import VueRouter from 'vue-router';
import isheader from '../views/header.vue'
import isfooter from '../views/footer.vue'
import cat1 from '../views/cat1.vue'
import '@fortawesome/fontawesome-free/css/all.css'
import '../assets/style/icomoon.css'
const cat2 = () => import('../views/cat2')
const cat3 = () => import('../views/cat3')
const catAll = () => import('../views/catAll')
const fontTest = () => import('../views/fontTest')
const lightBox = () => import('../views/lightBox')

Vue.use(VueRouter)

const router = new VueRouter({
  linkActiveClass: 'active',
  history: true,
  mode: 'history',
  routes: [
    { path: '/', component: cat1 },
    { path: '/cat2', component: cat2 },
    { path: '/cat3', component: cat3 },
    { path: '/catAll', component: catAll },
    { path: '/fontAwesome', component: fontTest },
    { path: '/lightBox', component: lightBox }
  ]
})
export default router

new Vue({
  el: '#app',
  router,
  components: {
    isheader,
    isfooter
  }
})