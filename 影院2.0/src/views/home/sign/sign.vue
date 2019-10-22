<template>
  <div class="sign-main">
    <div class="bg">
      <div class="tips">
        <div class="tips-c">
          <div @click="goHome" class="cancel"></div>
          <div class="menu"></div>
        </div>
      </div>
    </div>
    <div class="content">
      <div class="content-c">
        <swiper :options="swiperOption" ref="mySwiper">
          <!-- slides -->
          <swiper-slide v-for="item in list" :key="item.id">
            <img :src="item.img" alt="" />
            <span>{{ item.text }}</span>
            <p>{{ item.title }}</p>
            <div class="bugle">
              <img src="../../../assets/imgs/home/bugle.png" alt="" />
              8s
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </div>
    <footer>
      <div class="footer-c">
        <ul class="icons">
          <li class="movie"></li>
          <li class="share"></li>
          <li class="like"></li>
          <li class="review"></li>
        </ul>
      </div>
    </footer>
  </div>
</template>

<script>
// 引入swiper
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";
// 模块化
import { mapState, mapMutations, mapActions, mapGetters } from "vuex";
export default {
  components: {
    swiper,
    swiperSlide
  },
  computed: {
    ...mapState({
      list: function(state) {
        return state.sign.list;
      }
    })
  },
  methods: {
    goHome() {
      this.$router.go(-1);
    }
  },
  data() {
    return {
      swiperOption: {
        direction: "vertical",
        followFinger: true,
        speed: 800,
        mousewheel: true,
        loop: true,
        on: {
          init: function(swiper) {
            var slide = this.slides.eq(0);
            slide.addClass("ani-slide");
          },
          transitionStart: function() {
            for (var i = 0; i < this.slides.length; i++) {
              var slide = this.slides.eq(i);
              slide.removeClass("ani-slide");
            }
          },
          transitionEnd: function() {
            var slide = this.slides.eq(this.activeIndex);
            slide.addClass("ani-slide");
          }
        }
      }
    };
  }
};
</script>


<style lang="scss" scoped>
.sign-main {
  position: relative;

  .bg {
    overflow: hidden;
    width: 100%;
    height: 180px;
    border-radius: 50px;
    background: linear-gradient(
      130deg,
      rgba(242, 94, 132, 1) 0%,
      rgba(241, 165, 98, 1) 100%
    );

    .tips {
      width: 100%;
      height: 16px;
      margin-top: 25px;

      .tips-c {
        display: flex;
        justify-content: space-between;
        width: 335px;
        height: 100%;
        margin: 0 auto;

        .cancel {
          width: 16px;
          height: 16px;
          background: url("../../../assets/imgs/home/cancel.png") no-repeat
            center;
        }

        .menu {
          width: 21px;
          height: 16px;
          background: url("../../../assets/imgs/home/menu.png") no-repeat center;
        }
      }
    }
  }

  .content {
    position: absolute;
    left: 0;
    top: 80px;
    width: 100%;
    height: 450px;

    .content-c {
      width: 335px;
      height: 100%;
      margin: 0 auto;

      img {
        position: relative;
        width: 100%;
        height: 450px;
      }

      span {
        position: absolute;
        top: 320px;
        left: 10px;
        width: 227px;
        font-size: 18px;
        line-height: 25px;
        color: gray;
        z-index: 10;
      }

      p {
        position: absolute;
        top: 400px;
        left: 10px;
        font-size: 14px;
        color: gray;
        z-index: 10;
      }

      .bugle {
        display: flex;
        justify-content: space-around;
        align-items: center;
        position: absolute;
        top: 380px;
        right: 20px;
        width: 73px;
        height: 30px;
        border-radius: 11px;
        color: #fff;
        background: linear-gradient(
          150deg,
          rgba(242, 91, 134, 1) 0%,
          rgba(241, 172, 94, 1) 100%
        );

        img {
          width: 14px;
          height: 18px;
        }
      }
    }
  }

  footer {
    position: fixed;
    bottom: 79px;
    width: 100%;
    height: 38px;

    .footer-c {
      width: 335px;
      height: 100%;
      margin: 0 auto;

      .icons {
        margin-left: 62px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        width: 230px;
        // height: 38px;

        .movie {
          width: 21px;
          height: 21px;
          background: url("../../../assets/imgs/home/movie-sign.png") no-repeat
            center;
          background-size: cover;
        }

        .share {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          background-color: #33363d;
          background: url("../../../assets/imgs/home/share.png") no-repeat
            center;
          background-size: 19px 19px;
        }

        .like {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          background-color: #33363d;
          background: url("../../../assets/imgs/home/like.png") no-repeat center;
          background-size: 21px 21px;
        }

        .review {
          width: 21px;
          height: 21px;
          background: url("../../../assets/imgs/home/review .png") no-repeat
            center;
          background-size: cover;
        }
      }
    }
  }
}
</style>