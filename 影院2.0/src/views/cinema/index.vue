<template>
  <div class="cinema-main">
    <!-- 头部 -->
    <div class="header">
      <div class="header-c">
        <div class="city">
          <router-link tag="p" to="/locate">郑州</router-link>
          <span></span>
        </div>
        <div class="cinema">影院</div>
        <div class="header-search"></div>
      </div>
    </div>
    <!-- 用户定位地址 -->
    <router-link tag="div" to="/cinema/map" class="position">
      <img src="@/assets/imgs/cinema/position.png" alt />
      <div>{{ address }}</div>
    </router-link>
    <!-- 电影院列表 -->
    <div class="wrapper">
      <div class="cinema-list content">
        <router-link
          :to="`/cinemaDetails/${item.id}`"
          tag="div"
          class="cinema-details"
          v-for="item in cinemaData"
          :key="item.id"
        >
          <div class="title">
            <h3>{{ item.cinema }}</h3>
            <div class="price">
              <span>{{ item.lowprice }}</span>
              <p>起</p>
            </div>
          </div>
          <!-- 影院地址 -->
          <div class="address">
            <div class="address-details">{{ item.address }}</div>
            <span>{{ item.distance }}</span>
          </div>
          <!-- 影片特惠 -->
          <div class="preferential">
            <span class="behind item-1">惠</span>
            <p class="after">{{ item.preferential }}</p>
          </div>
          <!-- 促销 -->
          <div class="promotion">
            <span class="behind item-2">促</span>
            <p class="after">{{ item.promotesales }}</p>
          </div>
          <!-- vip优惠 -->
          <div class="vip">
            <span class="behind item-3">卡</span>
            <p class="after">{{ item.vipcard }}</p>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from "@better-scroll/core";
import { mapState, mapMutations, mapActions, mapGetters } from "vuex";
export default {
  name: "Cinema",
  data() {
    return {
      address: ""
    };
  },
  mounted() {
    let wrapper = document.querySelector(".wrapper");
    let scroll = new BScroll(".wrapper", {
      click: true //配置可点击
    });

    //ip地址定位
    var that = this;
    // var point = new BMap.Point(116.331398, 39.897445);
    function myFun(result) {
      console.log(result);
      that.init(result.center.lng, result.center.lat);
    }
    var myCity = new BMap.LocalCity();
    myCity.get(myFun);
  },
  created() {},
  methods: {
    //百度地图你地址解析
    init(lng, lat) {
      var that = this;
      var point = new BMap.Point(116.331398, 39.897445);
      // 创建地理编码实例
      var myGeo = new BMap.Geocoder();
      // 根据坐标得到地址描述
      myGeo.getLocation(new BMap.Point(lng, lat), function(result) {
        if (result) {
          that.address = "我在:" + result.address;
        }
      });
    }
  },
  computed: {
    ...mapState({
      cinemaData: function(state) {
        return state.cinema.cinemaData;
      }
    })
  }
};
</script>

<style lang='scss' scoped>
// @import "@/assets/css/cinema/cinema.scss";
.cinema-main {
  width: 100%;
  height: 100%;
  //   头部
  .header {
    width: 100%;
    height: 44px;
    color: #dfdfdf;
    .header-c {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 335px;
      margin: 0 auto;
      .city {
        display: flex;
        align-items: center;

        p {
          font-size: 14px;
          margin-right: 5px;
        }

        span {
          display: block;
          width: 12px;
          height: 6px;
          background: url("../../assets/imgs/home/arr-down.png") no-repeat
            center;
          background-size: cover;
        }
      }
      .cinema {
        width: 36px;
        height: 100%;
        color: #fff;
        font-size: 18px;
        font-weight: bold;
        line-height: 44px;
      }
      .header-search {
        width: 17px;
        height: 17px;
        background: url("../../assets/imgs/home/search.png") no-repeat center;
        background-size: cover;
      }
    }
  }
  //定位我在....
  .position {
    display: flex;
    align-items: center;
    height: 30px;
    color: #dfdfdf;
    padding-left: 22px;
    img {
      width: 13px;
      height: 16px;
      padding-right: 11px;
    }
    #allmap {
      color: #fff;
    }
  }
  //电影院列表
  .wrapper {
    width: 100%;
    height: 100%;
    overflow: hidden;
    .cinema-list.content {
      width: 335px;
      margin: 0 auto;
      padding-bottom: 170px;
      .cinema-details {
        width: 313px;
        height: 146px;
        color: #dfdfdf;
        background-color: rgba(51, 54, 61, 1);
        padding: 0 11px;
        margin-bottom: 15px;
        // 电影院
        .title {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 313px;
          height: 20px;
          padding-top: 9px;
          //影院名字
          h3 {
            font-size: 14px;
            font-family: PingFangSC-Medium, PingFangSC;
            font-weight: 500;
            color: rgba(255, 255, 255, 1);
            line-height: 20px;
          }
          //最低价格起
          .price {
            display: flex;
            justify-content: space-between;
            align-items: baseline;
            width: 55px;
            font-size: 12px;
            span {
              color: #fbc34a;
              font-size: 14px;
            }
          }
        }
        //影院位置
        .address {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 313px;
          height: 17px;
          margin: 3px 0 10px 0;
          .address-details {
            height: 100%;
            font-size: 12px;
          }
          span {
            display: block;
            width: 35px;
            height: 100%;
          }
        }
        //影片特惠、促销、vip卡
        .preferential,
        .promotion,
        .vip {
          display: flex;
          justify-content: start;
          align-items: center;
          margin-bottom: 12px;
          span.behind {
            display: block;
            width: 18px;
            height: 19px;
            line-height: 19px;
            border-radius: 4px;
            &.item-1 {
              background: linear-gradient(
                135deg,
                rgba(235, 110, 117, 1) 0%,
                rgba(247, 166, 83, 1) 100%
              );
            }
            &.item-2 {
              background: linear-gradient(
                135deg,
                rgba(176, 70, 157, 1) 0%,
                rgba(97, 72, 170, 1) 100%
              );
            }
            &.item-3 {
              background: linear-gradient(
                135deg,
                rgba(50, 36, 149, 1) 0%,
                rgba(49, 56, 172, 1) 100%
              );
            }
          }
          .after {
            margin-left: 9px;
          }
        }
      }
    }
  }
}
</style>