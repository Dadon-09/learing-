<template>
  <div class="main-coupon">
    <mainheader title="优惠券" page="/main"></mainheader>
    <h2>你有2张优惠券可有</h2>
    <div class="content" v-for="item in couponarr" :key="item.id">
      <div class="content-l">
        <p class="linea">电影专享代金券</p>
        <p class="lineb">购票即可抵扣 快去购票</p>
        <p class="linec">有效期至： {{item.time}}</p>
      </div>
      <div class="content-r">
        <div class="title">
          <div class="number">{{item.num}}</div>
          <div class="yuan">元</div>
          <div class="goupiao" v-if="item.isout">购票</div>
        </div>
        <img :src="item.url" alt />
      </div>
    </div>
    <p>没有更多了</p>
    <div class="foot">去购票 &gt;</div>
  </div>
</template>

<script>
import mocks from "mockjs";
const mock = mocks.Random;
import mainheader from "@/components/main/header";
export default {
  name: "",
  data() {
    return {
      // 优惠券数组
      couponarr: [
        {
          id: mock.guid(),
          num: 5,
          time: "2019-10-15",
          //是否过期的判断
          isout: true,
          url: require("@/assets/imgs/mine/img1.png")
        },
        {
          id: mock.guid(),
          num: 5,
          time: "2019-10-15",
          //是否过期的判断
          isout: true,
          url: require("@/assets/imgs/mine/img1.png")
        },
        {
          id: mock.guid(),
          num: 5,
          time: "2019-10-15",
          //是否过期的判断
          isout: true,
          url: require("@/assets/imgs/mine/img1.png")
        },
        {
          id: mock.guid(),
          num: 5,
          time: "2019-10-15",
          //是否过期的判断
          isout: false,
          url: require("@/assets/imgs/mine/outline.png")
        },
        {
          id: mock.guid(),
          num: 5,
          time: "2019-10-15",
          //是否过期的判断
          isout: false,
          url: require("@/assets/imgs/mine/outline.png")
        },
        {
          id: mock.guid(),
          num: 5,
          time: "2019-10-15",
          //是否过期的判断
          isout: false,
          url: require("@/assets/imgs/mine/outline.png")
        }
      ]
    };
  },
  components: {
    mainheader
  }
};
</script>


<style lang='scss' scoped>
@import "@/assets/css/common/common.scss";
.main-coupon {
  padding: 0 $basePadding;
  margin-bottom: 100px;
  p {
    font-size: 14px;
    color: rgba(255, 255, 255, 0.6);
  }
  h2 {
    width: 100%;
    height: 30px;
    background: rgba(44, 47, 54, 1);
    color: rgba(255, 255, 255, 1);
    line-height: 30px;
    font-size: 12px;
    text-align: left;
    margin: 20px 0;
  }
  .content {
    width: 335px;
    height: 120px;
    background: rgba(51, 54, 61, 1);
    margin: 20px 0;
    display: flex;
    .content-l {
      width: 100%;
      display: flex;
      flex-flow: column wrap;
      justify-content: center;
      text-align: left;
      text-indent: 30px;
      .linea {
        font-size: 18px;
        font-weight: 500;
        color: rgba(255, 255, 255, 1);
        margin: 10px 0 5px 0;
      }
      .lineb {
        font-size: 12px;
        font-weight: 400;
        color: rgba(255, 255, 255, 0.6);
        margin: 5px 0;
      }
      .linec {
        font-size: 12px;
        font-weight: 400;
        color: rgba(255, 255, 255, 0.6);
        margin: 5px 0;
      }
    }
    .content-r {
      position: relative;
      width: 180px;
      height: 100%;
      img {
        width: 100%;
        height: 100%;
      }
      .title {
        position: absolute;
        left: 50%;
        top: 50%;
        color: white;
        width: 40px;
        height: 40px;
        margin: -20px 0 0 -20px;
        display: flex;
        flex-flow: row wrap;
        justify-content: center;
        align-items: center;
        .number {
          font-size: 24px;
        }
        .yuan {
          font-size: 16px;
        }
        .goupiao {
          font-size: 18px;
        }
      }
    }
  }
  .foot {
    width: 100%;
    height: 70px;
    background: rgba(44, 47, 54, 1);
    position: fixed;
    left: 0;
    bottom: 0;
    font-size: 30px;
    color: white;
    line-height: 70px;
    z-index: 99;
  }
}
</style>