<template>
  <div class="mains">
    <div class="headers">
      <p class="title">热门预告片</p>
      <div class="box">
        <swiper :options="swiperOption" ref="mySwiper">
          <!-- slides -->
          <swiper-slide v-for="(item, index) in list" :key="index">
            <img :src="item.imgsrc" alt />
          </swiper-slide>
        </swiper>
      </div>
    </div>
    <div class="column">
      <p class="title">即将上映</p>
      <div class="columns">
        <div v-for="(item, index) in setlist" :key="index">
          <span
            :class="`${index ==0 ?'active' : '' } `"
            @click="getMethod(item.id,$event)"
          >{{item.text}}</span>
        </div>
      </div>
    </div>
    <div class="footer">
      <!-- {{oldlist}} -->
      <div class="container">
        <div class="containerimg">
          <img :src="oldlist.imgsrc" @click="gotomoviedetails(oldlist.id)" alt />
        </div>
        <div class="containerbox">
          <div class="title">{{oldlist.movieName}}</div>
          <div class="score" v-if="oldlist.score">
            萤火虫评分
            <span>{{oldlist.score}}</span>
          </div>
          <div v-if="oldlist.number" class="number">
            <span style="color:#fbc34a;">{{oldlist.number}}万</span>人想看
          </div>
          <div class="oneoline">导演:{{oldlist.director}}</div>
          <div class="oneoline" v-if="oldlist.starring">主演:{{oldlist.starring}}</div>
          <div class="today" v-if="oldlist.spot">
            <span
              v-for="(items, index) in oldlist.spot"
              :key="index"
              :style="`color:${items.color}`"
            >{{items.text}}</span>
          </div>
          <div
            :class="`buy ${oldlist.mode=='购买'?'shop':'noshop'}`"
            @click="gotocinema"
          >{{oldlist.mode}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  data() {
    return {
      setlist: [
        {
          id: 1111,
          text: "2月2日"
        },
        {
          id: 2222,
          text: "2月3日"
        },
        {
          id: 3333,
          text: "2月4日"
        },
        {
          id: 4444,
          text: "2月5日"
        }
      ],
      newlist: {},
      swiperOption: {
        // some swiper options/callbacks
        // 所有的参数同 swiper 官方 api 参数
        loop: true,
        autoplay: true,
        slidesPerView: "auto",
        spaceBetween: 30,
        slidesOffsetAfter: 20,
        slidesOffsetBefore: 20
      },
      scroll: null
    };
  },
  components: {
    swiper,
    swiperSlide
  },
  methods: {
    getMethod(n, e) {
      document.querySelector(".active").classList.remove("active");
      e.target.classList.add("active");
      this.$store.commit("mine/getsonlist", n);
    },
    gotocinema() {
      this.$router.push("/cinema");
    },
    gotomoviedetails(isid) {
      this.$router.push({
        path: "/moviedetails",
        query: {
          id: isid
        }
      });
    }
  },
  computed: {
    list() {
      return this.$store.state.mine.hotlist;
    },
    oldlist() {
      return this.$store.state.mine.oldlist;
    }
  },
  mounted() {
    this.$nextTick(() => {
      // console.log(this.$parent.scroll);
      this.scroll = this.$parent.scroll;
      console.log(this.scroll);
      this.scroll.refresh();
    });
  },
  watch: {}
};
</script>
<style lang="scss" scoped>
.mains {
  color: rgba(223, 223, 223, 1);
  margin-bottom: 150px;
  p {
    font-size: 18px;
    color: rgba(223, 223, 223, 1);
    text-align: left;
    margin-top: 20px;
    margin-left: 20px;
  }
  //swiper的样式
  .box {
    margin-top: 20px;
    .swiper-slide {
      border-radius: 10px;
      height: 185px;
      text-align: center;
      font-size: 18px;
      background: #fff;
      width: 80%;
      img {
        width: 300px;
        height: 185px;
      }
    }
  }
  .column {
    .columns {
      display: flex;
      margin-top: 10px;
      justify-content: space-around;
      span {
        display: inline-block;
        transition: all ease 0.4s;
        width: 50px;
        height: 25px;
        line-height: 25px;
        border: 2px solid gray;
        border-radius: 5px;
        &.active {
          border: none;
          width: 52px;
          line-height: 28px;
          height: 27px;
          background: linear-gradient(
            150deg,
            rgba(242, 91, 134, 1) 0%,
            rgba(241, 172, 94, 1) 100%
          );
        }
      }
    }
  }

  .main {
    margin-bottom: 150px;
  }

  .container {
    width: 335px;
    margin: 10px auto;
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;

    img {
      border-radius: 8px;
      width: 105px !important;
      height: 155px;
    }

    .containerbox {
      border-radius: 8px;
      border-top-left-radius: 0px;
      border-bottom-left-radius: 2px;
      width: 230px;
      height: 146px;
      background-color: rgba(51, 54, 61, 1);
      text-align: left;
      padding-left: 8px;

      .title {
        font-size: 16px;
        font-weight: 500;
        line-height: 50px;
      }

      .score {
        font-size: 14px;
        margin-bottom: 10px;
        color: rgba(247, 239, 239, 0.9);

        span {
          color: #fbc34a;
        }
      }

      .number {
        margin-bottom: 10px;
        font-size: 15px;
      }

      .oneoline {
        font-size: 12px;
        color: rgba(255, 255, 255, 0.7);
        line-height: 15px;
      }

      .today {
        span {
          display: inline-block;
          width: 48px;
          border-radius: 5px;
          margin-top: 2 px;
          margin-right: 5px;
          text-align: center;
          border: 1px solid;
          line-height: 18px;
          height: 18px;
        }
      }

      .buy {
        position: absolute;
        right: 20px;
        top: 50%;
        width: 55px;
        border-radius: 5px;
        line-height: 26px;
        text-align: center;
        height: 25px;
      }

      .buy.shop {
        background: linear-gradient(
          150deg,
          rgba(242, 91, 134, 1) 0%,
          rgba(241, 172, 94, 1) 100%
        );
      }

      .buy.noshop {
        background: linear-gradient(
          150deg,
          rgba(98, 75, 163, 1) 0%,
          rgba(203, 68, 152, 1) 100%
        );
      }
    }
  }
}
</style>