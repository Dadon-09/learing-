<template>
  <div class="review">
    <div class="icon">
      <div class="icon-c">
        <div class="icon-left" @click="back"></div>
        <div class="icon-right"></div>
      </div>
    </div>
    <div class="review-scroll">
      <div class="review-c">
        <ul class="nav">
          <li class="option">简介</li>
          <li class="option">
            影评
            <span>999+</span>
          </li>
          <li class="option">讨论</li>
          <li class="option">更多</li>
        </ul>
        <div class="title">
          <p class="title-left">观众热评</p>
          <p class="title-right">写影评</p>
        </div>
        <div class="label">
          <div class="lable-row" v-for="(item,index) in arr" :key="index">
            <p :class="[{'shape':true},{'different':num.istrue}]" v-for="num in item" :key="num.id">
              {{num.name}}
              <span>{{num.num}}</span>
            </p>
          </div>
          <span class="label-more"></span>
        </div>
        <div class="user">
          <div class="user-review" v-for="item in reviewList" :key="item.id">
            <div class="user-header">
              <div class="user-info">
                <img :src="item.src" alt />
                <div class="info-left">
                  <p>{{item.use}}</p>
                  <img
                    v-for="i in Math.floor(item.fraction/2)"
                    :key="i"
                    src="../../../assets/imgs/movie/star_full.png"
                    alt
                  />
                  <img
                    v-if="Math.floor(item.fraction/2)!==item.fraction/2"
                    src="../../../assets/imgs/movie/star_half.png"
                    alt
                  />
                  <img
                    v-for="c in Math.floor(5-item.fraction/2)"
                    :key="c*10"
                    src="../../../assets/imgs/movie/star_outline.png"
                    alt
                  />
                  <span>{{item.fraction}}</span>
                </div>
              </div>
              <span class="user-icon">...</span>
            </div>
            <p class="review-text">{{item.review}}</p>
            <div class="review-footer">
              <p>{{item.date}}</p>
              <div class="icon-box">
                <img src="../../../assets/imgs/movie/zan.png" alt />
                <span>{{Math.floor(item.fraction*5)}}</span>
                <img src="../../../assets/imgs/movie/common.png" alt />
                <span>{{Math.floor(item.fraction*3)}}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <router-link class="footer" tag="div" to="/chooseSeats">特惠选座</router-link>
  </div>
</template>

<script>
import mock from "mockjs";
export default {
  data() {
    return {
      list: [
        {
          name: "全部",
          id: mock.Random.guid()
        },
        {
          name: "最新",
          id: mock.Random.guid(),
          num: 5412
        },
        {
          name: "陪伴是最长情的告白",
          id: mock.Random.guid(),
          num: 1902,
          istrue: true
        },
        {
          name: "爱狗人士必看",
          id: mock.Random.guid(),
          num: 1902,
          istrue: true
        },
        {
          name: "好评",
          id: mock.Random.guid(),
          num: 5412
        },
        {
          name: "差评",
          id: mock.Random.guid(),
          num: 69
        },
        {
          name: "点映",
          id: mock.Random.guid(),
          num: 69
        },
        {
          name: "购票",
          id: mock.Random.guid(),
          num: 5790
        },
        {
          name: "影评达人",
          id: mock.Random.guid(),
          num: 13
        },
        {
          name: "同城",
          id: mock.Random.guid(),
          num: 69
        }
      ],
      reviewList: [
        {
          id: mock.Random.guid(),
          use: mock.Random.string(6, 10),
          fraction: "9.0",
          review: mock.Random.sentence(20, 40) + "...",
          src: require("../../../assets/imgs/movie/avatar1.png"),
          date: mock.Random.now()
        },
        {
          id: mock.Random.guid(),
          use: mock.Random.string(6, 10),
          fraction: "8.0",
          review: mock.Random.sentence(20, 40) + "...",
          src: require("../../../assets/imgs/movie/avatar2.png"),
          date: mock.Random.now()
        },
        {
          id: mock.Random.guid(),
          use: mock.Random.string(6, 10),
          fraction: "7.9",
          review: mock.Random.sentence(20, 40) + "...",
          src: require("../../../assets/imgs/movie/avatar.png"),
          date: mock.Random.now()
        }
      ]
    };
  },
  methods: {
    back() {
      this.$router.go(-1);
    }
  },
  created() {
    this.arr = [];
    for (var i = 0; i < this.list.length; i++) {
      if (i % 3 == 0) {
        this.arr.push([]);
      }
      this.arr[Math.floor(i / 3)].push(this.list[i]);
    }
    console.log(this.reviewList);
  }
};
</script>

<style lang="scss" scoped>
.review {
  width: 100%;
  position: relative;
  height: 100%;
  color: #ffffff;
  .review-scroll {
    height: 100%;
    .review-c {
      width: 335px;
      margin: 0 auto 48px;
      padding-top: 96px;
    }
  }
}
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
.nav {
  width: 194px;
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  padding-bottom: 36px;
  .option {
    &:nth-child(2) {
      position: relative;
      span {
        position: absolute;
        left: 105%;
        top: -50%;
        font-size: 8px;
      }
    }
  }
}
.title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 24px;
  .title-left {
    font-size: 18px;
  }
  .title-right {
    width: 54px;
    height: 25px;
    line-height: 25px;
    font-size: 12px;
    background: linear-gradient(
      150deg,
      rgba(242, 91, 134, 1) 0%,
      rgba(241, 172, 94, 1) 100%
    );
    box-shadow: 0px 0px 4px 1px rgba(242, 109, 125, 0.18);
    border-radius: 13px;
  }
}
.label {
  padding-bottom: 38px;
  display: flex;
  flex-wrap: wrap;
  .lable-row {
    margin-bottom: 15px;
    width: 100%;
    display: flex;
    text-align: center;
    .shape {
      font-size: 12px;
      background-color: blue;
      padding: 5px 10px;
      margin-right: 14px;
      background: rgba(51, 54, 61, 1);
      border-radius: 10px;
      &.different {
        border-radius: 10px 0px 10px 10px;
        border: 1px solid rgba(242, 123, 119, 0.28);
        background-color: #23262d;
      }
    }
  }
  .label-more {
    margin-top: 18px;
    display: block;
    width: 7px;
    height: 13px;
    background: url("../../../assets/imgs/movie/arr-left.png") no-repeat center;
    background-size: cover;
    margin: 0 auto;
    transform: rotate(-90deg);
  }
}
.user {
  .user-review {
    padding-bottom: 25px;
    .user-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .user-icon {
        line-height: 50px;
        font-size: 18px;
      }
      .user-info {
        display: flex;
        align-items: center;
        .info-left {
          text-align: left;
          margin-left: 14px;
          p {
            font-size: 14px;
            margin-bottom: 10px;
          }
          img {
            width: 10px;
            height: 10px;
            margin-right: 4px;
          }
          span {
            font-size: 10px;
            margin-left: 6px;
            color: #fbc34a;
          }
        }
      }
    }
    .review-text {
      margin-top: 8px;
      text-align: justify;
      word-break: break-all;
      font-size: 12px;
      line-height: 18px;
    }
    .review-footer {
      margin-top: 11px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .icon-box {
        display: flex;
        justify-content: space-between;
        align-items: center;
        img {
          margin: 0 6px 0 11px;
        }
      }
    }
  }
}
.footer {
  position: fixed;
  bottom: 0;
  left: 0;
  font-size: 18px;
  color: rgba(255, 255, 255, 1);
  line-height: 48px;
  width: 100%;
  height: 48px;
  background: linear-gradient(
    150deg,
    rgba(242, 91, 134, 1) 0%,
    rgba(241, 172, 94, 1) 100%
  );
  box-shadow: 0px 0px 4px 1px rgba(242, 109, 125, 0.18);
}
</style>