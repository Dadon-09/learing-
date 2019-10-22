<template>
  <div style="height:100%">
    <div class="header">
      <div class="header-c wrap-c">
        <div class="city">
          <router-link tag="p" class="router-link" to="/locate">郑州</router-link>
          <span></span>
        </div>
        <div class="demo">
          <router-link class="coming" to="/movie/coming">正在热映</router-link>
          <router-link class="now" to="/movie/now">即将上映</router-link>
        </div>
        <router-link tag="div" to="/search" class="search">
          <i></i>
        </router-link>
      </div>
    </div>
    <div class="wrapper">
      <div class="content">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from "@better-scroll/core";
export default {
  data() {
    return {
      // scroll: null
    };
  },
  mounted() {
    let wrapper = document.querySelector(".wrapper");
    // let scroll = new BScroll(wrapper);
    this.scroll = new BScroll(".wrapper", {
      scrollY: true,
      click: true
    });
  }
};
</script>

<style lang="scss" scoped>
// @import "@/assets/css/movie/movie.scss";

.wrap-c {
  width: 335px;
  height: 100%;
  margin: 0 auto;
}

///// 头部
.header {
  width: 100%;
  height: 44px;
  margin-bottom: 12px;
  background-color: #33363d;
  color: #fff;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 999;

  .header-c {
    display: flex;

    justify-content: space-between;
    align-items: center;

    .city {
      display: flex;
      align-items: center;

      p {
        color: #dfdfdf;
        font-size: 14px;
        margin-right: 5px;
      }

      span {
        display: block;
        width: 12px;
        height: 6px;
        background: url("../../assets/imgs/home/arr-down.png") no-repeat center;
        background-size: cover;
        // margin-top: 5px;
      }
    }

    .demo {
      display: flex;
      width: 164px;
      height: 25px;
      line-height: 25px;
      border: 1px solid pink;
      border-radius: 6px;

      a {
        display: block;
        width: 50%;
        color: #969393;
        text-decoration: none;
        // border-radius: 6px;

        &.coming {
          border-radius: 5px 0 0px 5px;
        }

        &.now {
          border-radius: 0 5px 5px 0;
        }

        &.router-link-active {
          color: #fff;
          background: linear-gradient(
            150deg,
            rgba(242, 91, 134, 1) 0%,
            rgba(241, 172, 94, 1) 100%
          );
        }
      }
    }

    .search {
      i {
        display: block;
        width: 17px;
        height: 17px;
        background: url("../../assets/imgs/home/search.png") no-repeat center;
        background-size: cover;
      }
    }
  }
}
.wrapper {
  height: 100%;
  width: 100%;
  .content {
    padding-top: 50px;
    padding-bottom: 10px;
  }
}
</style>