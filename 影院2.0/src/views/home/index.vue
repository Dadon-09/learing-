<template>
  <div class="home">
    <div class="header">
      <div class="header-c wrap-c">
        <div class="city">
          <router-link tag="p" class="router-link" to="/locate">郑州</router-link>
          <span></span>
        </div>
        <div class="search">
          <i></i>
          <input @click="goSearch" type="text" placeholder="搜影片,影院,影人" />
          <router-link to="/sign">
            <span></span>
          </router-link>
        </div>
      </div>
    </div>
    <div class="wrapper">
      <div class="content">
        <div class="banner">
          <swiper :options="swiperBanner" ref="mySwiper">
            <!-- slides -->
            <swiper-slide v-for="item in bannerImg" :key="item.id">
              <img :src="item.img" alt />
            </swiper-slide>
            <!-- Optional controls -->
          </swiper>
          <div class="swiper-pagination" slot="pagination"></div>
        </div>
        <div class="hotFilm">
          <titleT paths="/movie" title="热映影片" text="全部"></titleT>
          <swiper :options="swiperhotFilm" ref="mySwiper">
            <!-- slides -->
            <swiper-slide v-for="item in hotFilmImg" :key="item.id">
              <!-- 跳转到演员详情 -->
              <img @click="goActor" :src="item.img" alt />
              <p>{{ item.text }}</p>
              <!-- 跳转到影院 -->
              <span @click="goCinema">购票</span>
            </swiper-slide>
            <!-- Optional controls -->
          </swiper>
        </div>
        <div class="coming">
          <titleT paths="/movie/now" title="即将上映" text="全部"></titleT>
          <swiper :options="swiperComing" ref="mySwiper">
            <!-- slides -->
            <swiper-slide v-for="item in comingImg" :key="item.id">
              <img @click="goActor" :src="item.img" alt />
              <p>{{ item.text }}</p>
              <span>{{ item.date }}</span>
            </swiper-slide>
            <!-- Optional controls -->
          </swiper>
        </div>
        <div class="notice">
          <titleT paths="/movie" title="精选预告" text="全部"></titleT>
          <swiper :options="swiperNotice" ref="mySwiper">
            <!-- slides -->
            <swiper-slide v-for="item in noticeImg" :key="item.id">
              <img :src="item.img" alt />
              <p>{{ item.noticeText }}</p>
            </swiper-slide>
            <!-- Optional controls -->
          </swiper>
        </div>
      </div>
    </div>
    <div class="footer"></div>
  </div>
</template>

<script>
// 引入title组件
import titleT from "../../components/title/index.vue";
// 引入mock
import Mock from "mockjs";
import BScroll from "@better-scroll/core";
const Random = Mock.Random;
// 引入swiper
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";
// 模块化 辅助函数
import { mapState, mapMutations, mapActions, mapGetters } from "vuex";
export default {
  methods: {
    // 搜索
    goSearch() {
      this.$router.push("/search");
    },
    // 影院
    goCinema() {
      this.$router.push("/cinema");
    },
    goActor() {
      this.$router.push({
        path: "/moviedetails",
        query: {
          id: 2222
        }
      });
    }
    // goComing() {
    //   this.$router.push("/movie");
    // }
  },
  mounted() {
    let wrapper = document.querySelector(".wrapper");
    let scroll = new BScroll(wrapper, {
      click: true
    });
    // this.$nextTick(function() {
    //   let wrapper = document.querySelector(".wrapper");
    //   let scroll = new BScroll(wrapper);
    // });
  },
  computed: {
    ...mapState({
      /////////////// /////    bannerImg
      bannerImg: function(state) {
        return state.home.bannerImg;
      },
      ////////////////////     hotFilmImg
      hotFilmImg(state) {
        return state.home.hotFilmImg;
      },
      ////////////////////     comingImg
      comingImg(state) {
        return state.home.comingImg;
      },
      /////////////////////     noticeImg
      noticeImg(state) {
        return state.home.noticeImg;
      }
    })
  },
  created() {
    // this.list;
    console.log(this.$store);
  },
  data() {
    return {
      //////////////////////////// banner轮播配置
      swiperBanner: {
        slidesPerView: "1.2",
        centeredSlides: true,
        spaceBetween: 15,
        loop: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        }
      },
      ///////////////////////// swiperhotFilm轮播配置
      swiperhotFilm: {
        slidesPerView: "3.5",
        spaceBetween: 15,
        slidesOffsetBefore: 20,
        slidesOffsetAfter: 20
      },
      /////////////////// swiperComing轮播配置
      swiperComing: {
        slidesPerView: "2.85",
        spaceBetween: 15,
        slidesOffsetBefore: 20,
        slidesOffsetAfter: 20
      },
      ////////////////////////swiperNotice轮播配置
      swiperNotice: {
        slidesPerView: "1.26",
        spaceBetween: 15,
        slidesOffsetBefore: 20,
        slidesOffsetAfter: 20
      }
    };
  },
  components: {
    swiper,
    swiperSlide,
    titleT
  }
};
</script>

<style lang="scss" scoped>
.wrapper {
  margin-top: 50px;
  height: 100%;
  width: 100%;

  .content {
    padding-bottom: 150px;
  }
}
.home {
  height: 100%;
  .wrap-c {
    width: 335px;
    height: 100%;
    margin: 0 auto;
  }

  /////////////////////////////////////////// 头部
  .header {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
    width: 100%;
    height: 44px;
    margin-bottom: 12px;
    background-color: #23262d;

    .header-c {
      display: flex;
      justify-content: space-between;
      align-items: center;

      .city {
        display: flex;
        align-items: center;

        .router-link {
          display: block;
          color: #dfdfdf;
          font-size: 14px;
          margin-right: 5px;
          text-decoration: none;

          &.router-link-active {
            color: #dfdfdf;
          }
        }

        span {
          display: block;
          width: 12px;
          height: 6px;
          background: url("../../assets/imgs/home/arr-down.png") no-repeat
            center;
          background-size: cover;
          // margin-top: 5px;
        }
      }

      .search {
        position: relative;
        display: flex;
        align-items: center;

        i {
          position: absolute;
          display: block;
          margin-left: 12px;
          width: 17px;
          height: 17px;
          background: url("../../assets/imgs/home/search.png") no-repeat center;
          background-size: cover;
        }

        input {
          font-size: 14px;
          width: 223px;
          padding-left: 36px;
          outline: none;
          background-color: #33363d;
          border: none;
          border-radius: 18px;
          height: 39px;
          color: #fff;
          margin-right: 5px;
        }

        span {
          display: block;
          width: 18px;
          height: 19px;
          background: url("../../assets/imgs/home/date.png") no-repeat center;
          background-size: cover;
        }
      }
    }
  }

  /////////////////////////////////////banner
  .banner {
    width: 100%;
    height: 156px;

    .swiper-container {
      height: 145px;

      .swiper-slide {
        align-items: center;
        // width: 335px;
        transform: scaleY(0.85);

        // height: 145px;
        img {
          border-radius: 10px;
          width: 100%;
          height: 100%;
        }

        &.swiper-slide-active {
          transition: all ease 0.4s;
          transform: scaleY(1);
        }
      }
    }

    .swiper-pagination {
      margin-top: 8px;
      height: 3px;
      width: 100%;

      ::v-deep .swiper-pagination-bullet {
        width: 4px;
        height: 4px;
        background-color: #b2b2b2;
        margin: 0 4px;
        border-radius: 2px;
        transition: all ease 0.4s;

        &.swiper-pagination-bullet-active {
          width: 14px;
          height: 3px;
        }
      }
    }
  }

  // 公共
  .swiper-container {
    // width: 100%;
    // height: 100%;

    .swiper-slide {
      display: -webkit-box;
      display: -ms-flexbox;
      display: -webkit-flex;
      display: flex;
      -webkit-box-pack: center;
      -ms-flex-pack: center;
      -webkit-justify-content: center;
      justify-content: center;
    }
  }

  // 公共部分
  .hotFilm,
  .coming,
  .notice {
    overflow: hidden;

    .swiper-slide {
      display: flex;
      flex-direction: column;
      font-size: 12px;
      -ms-flex-align: start;
      -webkit-align-items: start;
      align-items: start;
      color: #dfdfdf;

      img {
        border-radius: 6px;
      }

      p {
        font-size: 12px;
        margin: 10px 0 6px;
      }
    }
  }

  ///////////////////////////////////////////////////hotFilm
  .hotFilm {
    width: 100%;
    // height: 90px;

    .swiper-container {
      height: 172px;

      .swiper-slide {
        img {
          width: 100%;
          height: 122px;
        }

        span {
          display: block;
          width: 50px;
          height: 22px;
          line-height: 22px;
          background: linear-gradient(
            150deg,
            rgba(242, 91, 134, 1) 0%,
            rgba(241, 172, 94, 1) 100%
          );
          box-shadow: 0px 4px 16px 0px rgba(0, 0, 0, 0.5);
          border-radius: 11px;
        }
      }
    }
  }

  ///////////////////////////////////coming
  .coming {
    width: 100%;

    .swiper-container {
      height: 206px;

      .swiper-slide {
        img {
          width: 100%;
          height: 162px;
        }

        span {
          color: #6e6e6e;
        }
      }
    }
  }

  ///////////////////////////////////notice
  .notice {
    width: 100%;

    .swiper-container {
      height: 206px;

      .swiper-slide {
        img {
          width: 100%;
          height: 160px;
        }

        p {
          text-align: start;
          line-height: 16px;
          width: 295px;
        }
      }
    }
  }
}

//////////////////////////////footer
.footer {
  height: 104px;
}

@import "@/assets/css/common/common.scss";
</style>