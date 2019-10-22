import locateDate from "../../../../views/home/locate/data.json"
const hotArr = ["北京", "天津", "石家庄", "呼和浩特", "沈阳", "大连", "长春", "哈尔滨", "上海", "南京", "无锡", "常州", "苏州", "杭州", "宁波", "温州", "合肥", "福州", "厦门", "南昌", "济南", "青岛", "郑州", "武汉", "长沙", "广州", "深圳", "佛山", "东莞", "南宁", "重庆", "成都", "贵阳", "昆明", "西安"];
var hotDate = [];
const enlishArr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var enlishDate = [];
for (var i = 0; i < hotArr.length; i++) {
    var obj = {
        nameT: hotArr[i],
        ids: i + 1
    }
    hotDate.push(obj)
}
for (var i = 0; i < enlishArr.length; i++) {
    var obj = {
        name: enlishArr[i],
        id: i + 1
    }
    enlishDate.push(obj)
}
const moduleB = {
    state: {
        locateDate: locateDate,
        hotDate: hotDate,
        enlishDate: enlishDate
    }
}
export default moduleB