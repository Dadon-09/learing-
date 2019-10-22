<template>
  <div>
    <div class="banner">
      <div class="header">
        <img src="@/assets/imgs/icons/arr-left.png" class="header-img" @click="goto" alt />
        <p>电影评分</p>
        <img src="@/assets/imgs/icons/share.png" class="header-imgtwo" alt />
      </div>
      <div class="titles">
        <p class="titbox">{{lists.name}}</p>
        <div class="title-img">
          <span class="score">
            <img src="@/assets/imgs/movie/star_full.png" alt />
            <img src="@/assets/imgs/movie/star_full.png" alt />
            <img src="@/assets/imgs/movie/star_full.png" alt />
            <img src="@/assets/imgs/movie/star_full.png" alt />
            <img src="@/assets/imgs/movie/star_full.png" alt />
            {{lists.score}}
            <span style="font-size: 16px;">分</span>
          </span>
          <h4>{{lists.evaluate}}</h4>
          <div class="module">
            <div v-for="(item, index) in lists.module" :key="index">
              <div class="module-box">
                <span class="modulebar">{{item}}%</span>
                <div class="module-boxs" :style="`height:${Math.floor(item*240/100)}px`"></div>
                <span style="color:rgba(255, 255, 255, .5);">9-10分</span>
              </div>
            </div>
          </div>
        </div>
        <h6 class="titleh">以上数据,实时更新</h6>
      </div>
    </div>
    <div class="footer">
      <p class="footer-p">观众评分画像</p>
      <div class="people">
        <div class="man">
          <img src="../../../assets/imgs/movie/man.png" alt />
          <span>&nbsp;男性观众</span>
          <span style="color:rgba(251, 195, 74, 1)">&nbsp;{{manList.man}}分</span>
        </div>
        <div class="woman">
          <img src="../../../assets/imgs/movie/woman.png" alt />
          <span>&nbsp;女性观众</span>
          <span style="color:rgba(251, 195, 74, 1)">&nbsp;{{manList.woman}}分</span>
        </div>
      </div>
      <div class="footerbox">
        <div v-for="(item, index) in manList.sets" :key="index">
          <div class="footerboxtwo">
            <span style="color:rgba(255, 255, 255, .7)">{{item.text}}</span>
            <div class="footerwidth" :style="`width:${item.width}px`"></div>
            <span style="color:rgba(251, 195, 74, 1)">{{item.seto}}分</span>
          </div>
        </div>
      </div>
      <h6>以上数据, 每30分钟更新一次</h6>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      lists: {
        name: "《傲慢与偏见》",
        score: "9.0",
        evaluate: "28.5万人评分",
        module: ["56.4", "29.4", "12.3", "1.1", "0.8"]
      },
      manList: {
        man: "8.4",
        woman: "8.6",
        sets: [
          { seto: "8.7", width: 135, text: "95后" },
          { seto: "8.4", width: 126, text: "90后" },
          { seto: "8.2", width: 110, text: "80后" },
          { seto: "8.5 ", width: 117, text: "70后" }
        ]
      }
    };
  },
  methods: {
    goto() {
      this.$roter.go(-1);
    }
  }
};
</script>
<style lang="scss" scoped>
div {
  color: rgba(255, 255, 255, 1);
  font-size: 16px;
}
.banner {
  position: relative;
  background: url(../../../assets/imgs/movie/detail-bg.png) no-repeat top left;
  background-size: cover;
  &::before {
    content: " ";
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 99;
    background-color: rgba(5, 5, 5, 0.5);
  }
  .header {
    display: flex;
    position: relative;
    z-index: 99;
    height: 50px;
    margin-top: 20px;
    justify-content: space-around;
    align-items: center;
    p {
      width: 55%;
    }
    .header-img {
      width: 19px;
      height: 15px;
    }
    .header-imgtwo {
      width: 19px;
    }
  }
  .titles {
    position: relative;
    z-index: 99;
    p.titbox {
      margin-top: 25px;
      font-size: 18px;
    }
    span.score {
      font-size: 22px;
      line-height: 40px;
      color: rgba(251, 195, 74, 1);
      img {
        width: 8px;
        position: relative;
        left: 2px;
        margin-right: 4.5px;
        top: -4.5px;
      }
    }
    h4 {
      font-size: 14px;
    }
    .titleh {
      font-size: 12px;
      line-height: 40px;
      color: rgba(255, 255, 255, 0.5);
      margin-bottom: 10px;
    }
    .module {
      display: flex;
      width: 80%;
      margin: 0 auto;
      height: 238px;
      justify-content: space-around;
      align-items: flex-end;
      .module-box {
        font-size: 12px;
        .modulebar {
          color: rgba(251, 195, 74, 1);
        }
        .module-boxs {
          width: 23px;
          margin: 0 auto;
          border-radius: 5px;
          background: linear-gradient(
            150deg,
            rgba(241, 162, 99, 1) 0%,
            rgba(242, 94, 132, 1) 100%
          );
        }
      }
    }
  }
}
.footer {
  background-color: rgba(0, 0, 0, 1);
  .footer-p {
    line-height: 50px;
  }
  .people {
    display: flex;
    justify-content: space-around;
    div {
      font-size: 14px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 5px;
      width: 138px;
      height: 36px;
      background-color: rgba(51, 54, 61, 1);
    }
  }
  .footerbox {
    font-size: 14px;
    display: flex;
    flex-wrap: wrap;
    // margin-bottom: 100px;
    .footerboxtwo {
      display: flex;
      margin-left: 35px;
      line-height: 40px;
      align-items: center;
      width: 375px;
      .footerwidth {
        margin: 0 10px;
        background: linear-gradient(
          10deg,
          rgba(241, 162, 99, 1) 0%,
          rgba(242, 94, 132, 1) 100%
        );
        height: 12px;
        border-radius: 5px;
      }
    }
  }
  h6 {
    width: 165px;
    height: 17px;
    font-size: 12px;
    margin: 0 auto;
    font-weight: 400;
    color: rgba(255, 255, 255, 0.8);
    line-height: 17px;
    padding-bottom: 100px;
  }
}
</style>