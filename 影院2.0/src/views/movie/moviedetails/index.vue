<template>
  <div class="detailed">
    <div class="icon">
      <div class="icon-c">
        <div class="icon-left" @click="back"></div>
        <div class="icon-right"></div>
      </div>
    </div>
    <div class="header">
      <div class="headerbox">
        <img :src="list.imgsrc" alt />
      </div>
    </div>

    <div class="listText">
      {{list.movieName}}
      <span
        style="  margin-left: 50px;color:rgba(241,116,121,1); font-size:24px;"
      >120min</span>
      <p>Pride & Prejudice</p>
      <div class="score">
        <div>
          <img src="../../../assets/imgs/mine/starOn.png" alt />
          <img src="../../../assets/imgs/mine/starOn.png" alt />
          <img src="../../../assets/imgs/mine/starOn.png" alt />
          <img src="../../../assets/imgs/mine/starOn.png" alt />
          <img src="../../../assets/imgs/mine/star1.png" alt />
        </div>
        <div class="text">
          <span>9.0</span>/10
        </div>
        <div class="icons">
          <img src="../../../assets/imgs/mine/message.png" alt />
          <img src="../../../assets/imgs/mine/star.png" alt />
        </div>
      </div>
    </div>
    <div class="contantner">
      <div class="title">
        <span class="active">简介</span>
        <span @click="goto">影评</span>
        <span>讨论</span>
        <span>更多</span>
      </div>
      <div class="contantnerbox">
        伊丽莎白·班纳特（凯拉·奈特莉饰）和姐姐珍·班纳特（罗莎曼 德·派克 饰）、妹妹玛丽·班纳特（妲露拉·莱莉饰）、凯蒂·班 纳特（凯瑞·穆丽根饰）以及丽迪亚·班纳特（吉娜·马隆 饰） 这5个出身于小地主家庭的姐妹个个如花似玉…
        <span>查看更多</span>
      </div>
      <div class="people">
        <h2>演职人员</h2>
      </div>
    </div>
    <div class="swwone">
      <swiper :options="swiperOption" ref="mySwiper">
        <!-- slides -->
        <swiper-slide v-for="(item, index) in movielist" :key="index">
          <router-link tag="div" to="/actor">
            <img :src="item.imgsrc" alt />
            <p>{{item.name}}</p>
            <h4>{{item.text}}</h4>
          </router-link>
        </swiper-slide>
      </swiper>
    </div>
    <div class="nums">全部32位演员</div>
    <div class="videos">
      <div class="title">视频</div>
    </div>
    <div class="swwtwe">
      <swiper :options="swiperOptions" ref="mySwiper">
        <!-- slides -->
        <swiper-slide v-for="(item, index) in videolist" :key="index">
          <div>
            <img :src="item.img" alt />
            <h4>{{item.text}}</h4>
          </div>
        </swiper-slide>
      </swiper>
    </div>
    <div class="nums">全部10个视频</div>
    <div class="title-one">票房</div>
    <div class="footer">
      <div class="footerbox">
        <p>2</p>
        <div>今日票房排行</div>
      </div>
      <div class="footerbox">
        <p>暂无</p>
        <div>首周票房（万）</div>
      </div>
      <div class="footerbox">
        <p>2660</p>
        <div>今日票房排行</div>
      </div>
    </div>
    <router-link tag="div" to="/boxOffice" class="nums">票房详情</router-link>
    <div class="tail" @click="gotochooseSeats">特惠选座</div>
  </div>
</template>
<script>
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  data() {
    return {
      movielist: [
        {
          name: "凯拉·奈特莉",
          text: "饰伊丽莎…",
          imgsrc: require("@/assets/imgs/movie/tel1.png")
        },
        {
          name: "西蒙·伍兹",
          text: "饰查尔斯…",
          imgsrc: require("@/assets/imgs/movie/tel2.png")
        },
        {
          name: "裴淳华",
          text: "饰珍·班内特",
          imgsrc: require("@/assets/imgs/movie/tel3.png")
        },
        {
          name: "裴淳华",
          text: "饰珍·班内特",
          imgsrc: require("@/assets/imgs/movie/tel3.png")
        }
      ],
      videolist: [
        {
          text: "《傲慢与偏见》：百年经典的绝美呈现， 一次现实与理想的爱情碰撞",
          img: require("@/assets/imgs/movie/arr1.png")
        },
        {
          text: "借了不朽经典的光，拍了一 部沦为普通的爱情故事",
          img: require("@/assets/imgs/movie/arr2.png")
        }
      ],
      swiperOption: {
        // some swiper options/callbacks
        // 所有的参数同 swiper 官方 api 参数
        slidesPerView: 3.5,
        spaceBetween: 10,
        slidesOffsetAfter: 20,
        slidesOffsetBefore: 40
      },
      swiperOptions: {
        slidesPerView: 1.5,
        slidesOffsetAfter: 20,
        slidesOffsetBefore: 40
      }
    };
  },
  mounted() {
    this.$store.commit("mine/getsonlist", this.$route.query.id);
  },
  computed: {
    list() {
      return this.$store.state.mine.oldlist;
    }
  },
  methods: {
    back() {
      this.$router.go(-1);
    },
    goto() {
      this.$router.push("/assess");
    },
    gotochooseSeats() {
      this.$router.push("/newchoose");
    }
  },
  components: {
    swiper,
    swiperSlide
  }
};
</script>
<style lang="scss" scoped>
.detailed {
  width: 375px;
  color: rgba(255, 255, 255, 1);
  text-align: left;
  .icon {
    width: 100%;
    padding-top: 52px;
    position: fixed;
    left: 0;
    top: 0;
    .icon-c {
      width: 335px;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .icon-left {
        width: 7px;
        height: 13px;
        background: url("../../../assets/imgs/movie/arr-left.png") no-repeat
          center;
        background-size: cover;
      }
      .icon-right {
        width: 19px;
        height: 19px;
        background: url("../../../assets/imgs/movie/share.png") no-repeat center;
        background-size: cover;
      }
    }
  }
  .header {
    background: url(../../../assets/imgs/movie/detail-bg.png) no-repeat 0px 1px;
    // height: 285px;

    background-size: cover;
    overflow: hidden;
    .headerbox {
      margin-top: 140px;
      img {
        width: 100px;
        height: 140px;
        float: left;
        margin-left: 20px;
        border: 1px solid gray;
      }
    }
  }
  .listText {
    margin-top: 20px;
    width: 355px;
    margin-left: 20px;
    overflow: hidden;
    // height: 20px;
    font-size: 20px;
    font-family: PingFangSC-Medium, PingFangSC;
    font-weight: 500;
    color: rgba(255, 255, 255, 1);
    line-height: 20px;
    p {
      font-weight: 400;
      font-size: 14px;
      color: rgba(255, 255, 255, 0.5);
      line-height: 24px;
    }
    .score {
      width: 320px;
      margin-top: 10px;
      margin-left: 0px;
      display: flex;
      .text {
        font-size: 14px;
        span {
          font-size: 18px;
          color: rgba(251, 195, 74, 1);
        }
        margin-right: 60px;
      }
      img {
        width: 22px;
        height: 22px;
        margin-right: 5px;
      }
      .icons {
        img {
          width: 19px;
          height: 19px;
          margin-right: 10px;
        }
      }
    }
  }
  .contantner {
    overflow: hidden;
    width: 330px;
    font-size: 14px;
    color: rgba(255, 255, 255, 0.8);
    margin: 0 auto;
    .title {
      margin-top: 25px;
      span {
        margin-right: 15px;
        position: relative;
        &.active {
          &::before {
            content: " ";
            position: absolute;
            width: 29px;
            height: 3px;
            bottom: -5px;
            background: linear-gradient(
              135deg,
              rgba(241, 100, 129, 1) 0%,
              rgba(241, 144, 108, 1) 100%
            );
          }
        }
      }
    }
    .contantnerbox {
      margin-top: 10px;
      line-height: 18px;
      color: rgba(255, 255, 255, 0.5);
      font-size: 12px;
      span {
        color: rgba(251, 195, 74, 1);
        font-size: 14px;
      }
    }

    .people {
      margin-top: 10px;
      h2 {
        font-size: 18px;
      }
    }
  }
  .nums {
    margin: 24px auto;
    width: 100%;
    text-align: center;
    height: 14px;
    font-size: 14px;
    color: rgba(251, 195, 74, 1);
  }
  .videos {
    .title {
      font-size: 18px;
      margin-bottom: 20px;
      margin-left: 20px;
    }
  }
  .footer {
    width: 330px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    .footerbox {
      text-align: center;
      p {
        font-size: 18px;
        line-height: 32px;
      }
      div {
        color: rgba(255, 255, 255, 0.4);
      }
    }
  }
  .tail {
    height: 44px;
    text-align: center;
    line-height: 44px;
    font-size: 18px;
    background: linear-gradient(
      150deg,
      rgba(242, 91, 134, 1) 0%,
      rgba(241, 172, 94, 1) 100%
    );
  }
  //   第一个swiper
  .swwone {
    margin-top: 15px;
    h4 {
      font-size: 12px;
      color: rgba(255, 255, 255, 0.5);
    }
    p {
      font-size: 14px;
      line-height: 28px;
    }
    .swiper-wrapper {
      width: 100%;
      .swiper-slide {
        //   width: 100px;
        img {
          width: 100px;
          height: 140px;
        }
      }
    }
  }
  //第二个swiper
  .swwtwe {
    .swiper-wrapper {
      .swiper-slide {
        width: 216px;
        img {
          width: 200px;
          height: 120px;
        }
        h4 {
          margin-top: 5px;
          width: 216px;
          line-height: 15px;
        }
      }
    }
  }
  .title-one {
    font-size: 0.48rem;
    margin-bottom: 0.533333rem;
    margin-left: 0.533333rem;
  }
}
</style>