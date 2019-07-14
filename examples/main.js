import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueL10nCurrency from '../src'

Vue.use(VueL10nCurrency)
const l10nCurrency = new VueL10nCurrency({})
Vue.config.productionTip = false

new Vue({
  l10nCurrency,
  router,
  render: h => h(App)
}).$mount('#app')