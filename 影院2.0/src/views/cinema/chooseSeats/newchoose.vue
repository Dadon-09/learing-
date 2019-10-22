<template>
  <div class="newchoose">
    <img class="seatbgc" src="../../../assets/imgs/cinema/seat_bg.png" alt />
    <!-- 头部内容区域 -->
    <div class="newchoose-main">
      <!-- 头部 -->
      <headercpt title="万达影城(绿地店)" page="/cinemaDetails/1">
        <template v-slot:right>
          <img class="share" src="../../../assets/imgs/cinema/share.png" alt />
        </template>
      </headercpt>
      <div class="back" @click="back"></div>
      <br />
      <br />
      <a href="https://buried-love.github.io/" target="_blank" class="movie-title">
        不凡第一码农老代的葬爱博客
        <img class="happy" src="../../../assets/imgs/cinema/share.png" alt />
      </a>
      <br />
      <br />
      <div class="time-type">
        <span class="movie-time">9:10 - 21:00</span>
        <span class="movie-type">模糊100D</span>
      </div>
      <br />
      <br />
      <ul class="icon-tips">
        <li>
          <img src="../../../assets/imgs/chooseseats/unselected.png" alt />
          可选
        </li>
        <li>
          <img src="../../../assets/imgs/chooseseats/bought.png" alt />
          不可选
        </li>
        <li>
          <img src="../../../assets/imgs/chooseseats/selected.png" alt />
          已选
        </li>
      </ul>
    </div>
    <!-- 影院座位区域 -->
    <div class="newchoose-seat">
      <div class="theme">
        1803号厅
        <div class="center">
          银幕中心
          <div class="center-line"></div>
        </div>
      </div>
      <!-- 边上行数 -->
      <ul class="seats-side">
        <li v-for="(row,index) in seatRow" :key="index">{{row}}</li>
      </ul>
      <!-- 座位 -->
      <div class="seats-main">
        <div v-for="(col,index) in seatCol" :key="index">
          <div v-for="(row,index) in seatRow" :key="index">
            <div
              @click="handleChooseSeat(row-1,col-1)"
              class="seat"
              :class="seatsArr[row-1][col-1] == -1 ? '' : seatsArr[row-1][col-1] == 0 ? 'unselected-seat' : seatsArr[row-1][col-1] == 1 ? 'selected-seat' : 'bought-seat'"
              :data-row="row"
              :data-col="col"
            ></div>
          </div>
        </div>
      </div>
    </div>
    <!-- 底部推荐选座 -->
    <div class="footer" v-if="!hasone">
      <!-- 推荐 -->
      <div class="promote">
        <div class="promote-text">推荐座位</div>
        <div
          class="promote-num"
          v-for="(item,index) in smartChooseMaxNum"
          :key="index"
          @click="smartChoose(index+1)"
        >{{index+1}}人</div>
      </div>
      <div class="submit">请先选座</div>
    </div>
    <!-- 已选座位后显示的x排x座 -->
    <div class="ticketinfo" v-if="hasone">
      <ul class="info">
        <li v-for="(item,index) in chooseArr" :key="index" @click="ticketinfo(item)">{{item}}</li>
      </ul>
      <div class="submit">确认选座</div>
    </div>
    <!-- 随机生成模拟数据 -->
    <div class="random" @click="random">模拟购票</div>
  </div>
</template>

<script>
import mocks from "mockjs";
var mock = mocks.Random;
import headercpt from "../../../components/main/header";
export default {
  name: "",
  data() {
    return {
      // 推荐选座的最大数量
      smartChooseMaxNum: 4,
      // 影院行数
      seatRow: 9,
      // 影院列数
      seatCol: 12,
      // 影院座位的二维数组,
      // -1不可选(没座位)  0可选(白色)  1已选(绿色)  2已购票(红色)
      seatsArr: [
        // 第一行
        [-1, -1, 0, 0, 0, 0, 0, 0, 0, 0, -1, -1],
        // 第二行
        [-1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1],
        // 第三行
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        // 第四行
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        // 第五行
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        // 第六行
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        // 第七行
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        // 第八行
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        // 第九行
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      ],
      //已选的数组
      chooseArr: []
    };
  },
  computed: {
    // 判断是否有已选票
    hasone() {
      for (var i = 0; i < this.seatRow; i++) {
        var hasone = this.seatsArr[i].some(el => {
          return el == 1;
        });
        // console.log(hasone);
        if (hasone) {
          return hasone;
        }
      }
    }
  },
  //头部的组件
  components: {
    headercpt
  },
  methods: {
    // 跳回上一页
    back() {
      this.$router.go(-1);
    },
    //随机已购票和可选座位
    //只随机生成5排往后的位子
    random: function() {
      // 清空已选数组
      this.chooseArr = [];
      let newArray = this.seatsArr;
      for (var i = 5; i < this.seatRow; i++) {
        for (var j = 0; j < this.seatCol; j++) {
          //   var canchoose = mock.boolean();
          if (mock.boolean()) {
            newArray[i][j] = 0;
          } else {
            newArray[i][j] = 2;
          }
        }
      }
      //必须整体更新二维数组，Vue无法检测到数组某一项更新,必须slice复制一个数组才行
      this.seatsArr = newArray.slice();
      //   console.log(this.seatsArr);
    },
    //底部已选票的功能,点击取消已选,因为不能直接获取row和col,所以用一个新的函数
    ticketinfo: function(el) {
      // 根据正则选出数据里的数字
      var arr = el.match(/\d+(\d+)?/g);
      var row = arr[0];
      var col = arr[1];
      //因为是从0开始遍历的,所以传值前要减1
      this.handleChooseSeat(row - 1, col - 1);
    },
    // 更新已选票数的个数
    uptchooseArr: function() {
      let newArray = [];
      for (var i = 0; i < this.seatRow; i++) {
        for (var j = 0; j < this.seatCol; j++) {
          //如果是已选的,添加到数组内
          if (this.seatsArr[i][j] == 1) {
            newArray.push(`${i + 1}排${j + 1}座`);
          }
        }
      }
      this.chooseArr = newArray.slice();
      //   console.log(this.chooseArr);
    },
    //处理座位选择逻辑
    handleChooseSeat: function(row, col) {
      let seatValue = this.seatsArr[row][col];
      let newArray = this.seatsArr;
      if (this.chooseArr.length <= 4) {
        //如果是已购座位，直接返回
        if (seatValue === 2) return;
        //如果是已选座位点击后变未选
        if (seatValue === 1) {
          newArray[row][col] = 0;
        } else if (seatValue === 0) {
          if (this.chooseArr.length < 4) {
            newArray[row][col] = 1;
          } else {
            alert("最多买四张");
            return;
          }
        }
      } else {
        alert("最多买四张");
        return;
      }
      //必须整体更新二维数组，Vue无法检测到数组某一项更新,必须slice复制一个数组才行
      this.seatsArr = newArray.slice();
      //更新已选数组
      this.uptchooseArr();
    },

    // 推荐选座代码
    // 推荐选座代码
    //推荐选座,参数是推荐座位数目
    smartChoose: function(num) {
      //找到影院座位水平垂直中间位置的后一排
      let rowStart = parseInt((this.seatRow - 1) / 2) + 1;
      //先从中间排往后排搜索
      let backResult = this.searchSeatByDirection(
        rowStart,
        this.seatRow - 1,
        num
      );
      if (backResult.length > 0) {
        this.chooseSeat(backResult);
        return;
      }
      //再从中间排往前排搜索
      let forwardResult = this.searchSeatByDirection(rowStart - 1, 0, num);
      if (forwardResult.length > 0) {
        this.chooseSeat(forwardResult);
        return;
      }
      //提示用户无合法位置可选
      alert("无合法位置可选!");
    },
    //向前后某个方向进行搜索的函数,参数是起始行，终止行,推荐座位个数
    searchSeatByDirection: function(fromRow, toRow, num) {
      /*
       * 推荐座位规则
       * (1)初始状态从座位行数的一半处的后一排的中间开始向左右分别搜索，取离中间最近的，如果满足条件，
       *    记录下该结果离座位中轴线的距离，后排搜索完成后取距离最小的那个结果座位最终结果，优先向后排进行搜索，
       *    后排都没有才往前排搜，前排逻辑同上
       *
       * (2)只考虑并排且连续的座位，不能不在一排或者一排中间有分隔
       *
       * */

      /*
       * 保存当前方向搜索结果的数组,元素是对象,result是结果数组，offset代表与中轴线的偏移距离
       * {
       *   result:Array([x,y])
       *   offset:Number
       * }
       *
       */
      let currentDirectionSearchResult = [];

      let largeRow = fromRow > toRow ? fromRow : toRow,
        smallRow = fromRow > toRow ? toRow : fromRow;

      for (let i = smallRow; i <= largeRow; i++) {
        //每一排的搜索,找出该排里中轴线最近的一组座位
        let tempRowResult = [],
          minDistanceToMidLine = Infinity;
        for (let j = 0; j <= this.seatCol - num; j++) {
          //如果有合法位置
          if (this.checkRowSeatContinusAndEmpty(i, j, j + num - 1)) {
            //计算该组位置距离中轴线的距离:该组位置的中间位置到中轴线的距离
            let resultMidPos = parseInt(j + num / 2);
            let distance = Math.abs(parseInt(this.seatCol / 2) - resultMidPos);
            //如果距离较短则更新
            if (distance < minDistanceToMidLine) {
              minDistanceToMidLine = distance;
              //该行的最终结果
              tempRowResult = this.generateRowResult(i, j, j + num - 1);
            }
          }
        }
        //保存该行的最终结果
        currentDirectionSearchResult.push({
          result: tempRowResult,
          offset: minDistanceToMidLine
        });
      }

      //处理后排的搜索结果:找到距离中轴线最短的一个
      //注意这里的逻辑需要区分前后排，对于后排是从前往后，前排则是从后往前找
      let isBackDir = fromRow < toRow;
      let finalReuslt = [],
        minDistanceToMid = Infinity;
      if (isBackDir) {
        //后排情况,从前往后
        currentDirectionSearchResult.forEach(item => {
          if (item.offset < minDistanceToMid) {
            finalReuslt = item.result;
            minDistanceToMid = item.offset;
          }
        });
      } else {
        //前排情况，从后往前找
        currentDirectionSearchResult.reverse().forEach(item => {
          if (item.offset < minDistanceToMid) {
            finalReuslt = item.result;
            minDistanceToMid = item.offset;
          }
        });
      }

      //直接返回结果
      return finalReuslt;
    },
    /*辅助函数，判断每一行座位从i列到j列是否全部空余且连续
     *
     */
    checkRowSeatContinusAndEmpty: function(rowNum, startPos, endPos) {
      let isValid = true;
      for (let i = startPos; i <= endPos; i++) {
        if (this.seatsArr[rowNum][i] !== 0) {
          isValid = false;
          break;
        }
      }
      return isValid;
    },
    //辅助函数：返回每一行的某个合理位置的座位数组
    generateRowResult: function(row, startPos, endPos) {
      let result = [];
      for (let i = startPos; i <= endPos; i++) {
        result.push([row, i]);
      }
      return result;
    },
    //辅助函数:智能推荐的选座操作
    chooseSeat: function(result) {
      let oldArray = this.seatsArr;
      for (let i = 0; i < result.length; i++) {
        //选定座位
        oldArray[result[i][0]][result[i][1]] = 1;
      }
      this.seatsArr = oldArray.slice();
      //更新已选数组
      this.uptchooseArr();
    }
  }
};
</script>

<style lang='scss' scoped>
@import "@/assets/css/common/common";
.newchoose {
  margin-bottom: 100px;
  //顶部的背景图
  .seatbgc {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    z-index: -99;
  }
  // 增加的回调上一页,挡住组件的返回固定页按钮
  .back {
    position: fixed;
    left: 15px;
    top: 10px;
    width: 30px;
    height: 30px;
    background: url("../../../assets/imgs/icons/arr-left.png") no-repeat center;
    background-size: cover;
    z-index: 10000;
  }
  //内容区域
  .newchoose-main {
    padding: 0 $basePadding;
    color: white;
    // 组件里的右侧图片
    .share {
      width: 22px;
      height: 22px;
    }
    .movie-title {
      display: block;
      font-size: 20px;
      color: white;
      text-decoration: none;
      text-align: left;
      .happy {
        height: 22px;
      }
    }
    .time-type {
      width: 100%;
      font-size: 14px;
      text-align: left;
      .movie-time {
        padding: 5px;
        border: 1px solid #553e47;
        background-color: #553e47;
        border-radius: 5px;
      }
      .movie-type {
        padding: 5px;
        border: 1px solid #855253;
        background-color: #b4635f;
        border-radius: 5px;
      }
    }
    .icon-tips {
      width: 100%;
      height: 30px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      li {
        width: auto;
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 16px;
        img {
          width: 30px;
          height: 30px;
        }
      }
    }
  }
  //座位区域
  .newchoose-seat {
    position: relative;
    width: 100%;
    height: 400px;
    margin: 40px auto 0 auto;
    // background-color: green;
    color: white;
    .theme {
      position: relative;
      width: 200px;
      height: 25px;
      font-size: 16px;
      line-height: 25px;
      border: 1px solid #23262d;
      background-color: #33363d;
      border-radius: 5px;
      margin: 0 auto;
      //两个三角挡住变成梯形
      &:after {
        position: absolute;
        left: 0;
        top: 0;
        content: "";
        width: 0;
        height: 0;
        // 左下三角形,底边长由right控制
        border-bottom: 25px solid #23262d;
        border-right: 10px solid transparent;
      }
      &:before {
        position: absolute;
        right: 0;
        top: 0;
        content: "";
        width: 0;
        height: 0;
        // 右下三角形,底边长由left控制
        border-bottom: 25px solid #23262d;
        border-left: 10px solid transparent;
      }
      //荧幕中央和中线
      .center {
        position: absolute;
        left: 50%;
        // 等于center盒子的高度+随机间隔
        bottom: -30px;
        transform: translateX(-50%);
        width: 70px;
        height: 15px;
        font-size: 12px;
        text-align: center;
        line-height: 15px;
        color: #c1c2c2;
        background-color: #f5f5f5;
        border-radius: 5px;
        .center-line {
          position: absolute;
          left: 50%;
          top: 0;
          width: 0;
          height: 400px;
          border-left: 1px dashed white;
        }
      }
    }
    .seats-side {
      position: absolute;
      left: 10px;
      top: 60px;
      width: 20px;
      height: auto;
      border-radius: 20px;
      background-color: #909294;
      li {
        width: 100%;
        height: 20px;
        color: white;
        margin-bottom: 20px;
      }
      li:nth-child(1) {
        margin-top: 20px;
      }
    }
    .seats-main {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      top: 60px;
      width: 300px;
      height: 100%;
      display: flex;
      justify-content: space-around;
      align-items: center;
      margin: 0 auto;
    }
    .seat {
      width: 20px;
      height: 20px;
      margin-bottom: 20px;
      border-radius: 5px;
      &.selected-seat {
        background: url("../../../assets/imgs/chooseseats/selected.png") center
          center no-repeat;
        background-size: 100% 100%;
      }
      &.unselected-seat {
        background: url("../../../assets/imgs/chooseseats/unselected.png")
          center center no-repeat;
        background-size: 100% 100%;
      }
      &.bought-seat {
        background: url("../../../assets/imgs/chooseseats/bought.png") center
          center no-repeat;
        background-size: 100% 100%;
      }
    }
  }
  //底部区域
  .footer {
    position: fixed;
    left: 0;
    bottom: 0;
    height: 100px;
    width: 100%;
    background-color: #33363d;
    text-align: center;
    color: #ffffff;
    font-size: 16px;
    box-sizing: border-box;
    padding: 0 20px;
    .promote {
      display: flex;
      justify-content: space-between;
      align-items: center;
      overflow: hidden;
      padding-top: 10px;
      div {
        margin: 3px;
        line-height: 24px;
      }
      .promote-num {
        width: 52px;
        height: 23px;
        border: 1px solid #979797;
        &.clicked {
          background-color: #6548a9;
        }
      }
    }
    // 请先选座
    .submit {
      width: 100%;
      height: 40px;
      background: linear-gradient(
        150deg,
        rgba(242, 91, 134, 1) 0%,
        rgba(241, 172, 94, 1) 100%
      );
      box-shadow: 0 0 4px 1px rgba(242, 109, 125, 0.18);
      border-radius: 6px;
      opacity: 0.4;
      text-align: center;
      color: white;
      font-size: 18px;
      line-height: 40px;
      margin-top: 15px;
    }
  }
  //底部有选票之后的x排x座
  .ticketinfo {
    position: fixed;
    left: 0;
    bottom: 0;
    height: 130px;
    width: 100%;
    background-color: #33363d;
    text-align: center;
    color: #ffffff;
    font-size: 16px;
    box-sizing: border-box;
    padding: 0 20px;
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    .info {
      width: 100%;
      display: flex;
      align-items: center;
      li {
        width: 20%;
        font-size: 14px;
        color: white;
        text-align: center;
        padding: 10px;
        margin-right: 10px;
        border: 1px solid white;
      }
      li:nth-last-child(1) {
        margin-right: 0;
      }
    }
    // 确认选座
    .submit {
      width: 100%;
      height: 40px;
      background: linear-gradient(
        150deg,
        rgba(242, 91, 134, 1) 0%,
        rgba(241, 172, 94, 1) 100%
      );
      box-shadow: 0 0 4px 1px rgba(242, 109, 125, 0.18);
      border-radius: 6px;
      opacity: 1;
      text-align: center;
      color: white;
      font-size: 18px;
      line-height: 40px;
      margin-top: 15px;
    }
  }
  //随机数据
  .random {
    position: fixed;
    top: 30%;
    right: 20px;
    width: 40px;
    height: 40px;
    line-height: 20px;
    text-align: center;
    font-size: 16px;
    background: linear-gradient(
      150deg,
      rgba(242, 91, 134, 1) 0%,
      rgba(241, 172, 94, 1) 100%
    );
    color: white;
    padding: 10px;
  }
}
</style>