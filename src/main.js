import Vue from 'vue'
import App from './App.vue'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import VueParallaxJs from 'vue-parallax-js'
require('dotenv').config()


Vue.config.productionTip = false

Vue.use(BootstrapVue)
Vue.use(
	AOS.init()
)
Vue.use(VueParallaxJs)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
