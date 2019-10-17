import Vue from 'vue'
import Vuex from 'vuex'
import home from '@/store/modules/home/home.js'
import cinema from '@/store/modules/cinema/index.js'
Vue.use(Vuex)
// console.log(home)
export default new Vuex.Store({
    state: {
        
    },
    mutations: {

    },
    actions: {

    },
    modules: {
        home: home,
        cinema: cinema
    }
})