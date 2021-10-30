import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faFacebookSquare, faGoogle } from '@fortawesome/free-brands-svg-icons'
import { faTimes, faSearch, faTimesCircle, faCheckCircle } from '@fortawesome/free-solid-svg-icons'

library.add(faFacebookSquare, faGoogle, faTimes, faSearch, faTimesCircle, faCheckCircle)
Vue.component('font-awesome', FontAwesomeIcon)

const HelloJs = require('hellojs/dist/hello.all.min.js');
const VueHello = require('vue-hellojs');

HelloJs.init({
  google: '330533625286-5673scc40rk9b1osng7un882f14bj3o1.apps.googleusercontent.com'
}/*, {
  redirect_uri: 'http://127.0.0.1:8081/api/google/callback'
}*/)

Vue.use(VueHello, HelloJs)

Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
