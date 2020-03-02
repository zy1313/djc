import Vue from 'vue'
import App from './App.vue';

import '../node_modules/vant/lib/index.css';
// 引入axios
import axios from "axios";
// 把axios写在vue的原型对象上
Vue.prototype.$axios=axios;
// 引入vant ui框架
import {Toast,Swipe, SwipeItem} from 'vant';
// 使用vant框架
Vue.use(Toast).use(Swipe).use(SwipeItem)
// 引入组件router
import router from './routers/index';
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
