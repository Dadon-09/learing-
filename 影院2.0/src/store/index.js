import Vue from 'vue'
import Vuex from 'vuex'
import home from '@/store/modules/home/home.js'
import search from '@/store/modules/home/search/search.js'
import sign from '@/store/modules/home/sign/sign.js'
import mine from '@/store/modules/mine/mine.js'
import cinema from '@/store/modules/cinema/index.js'
import chooseSeats from './modules/chooseSeats/index.js'
import locate from './modules/home/locate/locate.js'
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
        search: search,
        sign: sign,
        locate: locate,
        mine: mine,
        cinema: cinema,
        chooseSeats: chooseSeats
    }
})