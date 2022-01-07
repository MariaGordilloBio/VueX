import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import provedor from './provedor'
//permite criar e deixar disponíveis em todas as instâncias de todos os componentes.
import http from '@/http'
//disponibilizar como objeto global($)
Vue.prototype.$http = http

Vue.config.productionTip = false

new Vue({
  router,
  store: provedor,
  render: h => h(App)
}).$mount('#app')
