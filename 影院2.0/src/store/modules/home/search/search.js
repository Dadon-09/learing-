import Mock from "mockjs"
const Random = Mock.Random;

const moduleB = {
    namespaced: true,
    state: {
        lists: [{
                id: Random.guid(),
                text: '一条狗的使命'
            },
            {
                id: Random.guid(),
                text: '哥斯拉2:怪兽之王'
            },
            {
                id: Random.guid(),
                text: '大鱼海棠'
            },
            {
                id: Random.guid(),
                text: '下一任：前任'
            },
            {
                id: Random.guid(),
                text: '人间.小团圆'
            },
            {
                id: Random.guid(),
                text: '音乐家'
            },
            {
                id: Random.guid(),
                text: '爱你直到世界尽头'
            },
        ]

    },
    mutations: {

    }
}
export default moduleB