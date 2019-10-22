import Mock from "mockjs"
const Random = Mock.Random;

const moduleC = {
    namespaced: true,
    state: {
        list: [{
                id: Random.guid(),
                img: require('@/assets/imgs/home/poster2.png'),
                text: '“要是他没有触犯我的骄傲， 我也很容易原谅他的骄傲。” ',
                title: '《傲慢与偏见》'
            },
            {
                id: Random.guid(),
                img: require('@/assets/imgs/home/poster2.png'),
                text: '“要是他没有触犯我的骄傲， 我也很容易原谅他的骄傲。” ',
                title: '《傲慢与偏见》'
            },
            {
                id: Random.guid(),
                img: require('@/assets/imgs/home/poster3.png'),
                text: '“要是他没有触犯我的骄傲， 我也很容易原谅他的骄傲。” ',
                title: '《傲慢与偏见》'
            },

        ]

    },
    mutations: {

    }
}
export default moduleC