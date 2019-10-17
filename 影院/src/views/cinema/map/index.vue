<template>
  <div class="map-main">
    <div class="header">
      <!-- 返回按钮 -->
      <div class="back" @click="go()">
        <img src="@/assets/imgs/icons/arr-left.png" alt />
      </div>
      <h3>影院地图</h3>
      <!-- 搜索按钮 -->
      <div class="search">
        <img src="@/assets/imgs/cinema/search.png" alt />
      </div>
    </div>

    <div id="allmap"></div>
    <!-- 影院列表 -->
    <div class="cinema-list">
      <swiper :options="cinemaOptions">
        <swiper-slide v-for="item in cinemaData" :key="item.id">
          <div class="cinemaImg">
            <img :src="item.imgSrc" alt />
          </div>
          <div class="cinemaDetails">
            <div class="cinemaName">
              <p>{{ item.name}}</p>
              <div class="contact">
                <span class="share">
                  <img :src="share" alt />
                </span>
                <span class="phone">
                  <img :src="tel" alt />
                </span>
                <span></span>
                <span></span>
                <span>{{item.arriveTime}}</span>
              </div>
            </div>
            <h3>查看</h3>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script>
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  name: "Map",
  components: {
    swiper,
    swiperSlide
  },
  data() {
    return {
      X: 113.774674,
      Y: 34.776897,
      share: require("@/assets/imgs/cinema/share.png"),
      tel: require("@/assets/imgs/cinema/tel.png"),
      cinemaOptions: {
        slidesPerView: 1.5,
        loop: true, //循环
        spaceBetween: 18
      },
      cinemaData: [
        {
          id: 1,
          name: "耀莱成龙影城(建业店)",
          arriveTime: "45min",
          imgSrc: require("@/assets/imgs/cinema/cinema_1.png")
        },
        {
          id: 2,
          name: "耀莱成龙影城(建业店)",
          arriveTime: "45min",
          imgSrc: require("@/assets/imgs/cinema/cinema_2.png")
        }
      ]
    };
  },
  methods: {
    go() {
      this.$router.go(-1);
    }
  },
  mounted() {
    var map = new BMap.Map("allmap");
    map.centerAndZoom(new BMap.Point(this.X, this.Y), 11);
    var local = new BMap.LocalSearch(map, { renderOptions: { map: map } });
    local.searchInBounds("电影院", map.getBounds());
  }
};
</script>

<style lang='scss' scoped>
.map-main {
  width: 100%;
  height: 100%;
  .header {
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 60px;
    width: 335px;
    background-color: #22262d;
    padding: 0 20px 0 20px;
    z-index: 999;
    .back {
      width: 7px;
      height: 13px;
      img {
        width: 100%;
        height: 100%;
      }
    }
    h3 {
      width: 80px;
      font-size: 20px;
      font-weight: 500;
      color: rgba(255, 255, 255, 1);
      line-height: 28px;
    }
    .search {
      width: 17px;
      height: 17px;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
  .map {
    width: 375px;
    height: 100%;
  }
  #allmap {
    width: 375px;
    height: 584px;
    background: rgba(34, 38, 45, 1);
    margin-top: 60px;
    border-radius: 22px;
  }
  .cinema-list {
    position: fixed;
    left: 21px;
    bottom: 0;
    width: 100%;
    height: 194px;
    .swiper-slide {
      width: 203px;
      .cinemaImg {
        height: 131px;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .cinemaDetails {
        height: 63px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        background: rgba(51, 54, 61, 1);
        color: rgba(255, 255, 255, 1);
        .cinemaName {
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          width: 132px;
          height: 100%;
          p {
            width: 100%;
            font-size: 12px;
            font-weight: 400;
            color: rgba(255, 255, 255, 1);
            line-height: 17px;
          }
          .contact {
            width: 100%;
            height: 17px;
            display: flex;
            justify-content: space-around;
            align-items: center;
            padding-bottom: 10px;
          }
        }
        h3 {
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
        }
      }
    }
  }
}
</style>