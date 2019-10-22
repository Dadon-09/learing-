import Mock from "mockjs"
const Random = Mock.Random;
var arr = [];
for (var i = 0; i < 8; i++) {
    var obj = {
        id: Random.guid(),
        img: Random.dataImage("90x120"),
        text: Random.csentence(3, 5),
        date: Random.date(),
        noticeText: Random.cparagraph(2)
    }
    arr.push(obj);
}
const moduleA = {
    namespaced: true,
    state: {
        list: arr,
        // banner图片
        bannerImg: [{
                img: require("@/assets/imgs/home/banner1.jpg"),
                id: Random.id()
            },
            {
                img: require("@/assets/imgs/home/banner2.jpg"),
                id: Random.id()
            },
            {
                img: require("@/assets/imgs/home/banner3.jpg"),
                id: Random.id()
            }
        ],
        // hotFilm图片  热映
        hotFilmImg: [{
                img: require("@/assets/imgs/home/m1.jpg"),
                id: Random.id(),
                text: "傲慢与偏见"
            },
            {
                img: require("@/assets/imgs/home/m2.jpg"),
                id: Random.id(),
                text: "韩国电影"
            },
            {
                img: require("@/assets/imgs/home/m3.jpg"),
                id: Random.id(),
                text: "帕拉丁熊"
            },
            {
                img: require("@/assets/imgs/home/m4.jpg"),
                id: Random.id(),
                text: "韩国电影"
            },
            {
                img: require("@/assets/imgs/home/m4.jpg"),
                id: Random.id(),
                text: "韩国电影"
            },
            {
                img: require("@/assets/imgs/home/m4.jpg"),
                id: Random.id(),
                text: "韩国电影"
            },
        ],
        // coming图片   即将
        comingImg: [{
                img: require("@/assets/imgs/home/s1.jpg"),
                id: Random.id(),
                text: "My bluebery…",
                date: Random.date()
            },
            {
                img: require("@/assets/imgs/home/s2.jpg"),
                id: Random.id(),
                text: "THE WORLD…",
                date: Random.date()
            },
            {
                img: require("@/assets/imgs/home/s3.jpg"),
                id: Random.id(),
                text: "BABBIT HOLE",
                date: Random.date()
            },
            {
                img: require("@/assets/imgs/home/s3.jpg"),
                id: Random.id(),
                text: "BABBIT HOLE",
                date: Random.date()
            },
            {
                img: require("@/assets/imgs/home/s3.jpg"),
                id: Random.id(),
                text: "BABBIT HOLE",
                date: Random.date()
            },
        ],
        // notice图片 预告
        noticeImg: [{
                img: require("@/assets/imgs/home/banner2.jpg"),
                id: Random.id(),
                noticeText: Random.cparagraph(2)
            },
            {
                img: require("@/assets/imgs/home/jing2.jpg"),
                id: Random.id(),
                noticeText: Random.cparagraph(2)
            },
            {
                img: require("@/assets/imgs/home/jing2.jpg"),
                id: Random.id(),
                noticeText: Random.cparagraph(2)
            },
        ]
    },

    mutations: {

    }
}
export default moduleA