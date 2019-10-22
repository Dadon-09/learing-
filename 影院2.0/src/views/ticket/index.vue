<template>
  <div class="ticket-main">
    <div class="header-center">
      <div class="header">
        <div class="left" @click="go()"></div>
        <router-link tag="div" to="/main" class="right">
          <div class="head"></div>
          <p class="name">YH.Dai</p>
        </router-link>
      </div>
    </div>
    <div class="wrapper">
      <div class="content">
        <div class="main">
          <ul>
            <li tag="li" @click="goSearch()" class="tick">试试搜索影片</li>
            <li class="tick">
              <router-link tag="span" to="/cinema" class="add">万达影城</router-link>
              <router-link tag="span" to="/cinema/map" class="address"></router-link>
            </li>
            <li class="tick">
              <div>
                <span class="date">5月9日</span>
                <span class="time">1:34pm</span>
              </div>
              <div class="more">更多场次</div>
            </li>
            <li>
              <div class="buy">特惠票</div>
              <div class="buy">推荐座位</div>
            </li>
            <li>
              <button @click="buyTicket()">购票</button>
            </li>
            <li>一条狗的使命 我是药神 清除历史</li>
          </ul>
        </div>
        <div class="footer">
          <div class="title">
            <p>特惠票</p>
            <router-link tag="p" to="/coupon">更多优惠 &gt;</router-link>
          </div>
          <ul>
            <li v-for="item in list" :key="item.id">
              <div>
                <p>{{ item.start }}</p>
                <p>{{ item.end }} 散场</p>
              </div>
              <div>
                <p>{{ item.names }}</p>
                <p>{{ item.address }}</p>
              </div>
              <div>{{ item.price }} 元</div>
              <div>
                <button @click="buyTicket()">购票</button>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
import Mock from "mockjs";
const Random = Mock.Random;
export default {
  data() {
    return {
      list: [
        {
          start: Random.time("HH:mm:ss"),
          end: Random.time("HH:mm:ss"),
          names: Random.ctitle(4),
          address: Random.ctitle(5),
          price: Random.natural(10, 100),
          id: Random.guid()
        },
        {
          start: Random.time("HH:mm:ss"),
          end: Random.time("HH:mm:ss"),
          names: Random.ctitle(4),
          address: Random.ctitle(5),
          price: Random.natural(10, 100),
          id: Random.guid()
        },
        {
          start: Random.time("HH:mm:ss"),
          end: Random.time("HH:mm:ss"),
          names: Random.ctitle(4),
          address: Random.ctitle(5),
          price: Random.natural(10, 100),
          id: Random.guid()
        },
        {
          start: Random.time("HH:mm:ss"),
          end: Random.time("HH:mm:ss"),
          names: Random.ctitle(4),
          address: Random.ctitle(5),
          price: Random.natural(10, 100),
          id: Random.guid()
        },
        {
          start: Random.time("HH:mm:ss"),
          end: Random.time("HH:mm:ss"),
          names: Random.ctitle(4),
          address: Random.ctitle(5),
          price: Random.natural(10, 100),
          id: Random.guid()
        }
      ]
    };
  },
  mounted() {
    let wrapper = document.querySelector(".wrapper");
    let scroll = new BScroll(wrapper, {
      click: true
    });
  },
  methods: {
    go() {
      this.$router.go(-1); //返回上一级
    },
    goSearch() {
      this.$router.push("/search"); //搜索页面
    },
    buyTicket() {
      this.$router.push("/newchoose"); //选座
    }
  }
};
</script>

<style lang="scss" scoped>
.header-center {
  width: 100%;
  position: fixed;
  left: 0;
  top: 0px;
  z-index: 9999;
  background-color: #23262d;

  .header {
    width: 335px;
    height: 55px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;

    .left {
      width: 7px;
      height: 13px;
      background: url("../../assets/imgs/ticket/arr-left.png") no-repeat center;
      background-size: cover;
    }

    .right {
      width: 80px;
      display: flex;

      .head {
        width: 35px;
        height: 35px;
        background: url("../../assets/imgs/ticket/user.png") no-repeat center;
        background-size: cover;
        margin-right: 5px;
      }

      .name {
        width: 40px;
        font-size: 12px;
        line-height: 35px;
        color: #86888c;
      }
    }
  }
}

.ticket-main {
  width: 100%;
  height: 100%;
}

.wrapper {
  width: 100%;
  height: 100%;
  overflow: hidden;

  .content {
    padding: 40px 0 90px;
  }
}

.main {
  width: 336px;
  height: 300px;
  margin: auto;
  margin-top: 35px;
  padding: 15px;
  padding-bottom: 0;
  box-sizing: border-box;
  background-color: #33363d;
  color: #86888c;

  li {
    height: 40px;
    margin-bottom: 5px;
    text-align: left;
    line-height: 40px;
    position: relative;

    &.tick::after {
      width: 8px;
      height: 10px;
      content: "";
      position: absolute;
      right: 80px;
      bottom: 15px;
      background: url("../../assets/imgs/ticket/right.png") no-repeat center;
      background-size: cover;
    }

    &.tick {
      position: relative;
      display: flex;
      justify-content: space-between;
      font-size: 12px;

      .address {
        position: absolute;
        right: 30px;
        bottom: 10px;
        width: 16px;
        height: 20px;
        background: url("../../assets/imgs/ticket/position.png") no-repeat
          center;
        background-size: cover;
      }

      .date,
      .add {
        font-size: 16px;
      }

      .time {
        font-size: 12px;
      }
    }
  }

  li:nth-child(1) {
    font-size: 12px;
  }

  li:nth-child(4) {
    display: flex;
    justify-content: space-between;

    .buy {
      position: relative;
      margin-left: 25px;

      &::before {
        content: "√";
        width: 18px;
        height: 18px;
        // border: 1px solid #fff;
        font-size: 12px;
        text-align: center;
        line-height: 18px;
        position: absolute;
        color: #ffffff;
        left: -25px;
        bottom: 10px;
        background: linear-gradient(
          128deg,
          rgba(241, 109, 125, 1) 0%,
          rgba(242, 141, 109, 1) 100%
        );
      }
    }
  }

  li:nth-child(5) {
    button {
      color: #ffffff;
      outline: none;
      border: none;
      width: 302px;
      height: 40px;
      background: linear-gradient(
        150deg,
        rgba(242, 91, 134, 1) 0%,
        rgba(241, 172, 94, 1) 100%
      );
      box-shadow: 0px 0px 4px 1px rgba(242, 109, 125, 0.18);
      border-radius: 6px;
      font-size: 18px;
    }
  }

  li:last-child {
    margin-top: 10px;
  }
}

.footer {
  width: 335px;
  margin-top: 30px;
  color: #86888c;
  margin: 0 auto;

  .title {
    width: 335px;
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    p:first-child {
      font-size: 16px;
    }
  }

  li {
    height: 70px;
    background-color: #33363d;
    margin: 15px auto;
    border-radius: 6px;
    font-size: 12px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    text-align: left;

    div:nth-child(-n + 2) {
      p:first-child {
        margin-bottom: 5px;
        color: #ffffff;
        font-size: 16px;
      }
    }

    div:nth-child(3) {
      font-size: 20px;
      color: #fbc34a;
    }

    div:last-child {
      button {
        width: 45px;
        height: 25px;
        font-size: 14px;
        background: linear-gradient(
          150deg,
          rgba(242, 91, 134, 1) 0%,
          rgba(241, 172, 94, 1) 100%
        );
        box-shadow: 0px 0px 4px 1px rgba(242, 109, 125, 0.18);
        border-radius: 6px;
        border: none;
        outline: none;
        color: #ffffff;
      }
    }
  }
}
</style>