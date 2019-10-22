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



router.beforeEach((to, from, next) => {
    if (to.path == "/main") {
        if (localStorage.getItem("手机号")) {
            next()
        } else {
            next("/login")
        }
    } else {
        next()
    }
    // 跳转回到顶部
    window.scrollTo(0, 0)
})