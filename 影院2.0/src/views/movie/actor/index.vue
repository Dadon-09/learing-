<template>
  <div class="actor">
    <div class="icon" @click="back"></div>
    <div class="scroll-box">
      <div class="actor-c">
        <div class="header">
          <div class="header-c">
            <div class="avatar"></div>
            <p class="c-name">凯拉·奈特莉</p>
            <p class="e-name">Satomi lshihara</p>
            <span class="attention">关注</span>
            <p class="amount">138585人关注</p>
            <div class="header-main">
              <p class="title">简介</p>
              <p class="synopsis">
                2002年，15岁的石原里美参加了HORIPRO公司第27回艺人新人
                选拔，获得最佳新人“完美少女”奖 。2003年2月15日，参演的爱
                情电影《小岛之恋》上映；4月5日，参演的喜剧电影《我的爷爷
                》上映，在片中饰演五代家的独生女五代珠子，她则凭借该片获
                得了第27届日本…
                <span
                  class="more"
                >查看更多</span>
              </p>
            </div>
          </div>
        </div>
        <div class="content">
          <div class="content-c">
            <p class="title">个人作品</p>
            <div class="works" v-for="item in list" :key="item.id" @click="goto">
              <img class="works-left" :src="item.img" alt />
              <div class="works-right">
                <p class="movie-name">{{ item.name }}</p>
                <p class="movie score">
                  评分
                  <span>9.0</span>
                </p>
                <p class="movie actor-name">演员 {{ item.actor }}</p>
                <p class="movie date">上映时间 {{ item.date }}</p>
              </div>
            </div>
          </div>
        </div>
        <div class="footer">
          <div class="footer-c">
            <div class="title">相册</div>
            <div class="actor-img">
              <div class="img-left">
                <img src="@/assets/imgs/movie/actor_1.png" alt />
                <div class="img-bottom">
                  <img src="@/assets/imgs/movie/actor_2.png" alt />
                  <img src="@/assets/imgs/movie/actor_3.png" alt />
                </div>
              </div>
              <img class="img-right" src="@/assets/imgs/movie/actor_4.png" alt />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import mock from "mockjs";
import BScroll from "better-scroll";
export default {
  data() {
    return {
      list: [
        {
          id: mock.Random.guid(),
          name: "忍者之国",
          img: require("../../../assets/imgs/movie/rzzg.png"),
          actor: "大野智",
          date: "2017年7月1日"
        },
        {
          id: mock.Random.guid(),
          name: "新·哥斯拉",
          img: require("../../../assets/imgs/movie/gsl.png"),
          actor: "演员 长谷川博己，竹…",
          date: "2016年7月29日"
        }
      ]
    };
  },
  methods: {
    back() {
      this.$router.go(-1);
    },
    goto() {
      this.$router.push({
        path: "/moviedetails",
        query: {
          id: 1111
        }
      });
    }
  },
  mounted() {
    let wrapper = document.querySelector(".scroll-box");
    let scroll = new BScroll(wrapper, {
      click: true
    });
  }
};
</script>

<style lang="scss" scoped>
.actor {
  height: 100%;
  background: url("../../../assets/imgs/movie/banner.png") no-repeat left top;
  background-size: 100% 454px;
  position: relative;
  .scroll-box {
    height: 100%;
  }
  .icon {
    position: absolute;
    left: 20px;
    top: 45px;
    width: 28px;
    height: 15px;
    background: rgba(1, 1, 1, 0) url("../../../assets/imgs/movie/arr-left.png")
      no-repeat top center;
    background-size: 20px 15px;
  }
}
.header {
  overflow: hidden;
  width: 100%;
  margin-bottom: 30px;
  color: #ffffff;
  .header-c {
    width: 335px;
    margin: 0 auto;
    .avatar {
      width: 85px;
      height: 85px;
      margin: 91px auto 12px;
      background: url("../../../assets/imgs/movie/actor5.png") no-repeat center;
      background-size: cover;
    }
    .c-name {
      font-size: 20px;
    }
    .e-name {
      font-size: 12px;
      margin-top: 7px;
    }
    .attention {
      display: block;
      width: 48px;
      height: 24px;
      line-height: 24px;
      font-size: 14px;
      border-radius: 11px;
      background: linear-gradient(
        150deg,
        rgba(242, 91, 134, 1) 0%,
        rgba(241, 172, 94, 1) 100%
      );
      box-shadow: 0px 4px 16px 0px rgba(0, 0, 0, 0.5);
      margin: 10px auto 11px;
    }
    .amount {
      font-size: 12px;
      margin-bottom: 27px;
    }
    .header-main {
      .synopsis {
        text-align: justify;
        font-size: 12px;
        line-height: 18px;
        .more {
          font-size: 14px;
          color: #fbc34a;
          &::after {
            content: "";
            display: inline-block;
            height: 11px;
            margin-top: 5px;
            width: 6px;
            margin-left: 3px;
            background: url("../../../assets/imgs/movie/right.png") no-repeat
              center;
            background-size: 100% 100%;
          }
        }
      }
    }
  }
}
.content {
  margin-bottom: 30px;
  .content-c {
    width: 335px;
    margin: 0 auto;
    .works {
      &:last-child {
        margin-top: 10px;
      }
      display: flex;
      align-items: center;
      .works-left {
        width: 100px;
        height: 140px;
      }
      .works-right {
        font-size: 14px;
        color: #ffffff;
        text-align: left;
        margin-left: 16px;
        .movie-name {
          font-size: 18px;
        }
        .movie {
          margin-top: 16px;
          &.score {
            span {
              color: #fbc34a;
            }
          }
        }
      }
    }
  }
}
.footer {
  padding-bottom: 10px;
  .footer-c {
    width: 335px;
    margin: 0 auto;
    .actor-img {
      display: flex;
      width: 100%;
      height: 229px;
      img {
        width: 138px;
        height: 229px;
      }
      .img-left {
        width: 192px;
        margin-right: 5px;
        img {
          width: 100%;
          height: 100px;
        }
        .img-bottom {
          width: 100%;
          margin-top: 5px;
          display: flex;
          img {
            width: 94px;
            height: 122px;
            &:first-child {
              margin-right: 4px;
            }
          }
        }
      }
    }
  }
}
.title {
  text-align: left;
  font-size: 16px;
  color: #ffffff;
  margin-bottom: 10px;
}
</style>