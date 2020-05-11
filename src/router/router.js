import Vue from 'vue'
import VueRouter from 'vue-router';
import isheader from '../views/header.vue'
import isfooter from '../views/footer.vue'
import cat1 from '../views/cat1.vue'

const cat2 = () => import('../views/cat2')
const cat3 = () => import('../views/cat3')
const catAll = () => import('../views/catAll')

Vue.use(VueRouter)

const router = new VueRouter({
  linkActiveClass: 'active',
  history: true,
  mode: 'history',
  routes: [
    { path: '/', component: cat1 },
    { path: '/cat2', component: cat2 },
    { path: '/cat3', component: cat3 },
    { path: '/catAll', component: catAll }
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