// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/routes'
import './config'

Vue.config.productionTip = false

let Learn = Vue.component('app', App)

Learn = new Learn({
  el: '#app',
  router
})

router.beforeEach((to, from, next) => {
  Vue.nextTick(() => {
    let mainContent = document.querySelector('.main-content')

    if (mainContent) {
      // mainContent.scrollTop = 0
    }

    Learn.closeSidenav()

    next()
  })
})

router.afterEach((to) => {
  // console.log('router----aftereach')
})
