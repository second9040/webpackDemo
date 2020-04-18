import Vue from 'vue'
import VueRouter from 'vue-router';
import isheader from '../views/header.vue'
import isfooter from '../views/footer.vue'
import cat1 from '../views/cat1.vue'
import cat2 from '../views/cat2.vue'
import cat3 from '../views/cat3.vue'
import catAll from '../views/catAll.vue'

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