<template>
  <div class="wrapper">
    <div class="content">
      <div id="app">
        <!-- 顶部 -->
        <div class="top">
          <!-- 图标 -->
          <div class="icons">
            <!-- 设置 -->
            <div class="site" @click="sites"></div>
            <!-- 消息 -->
            <router-link tag="div" to="/message" class="message"></router-link>
          </div>
          <!-- 头像 会员等 -->
          <div class="plm">
            <div class="headImg" @click="centerName"></div>
            <div class="name-vip">
              <div class="nusename">YH.Dai116</div>
              <div class="vip">V10王者会员 &gt;</div>
            </div>
          </div>
        </div>
        <!-- 会员中心 -->
        <div class="vip-center">
          <div class="maing">会员中心</div>
          <div class="split"></div>
          <div class="vip-text">
            <p>会员中心</p>
            <p>50元通用券天天送</p>
          </div>
          <div class="red-money"></div>
        </div>
        <div class="order">
          <div class="order-title">我的订单</div>
          <router-link tag="div" to="/order" class="order-entire"
            >全部 &gt;</router-link
          >
          <div class="order-list">
            <router-link tag="div" to="/order/all" class="not-c"></router-link>
            <router-link
              tag="div"
              to="/order/pay"
              class="Pending"
            ></router-link>
            <router-link
              tag="div"
              to="/order/evalute"
              class="assess"
            ></router-link>
            <router-link
              tag="div"
              to="/order/back"
              class="reimburse"
            ></router-link>
          </div>
          <div class="order-text">
            <router-link tag="div" to="/order/all" class="not-text-c"
              >未消费</router-link
            >
            <router-link tag="div" to="/order/pay" class="Pending-text"
              >待付款</router-link
            >
            <router-link tag="div" to="/order/evalute" class="assess-text"
              >待评价</router-link
            >
            <router-link tag="div" to="/order/back" class="reimburse-text"
              >退款</router-link
            >
          </div>
        </div>
        <!-- 更多选项 -->
        <div class="work">
          <div class="vip-card">
            影城会员卡
            <div class="work-gt">&gt;</div>
          </div>
          <router-link tag="div" to="/coupon" class="rebate">
            优惠券
            <div class="work-gt">&gt;</div>
          </router-link>
          <div class="keep">
            我的收藏
            <div class="work-gt">&gt;</div>
          </div>
          <div class="help">
            帮助与反馈
            <div class="work-gt">&gt;</div>
          </div>
        </div>
        <!-- 底部导航按钮 -->
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from "@better-scroll/core";
import bttomNav from "../../components/FooterBar";
export default {
  data() {
    return {};
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
  methods: {
    centerName() {
      this.$router.push("/each");
    },
    sites() {
      this.$router.push("/install");
    }
  },
  components: {
    bttomNav
  }
};
</script>

<style lang="scss" scoped>
.wrapper {
  // margin-top: 50px;
  height: 100%;
  width: 100%;

  .content {
    padding-bottom: 150px;
  }
}
#app {
  .top {
    display: flex;
    align-items: center;
    width: 100%;
    height: 210px;
    background: linear-gradient(
      123deg,
      rgba(242, 94, 133, 1) 0%,
      rgba(241, 166, 97, 1) 100%
    );
    border-radius: 29px;
    opacity: 0.9029;

    .plm {
      display: flex;
      height: 73px;
      margin-left: 20px;

      .headImg {
        width: 73px;
        height: 73px;
        border-radius: 100%;
        background-image: url("../../assets/imgs/mine/user.png");
        background-size: 100% 100%;
        background-position: center;
        background-repeat: no-repeat;
      }

      .name-vip {
        margin: 10px 0 0 10px;
        width: 99px;
        height: 52px;

        .nusename {
          margin-left: 0;
          text-align: left;
          font-size: 18px;
          font-weight: 500;
          color: #fff;
        }

        .vip {
          margin-top: 4px;
          height: 23px;
          color: #fff;
          text-align: center;
          line-height: 23px;
          background: rgba(51, 54, 61, 1);
          border-radius: 5px;
          opacity: 0.7293999999999999;
        }
      }
    }

    .icons {
      position: absolute;
      left: 304px;
      top: 49px;
      display: flex;
      justify-content: space-between;
      width: 50px;
      height: 19px;

      .site {
        width: 19px;
        height: 19px;
        background-image: url("../../assets/imgs/mine/settings.png");
        background-size: 100% 100%;
        background-position: center;
        background-repeat: no-repeat;
      }

      .message {
        width: 19px;
        height: 19px;
        background-image: url("../../assets/imgs/mine/message.png");
        background-size: 100% 100%;
        background-position: center;
        background-repeat: no-repeat;
      }
    }
  }

  .vip-center {
    position: relative;
    top: -30px;
    left: 20px;
    display: flex;
    width: 336px;
    height: 68px;
    background: rgba(51, 54, 61, 1);
    box-shadow: 0px 0px 4px 3px rgba(0, 0, 0, 0.1);
    border-radius: 17px;

    .maing {
      margin: 21px 0 22px 36px;
      width: 72px;
      height: 25px;
      font-size: 18px;
      font-weight: 500;
      color: #fff;
      line-height: 25px;
    }

    .split {
      margin: 11px 0 8px 11px;
      width: 1px;
      height: 47px;
      background-color: #65676a;
    }

    .vip-text {
      display: flex;
      flex-wrap: wrap;
      margin: 16px 0 10px 16px;
      width: 99px;
      height: 42px;

      p {
        font-size: 12px;
        font-weight: 400;
        color: #b2b4b6;
        line-height: 17px;
      }
    }

    .red-money {
      width: 32px;
      height: 34px;
      margin: 17px 0 17px 48px;
      background-image: url("../../assets/imgs/mine/hb.png");
      background-size: 100% 100%;
      background-position: center;
      background-repeat: no-repeat;
    }
  }

  .order {
    position: relative;
    display: flex;
    margin-top: -15px;
    height: 137px;
    background: rgba(51, 54, 61, 1);
    border-radius: 6px;

    .order-title {
      margin: 10px 0 24px 20px;
      width: 72px;
      height: 25px;
      font-size: 18px;
      font-weight: 500;
      color: rgba(255, 255, 255, 1);
      line-height: 25px;
    }

    .order-entire {
      position: absolute;
      left: 316px;
      top: 10px;
      width: 50px;
      height: 20px;
      font-size: 14px;
      font-weight: 400;
      color: #65676a;
      line-height: 20px;
    }

    .order-list {
      position: absolute;
      left: 48px;
      top: 57px;
      display: flex;
      justify-content: space-between;
      width: 277px;
      height: 24px;

      .not-c {
        width: 24px;
        height: 24px;
        background-image: url("../../assets/imgs/mine/mony.png");
        background-size: 100% 100%;
        background-position: center;
        background-repeat: no-repeat;
      }

      .Pending {
        width: 24px;
        height: 24px;
        background-image: url("../../assets/imgs/mine/pay.png");
        background-size: 100% 100%;
        background-position: center;
        background-repeat: no-repeat;
      }

      .assess {
        width: 24px;
        height: 24px;
        background-image: url("../../assets/imgs/mine/evaluate.png");
        background-size: 100% 100%;
        background-position: center;
        background-repeat: no-repeat;
      }

      .reimburse {
        width: 24px;
        height: 24px;
        background-image: url("../../assets/imgs/mine/refund.png");
        background-size: 100% 100%;
        background-position: center;
        background-repeat: no-repeat;
      }
    }

    .order-text {
      position: absolute;
      left: 39px;
      top: 95px;
      display: flex;
      justify-content: space-between;
      width: 287px;
      height: 20px;
      line-height: 20px;
      font-size: 14px;
      font-weight: 400;
      color: #fff;

      .not-text-c {
        width: 42px;
        height: 20px;
      }

      .Pending-text {
        width: 42px;
        height: 20px;
      }

      .assess-text {
        width: 42px;
        height: 20px;
      }

      .reimburse-text {
        width: 28px;
        height: 20px;
      }
    }
  }

  .work {
    margin: 20px 0 104px 0;
    height: 215px;
    color: #fff;
    font-size: 16px;
    font-weight: 400;
    text-align: left;
    text-indent: 20px;
    background: rgba(51, 54, 61, 1);

    .vip-card {
      height: 25%;
      line-height: 53.75px;

      .work-gt {
        margin-left: 225px;
        display: inline-block;
        width: 20px;
        height: 20px;
        color: #65676a;
      }
    }

    .rebate {
      height: 25%;
      line-height: 53.75px;

      .work-gt {
        margin-left: 257px;
        display: inline-block;
        width: 20px;
        height: 20px;
        color: #65676a;
      }
    }

    .keep {
      height: 25%;
      line-height: 53.75px;

      .work-gt {
        margin-left: 241px;
        display: inline-block;
        width: 20px;
        height: 20px;
        color: #65676a;
      }
    }

    .help {
      height: 25%;
      line-height: 53.75px;

      .work-gt {
        margin-left: 225px;
        display: inline-block;
        width: 20px;
        height: 20px;
        color: #65676a;
      }
    }
  }
}
</style>
