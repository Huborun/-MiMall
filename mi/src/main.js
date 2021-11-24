import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import store from './store/index'
import VueAxios from 'vue-axios'
import VueLazyLoad from 'vue-lazyload'
import VueCookies from 'vue-cookie'

Vue.config.productionTip = false

axios.defaults.timeout = 10000; 

Vue.use(VueCookies)
Vue.use(VueAxios,axios);
Vue.use(VueLazyLoad,{
  loading:"/imgs/loading-bars.svg"
})

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
