import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/home/index.vue'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/home', //主页
            name: 'home',
            component: Home,
            meta: {
                isShow: true
            }
        },
        {
            path: "/locate", //定位
            component: () => import('../views/home/locate/locate.vue'),
            meta: {
                isShow: false
            }
        },
        {

            path: '/search', // 搜索
            name: 'search',
            component: () => import( /* webpackChunkName: "about" */ '../views/home/search/search.vue'),
            meta: {
                isShow: false
            }
        },

        {
            path: '/sign', // 签到
            name: 'sign',
            component: () => import( /* webpackChunkName: "about" */ '../views/home/sign/sign.vue'),
            meta: {
                isShow: false
            }
        },
        {
            path: '/cinema', //影院列表
            name: 'cinema',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import( /* webpackChunkName: "about" */ '../views/cinema/index.vue'),
            meta: {
                isShow: true
            }
        }, {
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
            path: '/cinemaDetails/:id', //影院详情界面
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
            path: '/ticket', //购票
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
            path: '/movie', //电影列表
            name: 'movie',
            redirect: "/movie/coming",
            children: [{
                    path: 'now', //即将上映
                    component: () => import('../views/movie/now/index.vue'),
                    meta: {
                        isShow: true
                    }
                },
                {
                    path: 'coming', //正在热映
                    component: () => import('../views/movie/coming/index.vue'),
                    meta: {
                        isShow: true
                    }
                },

            ],
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import( /* webpackChunkName: "about" */ '../views/movie/index.vue'),
            meta: {
                isShow: true
            }
        },
        {
            path: '/actor', //演员详情
            component: () => import('../views/movie/actor/index.vue'),
            meta: {
                isShow: false
            }
        },
        {
            path: '/assess', //用户评论
            component: () => import('../views/movie/assess/index.vue'),
            meta: {
                isShow: false
            }
        },
        {
            path: '/boxOffice', //票房详情
            component: () => import('../views/movie/boxOffice/index.vue'),
            meta: {
                isShow: false
            }
        },
        {
            path: '/main', //个人主页
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
            path: '/each', //个人看过的电影
            name: 'each',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import( /* webpackChunkName: "about" */ '../views/main/each/index.vue'),
            meta: {
                isShow: false
            }
        },
        {
            path: '/install', //设置
            name: 'install',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import( /* webpackChunkName: "about" */ '../views/main/install/index.vue'),
            meta: {
                isShow: false
            }
        },
        {
            path: '/login', //登录
            name: 'login',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import( /* webpackChunkName: "about" */ '../views/main/login/index.vue'),
            meta: {
                isShow: false
            }
        },
        {
            path: '/ordersite', //确认订单
            name: 'ordersite',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import( /* webpackChunkName: "about" */ '../views/cinema/order/index.vue'),
            meta: {
                isShow: false
            }
        },
        {
            path: "*",
            redirect: "/home"
        },
        {
            path: '/coupon', //优惠券
            name: 'coupon',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import( /* webpackChunkName: "coupon" */ '../views/main/Coupon/coupon.vue'),
            meta: {
                isShow: false,
            }
        },
        {
            path: '/message', //消息
            name: 'message',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import( /* webpackChunkName: "coupon" */ '../views/main/message/message.vue'),
            meta: {
                isShow: false,
            }
        },
        {
            path: '/details', //消息列表
            name: 'details',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import( /* webpackChunkName: "coupon" */ '../views/main/message/details.vue'),
            meta: {
                isShow: false,
            }
        },
        {
            path: '/order', //订单
            name: 'order',
            redirect: "/order/all",
            component: () => import('../views/main/myorder/index.vue'),
            meta: {
                isShow: false,
            },
            children: [{
                    path: 'all', //全部订单
                    name: 'all',
                    component: () => import( /* webpackChunkName: "all" */ '../views/main/myorder/all/all.vue'),
                    meta: {
                        isShow: false,
                    }
                },
                {
                    path: 'pay', //待支付
                    name: 'pay',
                    component: () => import( /* webpackChunkName: "coupon" */ '../views/main/myorder/pay/pay.vue'),
                    meta: {
                        isShow: false,
                    }
                },
                {
                    path: 'evalute', //待评价
                    name: 'evalute',
                    component: () => import( /* webpackChunkName: "coupon" */ '../views/main/myorder/evalute/evalute.vue'),
                    meta: {
                        isShow: false,
                    }
                },
                {
                    path: 'back', //退款
                    name: 'back',
                    component: () => import( /* webpackChunkName: "coupon" */ '../views/main/myorder/back/back.vue'),
                    meta: {
                        isShow: false,
                    }
                },
            ]
        },
        {
            path: '/ticketinfo/:id', //购票信息
            name: 'ticketinfo',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import( /* webpackChunkName: "coupon" */ '../views/main/myorder/ticketinfo/ticketinfo.vue'),
            meta: {
                isShow: false,
            }
        },
        {
            //电影评分
            path: '/mark',
            name: 'mark',
            component: () => import( /* webpackChunkName: "about" */ '../views/movie/mark/index.vue'),
            meta: {
                isShow: false,
            }
        },
        {
            path: '/newchoose', //选座
            name: 'newchoose',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import( /* webpackChunkName: "about" */ '../views/cinema/chooseSeats/newchoose.vue'),
            meta: {
                isShow: false
            }
        },
        {
            //电影详情
            path: '/moviedetails',
            name: 'moviedetails',
            component: () => import( /* webpackChunkName: "moviedetails" */ '../views/movie/moviedetails/index.vue'),
            meta: {
                isShow: false,
            }
        },
    ]
})