import Vue from 'vue'
import VueRouter from 'vue-router';
import isheader from '../views/header.vue'
import isfooter from '../views/footer.vue'
import '@fortawesome/fontawesome-free/css/all.css'
import '../assets/style/icomoon.css'

Vue.use(VueRouter)

const router = new VueRouter({
  linkActiveClass: 'active',
  history: true,
  mode: 'history',
  routes: [
    { path: '/', component: require('../views/cat1').default },
    { path: '/cat2', component: require('../views/cat2').default },
    { path: '/cat3', component: require('../views/cat3').default },
    { path: '/catAll', component: require('../views/catAll').default },
    { path: '/fontTest', component: require('../views/fontTest').default }
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