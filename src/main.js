import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

import App from './App.vue'
import router from './router'


Vue.use(Vuetify, {
  // theme: {
  //   primary: "#cddc39",
  //   secondary: "#2196f3",
  //   accent: "#3f51b5",
  //   error: "#ff5722",
  //   warning: "#ffc107",
  //   info: "#00bcd4",
  //   success: "#009688"
  // }
})
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
