import Vue from 'vue'
import Router from 'vue-router'
import pageOne from '../view/page/pageOne.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      redirect: '/page1'
    },
    {
      path: '/page1',
      name: 'page1',
      component: pageOne
    }
  ]
})
