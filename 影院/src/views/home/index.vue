<template>
  <div>
    <div class="header">
      <div class="header-c wrap-c">
        <div class="city">
          <p>郑州</p>
          <span></span>
        </div>
        <div class="search">
          <i></i>
          <input type="text" placeholder="搜影片,影院,影人" />
          <span></span>
        </div>
      </div>
    </div>
    <div class="content">
      <div class="banner">
        <swiper :options="swiperBanner" ref="mySwiper">
          <!-- slides -->
          <swiper-slide v-for="item in bannerImg" :key="item.id">
            <img :src="item.img" alt="" />
          </swiper-slide>
          <!-- Optional controls -->
        </swiper>
        <div class="swiper-pagination" slot="pagination"></div>
      </div>
      <div class="hotFilm">
        <titleT title="热映影片" text="全部"></titleT>
        <swiper :options="swiperhotFilm" ref="mySwiper">
          <!-- slides -->
          <swiper-slide v-for="item in list" :key="item.id">
            <img :src="item.img" alt="" />
            <p>{{ item.text }}</p>
            <span>购票</span>
          </swiper-slide>
          <!-- Optional controls -->
        </swiper>
      </div>
      <div class="coming">
        <titleT title="即将上映" text="全部"></titleT>
        <swiper :options="swiperComing" ref="mySwiper">
          <!-- slides -->
          <swiper-slide v-for="item in list" :key="item.id">
            <img :src="item.img" alt="" />
            <p>{{ item.text }}</p>
            <span>{{ item.date }}</span>
          </swiper-slide>
          <!-- Optional controls -->
        </swiper>
      </div>
      <div class="notice">
        <titleT title="即将上映" text="全部"></titleT>
        <swiper :options="swiperNotice" ref="mySwiper">
          <!-- slides -->
          <swiper-slide v-for="item in list" :key="item.id">
            <img :src="item.img" alt="" />
            <p>{{ item.noticeText }}</p>
          </swiper-slide>
          <!-- Optional controls -->
        </swiper>
      </div>
    </div>
    <div class="footer"></div>
  </div>
</template>

<script>
// 引入title组件
import titleT from "../../components/title/index.vue";
// 引入mock
import Mock from "mockjs";
const Random = Mock.Random;
// 引入swiper
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";
// 模块化 辅助函数
import { mapState, mapMutations, mapActions, mapGetters } from "vuex";
export default {
  methods: {
    get() {}
  },
  computed: {
    ...mapState({
      list: function(state) {
        console.log(state);
        return state.home.list;
      }
    })
  },
  created() {
    // this.list;
    console.log(this.$store);
  },
  data() {
    return {
      // banner图片
      bannerImg: [
        {
          img: require("@/assets/imgs/home/banner1.jpg"),
          id: Random.id()
        },
        {
          img: require("@/assets/imgs/home/banner2.jpg"),
          id: Random.id()
        },
        {
          img: require("@/assets/imgs/home/banner3.jpg"),
          id: Random.id()
        }
      ],
      //////////////////////////// banner轮播配置
      swiperBanner: {
        slidesPerView: "1.2",
        centeredSlides: true,
        spaceBetween: 15,
        loop: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        }
      },
      ///////////////////////// swiperhotFilm轮播配置
      swiperhotFilm: {
        slidesPerView: "3.5",
        spaceBetween: 15,
        slidesOffsetBefore: 20,
        slidesOffsetAfter: 20
      },
      /////////////////// swiperComing轮播配置
      swiperComing: {
        slidesPerView: "2.85",
        spaceBetween: 15,
        slidesOffsetBefore: 20,
        slidesOffsetAfter: 20
      },
      ////////////////////////swiperNotice轮播配置
      swiperNotice: {
        slidesPerView: "1.26",
        spaceBetween: 15,
        slidesOffsetBefore: 20,
        slidesOffsetAfter: 20
      }
    };
  },
  components: {
    swiper,
    swiperSlide,
    titleT
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/home/home.scss";
@import "@/assets/css/common/common.scss";
</style>