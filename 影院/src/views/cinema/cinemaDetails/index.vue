<template>
  <div class="cinemaDetails-main">
    <!-- 头部 -->
    <div class="header">
      <div @click="go()" class="back">
        <img src="@/assets/imgs/icons/arr-left.png" alt />
      </div>
      <h3>{{obj.cinema}}</h3>
      <div class="collect">
        <img src="@/assets/imgs/cinema/xing.png" alt />
      </div>
    </div>
    <div class="wrapper">
      <div class="content">
        <!-- 地址 定位   -->
        <router-link to="/cinema/map" tag="div" class="address">
          <div class="position">
            <img src="@/assets/imgs/cinema/position.png" alt />
          </div>
          <div class="address-details">
            <h3>{{obj.cinema}}</h3>
            <p>{{obj.address}}</p>
          </div>
          <div class="arr-right">
            <img src="@/assets/imgs/icons/arr-right.png" alt />
          </div>
        </router-link>
        <!-- 选择电影轮播 -->
        <div class="select-movie">
          <swiper :options="selectOptions">
            <swiper-slide v-for="item in movieData" :key="item.id">
              <div class="movie-poster" @click="choose(item.id)">
                <img :src="item.imgSrc" alt />
              </div>
            </swiper-slide>
          </swiper>
          <div class="movieInfo">
            <div class="title">{{obj2.moviename}}</div>
            <div class="info">{{obj2.time}}|{{obj2.type}}|{{obj2.actor}}</div>
          </div>
        </div>
        <!-- 电影场次信息 -->
        <div class="show-movie">
          <div class="show-list" v-for="item in showData" :key="item.id">
            <div class="time">
              <div class="start">{{item.start}}</div>
              <div class="end">{{item.end}}</div>
            </div>
            <div class="info">
              <div class="type">{{item.info}}</div>
              <div class="room">{{item.room}}</div>
            </div>
            <div class="price">{{item.price}}元</div>
            <div class="sales" @click="to()">购票</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from "@better-scroll/core";
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";
import { mapState, mapMutations, mapActions, mapGetters } from "vuex";
let vm = null; //定义一个变量通过它把vue的this传入swiper
export default {
  name: "",

  components: {
    swiper,
    swiperSlide
  },
  data() {
    return {
      id: "",
      obj2: {},
      //swiper控制
      selectOptions: {
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: "auto",
        coverflowEffect: {
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true
        }, //滑动结束后显示电影海报下的电影信息
        on: {
          slideChangeTransitionEnd() {
            vm.index = this.activeIndex;
            let count = vm.index;
            let counts = vm.movieData[count].id;
            vm.choose(counts);
          }
        }
      },
      //影片海报
      movieData: [
        {
          id: 111,
          moviename: "后来的我们",
          time: "119分钟",
          type: "剧情",
          actor: "周冬雨",
          imgSrc: require("@/assets/imgs/cinema/movie_1.png")
        },
        {
          id: 112,
          moviename: "猜猜我是谁",
          time: "135分钟",
          type: "喜剧",
          actor: "金正雅",
          imgSrc: require("@/assets/imgs/cinema/movie_2.png")
        },
        {
          id: 113,
          moviename: "后来的我们",
          time: "119分钟",
          type: "剧情",
          actor: "周冬雨",
          imgSrc: require("@/assets/imgs/cinema/movie_3.png")
        },
        {
          id: 114,
          moviename: "后来的我们",
          time: "119分钟",
          type: "剧情",
          actor: "周冬雨",
          imgSrc: require("@/assets/imgs/cinema/movie_4.png")
        },
        {
          id: 115,
          moviename: "后来的我们",
          time: "119分钟",
          type: "剧情",
          actor: "周冬雨",
          imgSrc: require("@/assets/imgs/cinema/movie_5.png")
        }
      ],
      //电影拍片数据
      showData: [
        {
          id: 1,
          start: "15:30",
          end: "17:34散场",
          info: "原版3D",
          room: "2号厅",
          price: 30.9
        },
        {
          id: 2,
          start: "15:30",
          end: "17:34散场",
          info: "原版3D",
          room: "2号厅",
          price: 30.9
        },
        {
          id: 3,
          start: "15:30",
          end: "17:34散场",
          info: "原版3D",
          room: "2号厅",
          price: 30.9
        },
        {
          id: 4,
          start: "15:30",
          end: "17:34散场",
          info: "原版3D",
          room: "2号厅",
          price: 30.9
        },
        {
          id: 5,
          start: "15:30",
          end: "17:34散场",
          info: "原版3D",
          room: "2号厅",
          price: 30.9
        }
      ]
    };
  },
  methods: {
    //地图跳转
    go() {
      this.$router.push("/cinema");
    },
    //跳转购买页
    to() {
      this.$router.push("/");
    },
    //选择影片
    choose(val) {
      console.log(val);
      var item = this.movieData.find(ele => ele.id === val);
      this.obj2 = item;
    }
  },
  computed: {
    ...mapState({
      //影院信息
      obj: function(state) {
        return state.cinema.cinemaData.find(ele => ele.id == this.id);
      }
    })
  },
  created() {
    this.id = this.$route.params.id;
    vm = this; //把this赋给vm 传入swiper
    //进入页面显示影片
    var num = this.movieData[0].id;
    this.choose(num);
  },
  mounted() {
    let wrapper = document.querySelector(".wrapper");
    let scroll = new BScroll(".wrapper", {
      click: true //配置可点击
    });
  }
};
</script>

<style lang='scss' scoped>
// @import "@/assets/css/cinema/cinemaDetails/index.scss";
.cinemaDetails-main {
  width: 100%;
  height: 100%;
  background: url(../../../assets/imgs/cinema/movie_bg.png) no-repeat top center;
  background-size: contain;
  background-color: #000;
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 335px;
    height: 22px;
    padding: 25px 20px 0 20px;
    margin-bottom: 25px;
    color: #fff;
    .back {
      width: 7px;
      height: 13px;
      img {
        width: 100%;
        height: 100%;
      }
    }
    h3 {
      width: 176px;
      height: 22px;
      font-size: 16px;
      font-family: PingFangSC-Medium, PingFangSC;
      font-weight: 500;
      color: rgba(255, 255, 255, 1);
      line-height: 22px;
    }
    .collect {
      width: 18px;
      height: 18px;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
  .wrapper {
    width: 100%;
    height: 100%;
    overflow: hidden;
    .content {
      width: 335px;
      margin: 20px 20px;
      .address {
        width: 100%;
        height: 40px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .position {
          width: 18px;
          height: 21px;
          img {
            width: 100%;
            height: 100%;
          }
        }
        .arr-right {
          width: 10px;
          height: 18px;
          img {
            width: 100%;
            height: 100%;
          }
        }
        // 地址详情
        .address-details {
          width: 176px;
          margin-left: -100px;

          h3 {
            height: 22px;
            font-size: 16px;
            font-weight: 500;
            color: rgba(255, 255, 255, 1);
            line-height: 22px;
            text-align: left;
          }
          p {
            width: 230px;
            height: 17px;
            font-size: 12px;
            font-weight: 400;
            color: rgba(255, 255, 255, 1);
            line-height: 17px;
            text-align: left;
          }
        }
      }
      //选择电影 轮播
      .select-movie {
        height: 188px;
        width: 335px;
        margin: 0 auto;
        margin-top: 50px;
        .swiper-slide {
          width: 140px;
          .movie-poster {
            width: 140px;
            height: 188px;
            img {
              width: 100%;
              height: 100%;
            }
          }
        }
        //轮播底部电影信息
        .movieInfo {
          width: 142px;
          height: 50px;
          margin: 10px auto;
          .title {
            height: 25px;
            font-size: 18px;
            font-weight: 500;
            color: rgba(255, 255, 255, 1);
            line-height: 25px;
            text-align: center;
          }
          .info {
            height: 20px;
            font-size: 14px;
            font-weight: 400;
            color: rgba(255, 255, 255, 1);
            line-height: 20px;
            text-align: center;
          }
        }
      }
      //放映电影信息
      .show-movie {
        width: 335px;
        margin: 100px auto;
        color: gray;
        .show-list {
          display: flex;
          justify-content: space-around;
          align-items: center;
          width: 100%;
          height: 91px;
          background-color: #33363d;
          margin-bottom: 10px;
          .time {
            height: 45px;
            width: 51px;
            .start {
              height: 25px;
              font-size: 18px;
              font-weight: 500;
              color: #fff;
              line-height: 25px;
            }
          }
          .info {
            height: 45px;
            width: 50px;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            align-items: center;
            .type {
              color: gainsboro;
            }
          }
          // 电影票价
          .price {
            width: 60px;
            height: 25px;
            font-size: 18px;
            font-weight: bold;
            color: rgba(251, 195, 74, 1);
            line-height: 25px;
          }
          //购票
          .sales {
            width: 45px;
            height: 25px;
            background: linear-gradient(
              150deg,
              rgba(242, 91, 134, 1) 0%,
              rgba(241, 172, 94, 1) 100%
            );
            box-shadow: 0px 0px 4px 1px rgba(242, 109, 125, 0.18);
            border-radius: 6px;
            line-height: 25px;
            text-align: center;
            color: #fff;
          }
        }
      }
    }
  }
}
</style>