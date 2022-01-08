import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import store from './store/index'
import VueLazyLoad from 'vue-lazyload'
import VueCookies from 'vue-cookie'
import ElementUI from 'element-ui';
import commonurl from "./components/common/commonurl.vue"
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false

axios.defaults.timeout = 10000;

Vue.prototype.CURL = commonurl.curl;
Vue.prototype.axios = axios
Vue.use(VueCookies)
Vue.use(ElementUI);
Vue.use(VueLazyLoad, {
  loading: "/imgs/loading-bars.svg"
})

//设置标题
router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

new Vue({
  router,
  store,
  render: h => h(App),
  beforeCreate() {
    //全局事件总线
    Vue.prototype.$bus = this
  },
}).$mount('#app')
