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
    },
    mutations: {

    }
}
export default moduleA