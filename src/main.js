// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import store from './store'

Vue.config.productionTip = false

// const BACKEND_PORT = process.env.BACKEND_PORT === null ? '' : `:${process.env.BACKEND_PORT}`
const BACKEND_PORT = `:443`
const BACKEND_DOMAIN = `https://port-0-frienselor-be-4fju66f2clmt7nvai.sel5.cloudtype.app`
axios.defaults.baseURL = `${BACKEND_DOMAIN}${BACKEND_PORT}`

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
