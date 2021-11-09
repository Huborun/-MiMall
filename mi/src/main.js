import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueLazyLoad from 'vue-lazyload'

Vue.config.productionTip = false

// const mock = true;
// if(mock){
//   require('./mock/test')
// }
axios.defaults.timeout = 10000; 
// axios.interceptors.response.use(function(response){
//   let res = response.data;
//   if(res.status == 0){
//     return res.data;
//   }else if(res.status == 10){
//     window.location.href = '/#/login';
//   }else{
//     window.console.log(res.msg);
//   }
// });

Vue.use(VueAxios,axios);
Vue.use(VueLazyLoad,{
  // loading:'../public/imgs/loading-bars.svg'
  loading:"/imgs/loading-bars.svg"
})
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
