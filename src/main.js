import Vue from 'vue'
import router from './router'
import App from './App.vue'
import Vuetify from 'vuetify'

import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify);

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
