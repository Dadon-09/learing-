<template>
  <div class="myorder-all">
    <router-link
      :to="`/ticketinfo/${item.id}`"
      tag="div"
      class="content"
      v-for="item in orderarr"
      :key="item.id"
    >
      <div class="up">
        <div class="left">
          <span>{{item.cinema}}</span>
          <img src="@/assets/imgs/icons/arr-right.png" alt />
        </div>
        <div class="right">{{item.status}}</div>
      </div>
      <div class="center">
        <img :src="item.image" alt />
        <div class="text">
          <div class="title">
            <div class="left">{{item.title}}</div>
            <div class="right">{{item.num}}张</div>
          </div>
          <p>{{item.time}}</p>
          <p>{{item.seat}}</p>
        </div>
      </div>
      <div class="down">
        <p>总价 : {{item.price}}元</p>
      </div>
    </router-link>
    <p class="nomore">没有更多了</p>
  </div>
</template>

<script>
import mocks from "mockjs";
const mock = mocks.Random;
export default {
  name: "",
  data() {
    return {
      orderarr: [
        {
          id: mock.guid(),
          image: require("@/assets/imgs/mine/movie1.png"),
          cinema: "万达国际影城",
          status: "已完成",
          title: "后来的我们",
          num: 2,
          time: "05月16日 17:00",
          seat: "五号厅 5排14座 5排15座",
          price: 70
        },
        {
          id: mock.guid(),
          image: require("@/assets/imgs/mine/movie2.png"),
          cinema: "万达国际影城",
          status: "待付款",
          title: "后来的他们",
          num: 1,
          time: "05月15日 17:00",
          seat: "五号厅 5排14座 5排15座",
          price: 99
        },
        {
          id: mock.guid(),
          image: require("@/assets/imgs/mine/movie3.png"),
          cinema: "万达国际影城",
          status: "待评价",
          title: "后来的你们",
          num: 5,
          time: "05月14日 17:00",
          seat: "五号厅 5排14座 5排15座",
          price: 150
        },
        {
          id: mock.guid(),
          image: require("@/assets/imgs/mine/movie4.png"),
          cinema: "万达国际影城",
          status: "已退款",
          title: "后来的大家",
          num: 3,
          time: "05月16日 17:00",
          seat: "五号厅 5排14座 5排15座",
          price: 46
        }
      ]
    };
  }
};
</script>

<style lang='scss' scoped>
@import "@/assets/css/common/common.scss";
.myorder-all {
  font-size: 14px;
  color: white;
  text-align: left;
  margin-bottom: 100px;
  .nomore {
    font-size: 14px;
    color: rgba(255, 255, 255, 0.6);
    text-align: center;
  }
  .content {
    width: 100%;
    height: 161px;
    background: rgba(51, 54, 61, 1);
    border-radius: 6px;
    margin: 20px auto;
    box-sizing: border-box;
    padding: 0 15px;
    display: flex;
    flex-flow: column wrap;
    justify-content: space-around;

    .up {
      width: 100%;
      height: 20px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      img {
        width: 14px;
        height: 13px;
      }
    }
    .center {
      display: flex;
      align-items: center;

      img {
        width: 70px;
        height: 81px;
        margin: 0 15px;
      }
      .text {
        width: 200px;
        height: 100%;
        display: flex;
        flex-flow: column wrap;
        justify-content: space-around;
        p {
          color: rgba(255, 255, 255, 0.6);
          font-size: 12px;
        }
        .title {
          display: flex;
          justify-content: space-between;
        }
      }
    }
    .down {
      p {
        color: rgba(255, 255, 255, 0.6);
        font-size: 12px;
      }
    }
  }
}
</style>