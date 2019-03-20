import Vue from 'vue'
import './plugins/vuetify'
import './plugins/axios'
import App from './App.vue'

import router from '@/router'
import store from '@/store'

import VueCurrencyFilter from 'vue-currency-filter'
Vue.use(VueCurrencyFilter)


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
