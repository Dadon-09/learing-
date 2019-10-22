<template>
  <div class="ticketinfo">
    <mainheader title="我的影票" page="/order"></mainheader>
    <div class="box">
      <div class="up">
        <div class="content">
          <p class="title">{{ticketinfo.title}}</p>
          <p>今天:{{ticketinfo.time}}</p>
          <p>{{ticketinfo.cinema}}</p>
          <p>{{ticketinfo.seat}}</p>
        </div>
        <img :src="ticketinfo.image" alt />
      </div>
      <div class="center">
        <div class="center-up">
          <span class="text">取票码</span>
          <span class="code">4437774396000</span>
          <span>{{ticketinfo.price}}元</span>
        </div>
        <img src="@/assets/imgs/mine/qrcode.png" alt />
        <div class="down">{{ticketinfo.num}}张电影票</div>
        <div class="ball left"></div>
        <div class="ball right"></div>
      </div>
      <ul class="down">
        <li>
          <span>{{ticketinfo.cinema}}</span>
          <span>{{ticketinfo.distance}}km</span>
        </li>
        <li>
          <span>地址 : {{ticketinfo.address}}</span>
          <img src="@/assets/imgs/mine/tickets2.png" alt />
        </li>
      </ul>
    </div>
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
      //   id: "",
      ticketinfo: {
        id: "",
        image: require("@/assets/imgs/mine/tickets1.png"),
        cinema: "万达国际影城 (金水东路店)",
        status: "已完成",
        title: "后来的我们",
        num: 2,
        time: "05月16日 17:00 - 18:30",
        seat: "五号厅 5排14座 5排15座",
        price: 70,
        pagecode: "284856992589858F",
        address: "绿地新都会C座1803",
        distance: 1.3
      }
    };
  },
  created() {
    // this.id = this.$route.params.id;
    this.ticketinfo.id = this.$route.params.id;
  },
  components: {
    mainheader
  }
};
</script>

<style lang='scss' scoped>
@import "@/assets/css/common/common.scss";
.ticketinfo {
  padding: 0 $basePadding;
  font-size: 14px;
  color: rgba(58, 58, 58, 1);
  .box {
    width: 90%;
    height: 550px;
    background-color: white;
    border-radius: 20px;
    margin: 50px auto 0 auto;
    .up {
      width: 90%;
      height: 100px;
      display: flex;
      justify-content: space-around;
      align-items: center;
      padding: 40px 0;
      border-bottom: 1px dashed #979797;
      margin: 0 auto;
      .content {
        width: 200px;
        height: 100%;
        box-sizing: border-box;
        padding-left: 10px;
        display: flex;
        flex-flow: column wrap;
        justify-content: space-around;
        text-align: left;
        .title {
          font-size: 18px;
          color: black;
          font-weight: bolder;
        }
      }
      img {
        width: 78px;
        height: 100%;
      }
    }
    .center {
      width: 90%;
      height: auto;
      position: relative;
      padding-bottom: 20px;
      border-bottom: 1px dashed #979797;
      margin: 0 auto;
      .center-up {
        width: 100%;
        height: 30px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        padding-top: 40px;
        span {
          font-size: 14px;
          color: #3a3a3a;
        }
        .code {
          padding: 5px 20px;
          border: 1px solid rgba(151, 151, 151, 0.39);
        }
      }
      img {
        width: 144px;
        height: 144px;
        margin: 10px auto;
      }
      .down {
        font-size: 10px;
        color: rgba(58, 58, 58, 0.6);
      }
      .ball {
        position: absolute;
        top: 10px;
        left: -35px;
        width: 30px;
        height: 30px;
        border-radius: 50%;
        background-color: #22262d;
        // z-index: 9;
        &.right {
          left: auto;
          right: -35px;
        }
      }
    }
    .down {
      width: 90%;
      height: auto;
      margin: 0 auto;
      padding: 15px 0;
      li {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 5px 0;
        width: 260px;
        img {
          margin-right: 10px;
        }
      }
    }
  }
}
</style>