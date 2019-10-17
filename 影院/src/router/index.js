import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/home/index'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/home',
        name: 'home',
        component: Home,
        meta: {
            isShow: true
        }
    },
    {
        path: '/cinema',
        name: 'cinema',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import( /* webpackChunkName: "about" */ '../views/cinema/index.vue'),
        meta: {
            isShow: true
        }
    },
    {
        path: '/cinema/map', //影院地图界面
        name: 'map',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import( /* webpackChunkName: "about" */ '../views/cinema/map/index.vue'),
        meta: {
            isShow: false
        }
    },
    {
        path: '/cinemaDetails/:id', //影院地图界面
        name: 'cinemaDetails',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import( /* webpackChunkName: "about" */ '../views/cinema/cinemaDetails/index.vue'),
        meta: {
            isShow: false
        }
    },
    {
        path: '/ticket',
        name: 'ticket',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import( /* webpackChunkName: "about" */ '../views/ticket/index.vue'),
        meta: {
            isShow: true
        }
    },
    {
        path: '/movie',
        name: 'movie',
        redirect: "/movie/now",
        children: [{
            path: 'now',
            component: () => import('../views/movie/now/index.vue'),
            meta: {
                isShow: true
            }
        },
        {
            path: 'coming',
            component: () => import('../views/movie/coming/index.vue'),
            meta: {
                isShow: true
            }
        }
        ],
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import( /* webpackChunkName: "about" */ '../views/movie/index.vue')
    },
    {
        path: '/main',
        name: 'main',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import( /* webpackChunkName: "about" */ '../views/main/index.vue'),
        meta: {
            isShow: true
        }
    },
    {
        path: "*",
        redirect: "/home"
    }
    ]
})