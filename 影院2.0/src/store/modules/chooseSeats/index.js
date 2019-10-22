import Mock from "mockjs"

var Random = Mock.Random;

var arr = [];
for (var i = 0; i < 3; i++) {
    var arry = [];
    for (var k = 0; k < 3; k++) {
        var arrx = [];
        for (var j = 0; j < 12; j++) {
            var obj = {
                id: Random.guid(),
                status: 1,
                isShow: true,
                isTaken: false,
                isChoose: false,
                x: j + 1,
                y: (i + 1) * (k + 1)
            };
            arrx.push(obj)
        }
        arry.push(arrx)
    }
    arr.push(arry)
}

arr[0][0][0].isShow = false;
arr[0][0][1].isShow = false;
arr[0][0][10].isShow = false;
arr[0][0][11].isShow = false;

arr[0][1][0].isShow = false;
arr[0][1][11].isShow = false;

arr[1][1][5].isTaken = true;
arr[1][1][6].isTaken = true;

export default {
    namespaced: true,
    state: {
        cinema: {
            id: '1234',
            name: '耀莱成龙影城（建业店）',
            room: '3号激光厅银幕',

            maxX:11,//这里是下标
            maxY:8,
            seats: arr
        },
        movie: {
            id: '111',
            name: '后来的我们',
            time: '15:30—17:14',
            type: '原版3D',
        },
        confirmArr: [],
        seatsArr:[]
    },
    mutations: {
        confirm(state){
            var seats=state.cinema.seats;
            var arr=[];
            seats.forEach(a=>{
                a.forEach(b=>{
                    b.forEach(c=>{
                        if (c.isChoose){
                            arr.push(c);
                        }
                    })
                })
            });
            state.confirmArr=arr;
            console.log(state.confirmArr);

        },
        choose(state,val){
            var seats=state.cinema.seats;
            seats.forEach(a=>{
                a.forEach(b=>{
                    b.forEach(c=>{
                        if (c.id===val){
                            c.isChoose=!c.isChoose;
                        }
                    })
                })
            });
        }
    },
    actions: {},
    getters: {
        seatsArr(state){
            var arr=[];
            var seats=state.cinema.seats;
            for (var i=0;i< seats.length;i++){
                for ( var k=0;k<seats[i].length;k++){
                    for (var j=0;j<seats[i][k].length;j++){
                        arr.push(seats[i][k][j]);
                    }
                }
            }
            // state.seatsArr.push(arr);
            return arr
        },
    }
}