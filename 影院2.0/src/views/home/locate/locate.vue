<template>
  <div class="locate">
    <!-- 百度地图盒子 -->
    <div id="allmap"></div>
    <div class="header">
      <div class="header-c wrap-c">
        <i @click="go"></i>
        <p>选择城市</p>
      </div>
    </div>
    <div class="wrapper">
      <!-- <div class="main"> -->
      <div class="content">
        <div class="content-c wrap-c">
          <div class="search">
            <input type="text" v-model="searchs" placeholder="输入城市" />
            <i></i>
            <span>取消</span>
          </div>
          <!-- ////////////////////////       空盒子 -->
          <div class="cityDemo">
            <ul>
              <li
                class="cityDemo-item"
                v-for="item in searchData"
                :key="item.id"
                @click="cityDemoCl(item.name)"
              >
                {{ item.name }}
              </li>
            </ul>
          </div>
          <div class="poCity">
            <p>定位城市</p>
            <div class="poCity-box">
              <span>{{ poCity }}</span>
              <i @click="initPosition"></i>
            </div>
          </div>
          <div class="hisCity">
            <p>历史访问城市</p>
            <div class="hisCity-box">
              <li>北京</li>
              <li>上海</li>
              <li>苏州</li>
            </div>
          </div>
          <div class="hotCity">
            <p>热门城市</p>
            <div class="hotCity-box">
              <div
                v-for="item in hotDate"
                :key="item.ids"
                @click="hotC(item.nameT)"
              >
                {{ item.nameT }}
              </div>
            </div>
          </div>
          <div class="city">
            <ul
              class="city-list"
              v-for="(val, key) in locateDate"
              :key="val.id"
            >
              <p class="city-p">{{ key }}</p>
              <li
                class="city-item"
                v-for="(items, index) in val"
                :key="items.id"
                @click="liClick(items.name, index)"
              >
                {{ items.name }}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <!-- 城市选择 -->
      <!-- </div> -->
    </div>
    <div class="sideBar">
      <p @click="sideCl">定位历史热门</p>
      <ul
        class="ul"
        @touchmove.prevent="sideMove($event)"
        @touchend.prevent="sideEnd($event)"
      >
        <li
          class="sideLis"
          v-for="(item, key) in locateDate"
          @touchstart.prevent="sideGo(key, $event)"
          :key="item.id"
        >
          {{ key }}
        </li>
      </ul>
    </div>
    <div class="demo" v-if="letterShow">
      <p>{{ letter }}</p>
    </div>
    <div v-for="(item, index) in arr" :key="index">
      <a style="font-size:100px" href="">{{ item }}</a>
    </div>
  </div>
</template>

<script>
import cityDate from "./data.json";
// 回弹BScroll
import BScroll from "@better-scroll/core";
import { mapState, mapMutations, mapActions, mapGetters } from "vuex";
import { setTimeout } from "timers";

export default {
  data() {
    return {
      searchs: "",
      searchDataList: "",
      poCity: "郑州",
      letter: "A",
      letterShow: false,
      cityDate,
      cityListLetter: Object.keys(cityDate).filter(el => el !== "hot")
    };
  },
  methods: {
    // 搜素函数
    cityDemoCl(val) {
      console.log(val);
      this.searchs = val;
      this.poCity = val;
    },
    // 返回函数
    go() {
      this.$router.go(-1);
    },
    hotC(val) {
      this.scroll.scrollTo(0, 0, 400);
      this.poCity = val;
    },
    liClick(val, index) {
      console.log(val, index);

      this.scroll.scrollTo(0, 0, 400);
      this.poCity = val;
    },
    sideCl() {
      this.scroll.scrollTo(0, 0, 400);
    },
    // 事件函数
    pubulic() {
      var sideBar = document.querySelector(".sideBar");
      var ul = document.querySelector(".ul");
      var targetY = event.changedTouches[0].pageY;
      var liH = document.querySelectorAll(".sideLis")[0].offsetHeight;
      console.log(count);
      var count = Math.floor(
        (targetY - sideBar.offsetTop - ul.offsetTop) / liH
      );
      console.log("count=>", count);
      return count;
    },
    // 共同运动函数
    Move(eles) {
      console.log(eles);
      var pElis = document.querySelectorAll(".city-p");
      var header = document.querySelector(".header");
      let a = Array.from(pElis).find(ele => ele.innerText == eles);
      // console.log("a =>", a);
      this.scroll.scrollToElement(a, 400, 0, -header.offsetHeight);
    },
    // 点击事件
    sideGo(index, event) {
      this.letterShow = true;
    },
    // 滑动事件
    sideMove(event) {
      this.letter = this.cityListLetter[this.pubulic(event)];
      // 判断
      var sideBar = document.querySelector(".sideBar");
      var ul = document.querySelector(".ul");
      var liH = document.querySelectorAll(".sideLis")[0].offsetHeight;
      var targetY = event.changedTouches[0].pageY;

      if (
        targetY >= sideBar.offsetTop + ul.offsetTop &&
        targetY <= sideBar.offsetTop + sideBar.offsetHeight
      ) {
        this.Move(this.letter);
      }
    },
    // 结束事件
    sideEnd(event) {
      this.letterShow = false;
      this.letter = this.cityListLetter[this.pubulic(event)];
      // 判断
      var sideBar = document.querySelector(".sideBar");
      var ul = document.querySelector(".ul");
      var targetY = event.changedTouches[0].pageY;
      var liH = document.querySelectorAll(".sideLis")[0].offsetHeight;
      if (
        targetY >= sideBar.offsetTop + ul.offsetTop &&
        targetY <= sideBar.offsetTop + sideBar.offsetHeight
      ) {
        this.Move(this.letter);
      }
    },
    // 定位
    initPosition() {
      var that = this;
      var map = new BMap.Map("allmap");
      var point = new BMap.Point(116.331398, 39.897445);
      map.centerAndZoom(point, 12);

      function myFun(result) {
        var cityName = result.name;
        map.setCenter(cityName);
        setTimeout(() => {
          that.poCity = cityName.substr(0, 2);
        }, 200);
        console.log(cityName);
      }
      var myCity = new BMap.LocalCity();
      myCity.get(myFun);
    }
  },
  mounted() {
    this.initPosition();
    // this.locateDate;
    // BScroll
    let wrapper = document.querySelector(".wrapper");

    this.scroll = new BScroll(wrapper, {
      click: true
    });
  },
  computed: {
    searchData() {
      console.log(cityDate);
      if (this.searchs == "") {
        return [];
      } else {
        var arr = [];
        // 第一种方法
        for (let key in cityDate) {
          var item = cityDate[key].filter(ele => {
            return ele.name.includes(this.searchs);
          });
          arr = [...arr, ...item];
          //  第二种方法
          // cityDate[key].forEach(el => {
          //   if (el.name.includes(this.searchs)) {
          //     arr.push(el.name);
          //   }
          // });
        }
        return arr;
      }
    },
    ...mapState({
      locateDate(state) {
        console.log(state.locate);
        let arr = state.locate.locateDate;
        delete arr.hot;
        console.log(arr);
        return arr;
      },
      hotDate(state) {
        console.log(state.locate.hotDate);
        return state.locate.hotDate;
      }
    }),
    arr() {
      var arr = [];
      for (var i in this.list) {
        for (var j = 0; j < this.list[i].length; j++) {
          if (i != "hot") {
            if (
              this.list[i][j].name.indexOf(this.text) >= 0 &&
              this.text != ""
            ) {
              arr.push(this.list[i][j].name);
            }
          }
        }
      }
      console.log(arr);
      return arr;
    }
  }
};
</script>

<style lang="scss" scoped>
// 版心
.wrapper {
  height: 100%;
  overflow: hidden;
}

.wrap-c {
  width: 335px;
  height: 100%;
  margin: 0 auto;
}

//////////////////////         header
.header {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 666;
  color: #f5f5f5;
  width: 100%;
  height: 44px;
  // background-color: pink;
  background-color: #23262d;
  font-size: 18px;

  .header-c {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;

    i {
      position: absolute;
      left: 0;
      display: block;
      width: 22px;
      height: 22px;
      background: url("../../../assets/imgs/icons/arr-left.png") no-repeat
        center;
      background-size: cover;
    }
  }
}

.locate {
  height: 100%;
  position: relative;
}

.main {
  height: 100%;
  position: absolute;
}

/////////////////////     content
// 搜索的盒子
.cityDemo {
  ul {
    width: 90%;
    // border-bottom: 1px solid gray;
    .cityDemo-item {
      height: 50px;
      line-height: 50px;
    }
    .cityDemo-item:last-child {
      border-bottom: 1px solid gray;
    }
  }
}

.content {
  padding-top: 44px;
  text-align: start;
  color: #f7f7f7;
  font-size: 12px;

  .content-c {
    overflow: hidden;

    .search {
      position: relative;
      display: flex;
      align-items: center;
      height: 36px;
      margin-bottom: 32px;

      i {
        position: absolute;
        display: block;
        margin-left: 12px;
        width: 17px;
        height: 17px;
        background: url("../../../assets/imgs/home/search.png") no-repeat center;
        background-size: cover;
      }

      input {
        font-size: 14px;
        width: 262px;
        padding-left: 36px;
        outline: none;
        background-color: #33363d;
        border: none;
        border-radius: 18px;
        height: 36px;
        color: #fff;
        margin-right: 5px;
      }

      span {
        font-size: 16px;
        color: #f7f7f7;
      }
    }

    .poCity {
      overflow: hidden;
      font-size: 12px;

      .poCity-box {
        font-size: 12px;
        line-height: 30px;
        text-align: center;
        margin: 14px 0 20px;
        display: flex;
        align-items: center;

        span {
          display: block;
          overflow: hidden;
          width: 90px;
          height: 30px;
          border: 2px solid #f9c34a;
        }

        i {
          margin-left: 50px;
          width: 20px;
          height: 20px;
          display: block;
          background: url("../../../assets/imgs/icons/current-position.png")
            no-repeat center;
          background-size: cover;
        }
      }
    }

    .hisCity {
      overflow: hidden;

      .hisCity-box {
        font-size: 14px;
        line-height: 30px;
        text-align: center;
        margin: 14px 0 20px;
        display: flex;
        // align-items: center;
        // justify-content: space-around;
        flex-wrap: wrap;

        li {
          display: block;
          margin: 5px 10px 5px 0;
          width: 90px;
          height: 30px;
          background-color: rgb(51, 54, 61);
          font-size: 12px;
          // border: 2px solid #F9C34A;
        }
      }
    }

    .hotCity {
      overflow: hidden;

      .hotCity-box {
        font-size: 14px;
        line-height: 30px;
        text-align: center;
        margin: 14px 0 20px;
        display: flex;
        // align-items: center;
        // justify-content: space-around;
        flex-wrap: wrap;

        div {
          display: block;
          margin: 5px 10px 5px 0;
          width: 90px;
          height: 30px;
          background-color: rgb(51, 54, 61);
          font-size: 12px;
          // border: 2px solid #F9C34A;
        }
      }
    }

    .city {
      // position: absolute;
      color: #f5f5f5;

      .city-list {
        p {
          // position: absolute;
          font-size: 14px;
          color: red;
        }

        .city-item {
          height: 50px;
          width: 100%;
          line-height: 50px;
        }
      }
    }
  }
}

.demo {
  position: fixed;
  top: 50%;
  left: 50%;
  font-size: 20px;
  margin-top: -50px;
  margin-left: -50px;
  width: 100px;
  height: 100px;
  line-height: 100px;
  text-align: center;
  background-color: #828282;
  color: #fff;

  p {
    width: 100%;
    height: 100%;
  }
}

.sideBar {
  position: fixed;
  right: 20px;
  top: 160px;
  z-index: 999;

  p {
    width: 24px;
    height: 54px;
    font-size: 12px;
    color: #f1a363;
    line-height: 18px;
  }

  ul {
    // margin-top: 10px;

    li {
      height: 17px;
      color: #828282;
      font-size: 11px;
      line-height: 17px;
    }
  }
}
// @import "@/assets/css/home/locate/locate.scss";
</style>