<template>
  <div id="app">
    <div class="top">
      <router-link to="/chooseSeats" tag="div" class="back"></router-link>
      <div class="title">后来的我们</div>
      <div class="top-main">
        <p class="text">今天2月1日 17:10（原版2D)</p>
        <p class="text">耀莱成龙影城（建业店）</p>
        <p class="text">3号激光厅 6排9座</p>
      </div>
    </div>
    <hr style="border:2px dashed #BABBBD" />
    <div class="main-box">
      <div class="text-box" v-for="item in list" :key="item.id">
        <div class="main-text">{{ item.titles }}</div>
        <p>{{ item.texts }}</p>
      </div>
      <div class="ipone">
        <div class="ip-text">购票成功后将收到取票码</div>
        <div class="ip-num">13568686868</div>
      </div>
    </div>
    <div class="footer">
      <div class="ip-text">
        <p>还需支付:</p>
        <span>33元</span>
      </div>
      <div class="footer-btn">
        <p>确认订单</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        { titles: "电影优惠券", id: 1, texts: "1张优惠券可用" },
        { titles: "会员卡", id: 2, texts: "去使用" },
        { titles: "票价总计", id: 3, texts: "33元" },
        { titles: "手机号", id: 4, texts: "" }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
#app {
  width: 100%;
  height: 100%;
  .top {
    width: 100%;
    height: 253px;
    background: url("../../../assets/imgs/cinema/order_bg.png") no-repeat center;
    background-size: 100% 100%;
    overflow: hidden;
    .back {
      width: 7px;
      height: 13px;
      margin: 20px 20px;
      background: url("../../../assets/imgs/icons/arr-left.png") no-repeat
        center;
      background-size: (100% 100%);
    }
    .title {
      width: 120px;
      height: 33px;
      margin: 19px 20px;
      font-size: 24px;
      font-weight: 500;
      color: #fff;
      line-height: 33px;
    }
    .top-main {
      width: 100%;
      height: 80px;
      margin-left: 20px;
      text-align: left;
    }
    .text {
      width: 100%;
      height: 20px;
      margin-top: 10px;
      font-size: 14px;
      font-weight: 400;
      color: #abaeb2;
      line-height: 20px;
    }
  }
  .main-box {
    margin: 0 auto;
    width: 335px;
    height: 209px;
    background: rgba(51, 54, 61, 1);
    border-radius: 6px;
    overflow: hidden;

    .text-box {
      display: flex;
      justify-content: space-between;
      margin: 15px 20px;
      width: 300px;
      height: 22px;
    }
    .main-text {
      width: 80px;
      height: 22px;
      font-size: 16px;
      font-weight: 400;
      color: rgba(255, 255, 255, 1);
      line-height: 22px;
    }
    p {
      width: 80px;
      height: 17px;
      font-size: 12px;
      font-weight: 400;
      color: rgba(249, 195, 74, 1);
      line-height: 17px;
    }
    div:nth-child(3) {
      p {
        width: 44px;
        height: 18px;
        padding-right: 18px;
        text-align: center;
        font-size: 18px;
        font-weight: 500;
        color: rgba(194, 19, 19, 1);
      }
    }
    .ipone {
      display: flex;
      justify-content: space-between;
      margin: 10px 20px;
      width: 300px;
      height: 22px;
      .ip-text {
        width: 132px;
        height: 17px;
        font-size: 12px;
        font-weight: 400;
        color: #abaeb2;
      }
      .ip-num {
        width: 89px;
        height: 20px;
        font-size: 14px;
        font-weight: 400;
        color: #abaeb2;
      }
    }
  }
  .footer {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 106px;
    background: rgba(51, 54, 61, 1);
    .ip-text {
      display: flex;
      justify-content: space-between;
      margin: 10px 0 0 213px;
      width: 128px;
      height: 28px;
      p {
        width: 80px;
        height: 22px;
        font-size: 16px;
        font-weight: 400;
        color: rgba(255, 255, 255, 1);
        line-height: 22px;
      }
      span {
        width: 50px;
        height: 28px;
        font-size: 20px;
        font-weight: 500;
        color: rgba(194, 19, 19, 1);
        line-height: 22px;
        margin-bottom: 5px;
      }
    }
    .footer-btn {
      margin: 20px auto;
      width: 335px;
      height: 40px;
      background: linear-gradient(
        150deg,
        rgba(242, 91, 134, 1) 0%,
        rgba(241, 172, 94, 1) 100%
      );
      box-shadow: 0px 0px 4px 1px rgba(242, 109, 125, 0.18);
      border-radius: 6px;
      p {
        width: 100%;
        height: 100%;
        text-align: center;
        line-height: 40px;
        font-size: 18px;
        font-weight: 500;
        color: #fff;
      }
    }
  }
}
</style>