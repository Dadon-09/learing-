const moduleB = {
    state: {
        moveList: [{
                movieName: 'CRACKS（2018）',
                imgsrc: require('@/assets/imgs/mine/movie1.png'),
                director: '赞恩.阿尔.拉菲亚',
                score: '9.1',
                id: 1111,
                spot: [{
                        text: '今日最热',
                        color: '#fbc34a'
                    },
                    {
                        text: '一周最热',
                        color: 'rgba(242, 108, 126, 1)'
                    }
                ],
                starring: "赞恩.阿尔.拉菲亚",
                mode: '购买'
            },
            {
                movieName: '大鱼海棠',
                id: 2222,
                imgsrc: require('@/assets/imgs/mine/movie3.png'),
                number: '16.4',
                director: '梁旋 季冠霖',
                data: '150分钟/动画/奇幻',
                mode: '预售'
            },
            {
                movieName: '现在去见你',
                id: 3333,
                imgsrc: require('@/assets/imgs/mine/movie2.png'),
                number: '15.3',
                director: '李俊赫',
                starring: "苏志燮 孙艺珍",
                mode: '购买'
            },
            {
                movieName: 'RETURN ON THE JEDI',
                id: 4444,
                imgsrc: require('@/assets/imgs/mine/movie4.png'),
                number: '15.3',
                director: '盖尔.曼库索',
                spot: [{
                    text: '口碑最佳',
                    color: 'rgba(60, 76, 172, 1)'
                }],
                mode: '购买'
            },
        ],
        oldlist: {
            movieName: 'CRACKS（2018）',
            imgsrc: require('@/assets/imgs/mine/movie1.png'),
            director: '赞恩.阿尔.拉菲亚',
            score: '9.1',
            id: 1111,
            spot: [{
                    text: '今日最热',
                    color: '#fbc34a'
                },
                {
                    text: '一周最热',
                    color: 'rgba(242, 108, 126, 1)'
                }
            ],
            starring: "赞恩.阿尔.拉菲亚",
            mode: '购买'
        },
        hotlist: [{
            id: 233,
            imgsrc: require('@/assets/imgs/mine/arrs1.png'),
        }, {
            id: 333,
            imgsrc: require('@/assets/imgs/mine/arrs2.png'),
        }, {
            id: 433,
            imgsrc: require('@/assets/imgs/mine/arrs3.png'),
        }, {
            id: 533,
            imgsrc: require('@/assets/imgs/mine/arrs4.png'),
        }, ]
    },
    namespaced: true,
    mutations: {
        getsonlist(state, val) {
            var objs = state.moveList.find(ele => ele.id == val)
            state.oldlist = objs
        },
    },

    getters: {

    }
}
export default moduleB