import Vue from 'vue'
import App from './App.vue'
import router from '@/router/index'
import store from '@/store/index'
// 引入移动端适配
import 'lib-flexible'
// 初始化样式
import "@/assets/css/common/reset.css"
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')