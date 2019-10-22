<template>
  <div class="main-details">
    <mainheader title="Zeng Wen" page="/message">
      <template v-slot:image>
        <img src="@/assets/imgs/mine/message/img1.png" alt />
      </template>
      <template v-slot:right>
        <img src="@/assets/imgs/mine/message/more.png" alt />
      </template>
    </mainheader>
    <div class="wrapper">
      <ul class="content">
        <li class="detail" v-for="(item,index) in detaillist" :key="index">
          <p :class="item.isleft ? 'left' : 'right'">{{item.text}}</p>
        </li>
      </ul>

      <!-- 这里可以放一些其它的 DOM，但不会影响滚动 -->
    </div>

    <!-- 输入区域 -->
    <div class="entry">
      <div class="leftipt">
        <input type="text" v-model="lefttext" placeholder="输入内容显示在左侧" />
        <div class="btn" @click="makesureleft">左确认</div>
      </div>
      <br />
      <div class="rightipt">
        <input type="text" v-model="righttext" placeholder="输入内容显示在右侧" />
        <div class="btn" @click="makesureright">右确认</div>
      </div>
    </div>
  </div>
</template>

<script>
import mainheader from "@/components/main/header";
import BScroll from "@better-scroll/core";
export default {
  name: "",
  data() {
    return {
      btscroll: "",
      lefttext: "",
      righttext: "",
      detaillist: [
        {
          text: "你asdasdasdasdasdas dasdasd asdasd sad as das dasd as好",
          isleft: true
        },
        {
          text: "你好你好你好你好你好你好你好你好123123123123123123123",
          isleft: false
        },
        {
          text: "你好",
          isleft: false
        },
        {
          text: "你好",
          isleft: false
        },

        //
        {
          text: "你好",
          isleft: false
        },
        {
          text: "你好",
          isleft: false
        },
        {
          text: "你好",
          isleft: false
        },
        {
          text: "你好",
          isleft: false
        },
        {
          text: "你好",
          isleft: false
        },
        {
          text: "你好",
          isleft: true
        },
        {
          text: "你好",
          isleft: true
        }
      ]
    };
  },
  methods: {
    makesureleft() {
      var obj = {
        text: this.lefttext,
        isleft: true
      };
      this.detaillist.push(obj);
      // 重置better-scroll
      // 在dom渲染完成后执行
      this.$nextTick(() => {
        let lastlis = document.querySelectorAll(".detail");
        let lastli = lastlis[lastlis.length - 1];
        this.btscroll.refresh();
        this.btscroll.scrollToElement(lastli, 400, true, true);
      });
    },
    makesureright() {
      var obj = {
        text: this.righttext,
        isleft: false
      };
      this.detaillist.push(obj);
      // 重置better-scroll
      // 在dom渲染完成后执行
      this.$nextTick(() => {
        let lastlis = document.querySelectorAll(".detail");
        let lastli = lastlis[lastlis.length - 1];
        this.btscroll.refresh();
        this.btscroll.scrollToElement(lastli, 400, true, true);
      });
    }
  },
  components: {
    mainheader
  },
  mounted() {
    let wrapper = document.querySelector(".wrapper");
    let scroll = new BScroll(wrapper, {
      startY: 1000
    });
    this.btscroll = scroll;
  }
};
</script>

<style lang='scss' scoped>
@import "@/assets/css/common/common.scss";
.main-details {
  height: 100%;
  padding: 0 $basePadding;
  font-size: 16px;
  color: white;
  .wrapper {
    width: 100%;
    height: 83%;
    overflow: hidden;
    .content {
      width: 100%;
      display: flex;
      flex-direction: column;
      .detail {
        width: 100%;
        height: auto;

        .left {
          position: relative;
          float: left;
          max-width: 200px;
          width: auto;
          height: auto;
          text-align: left;
          margin-bottom: 20px;
          margin-left: 20px;
          padding: 10px;
          overflow-wrap: break-word;
          line-height: 16px;
          background: rgba(51, 54, 61, 1);
          border-radius: 6px;
          &:after {
            position: absolute;
            left: -15px;
            bottom: 0;
            content: "";
            width: 20px;
            height: 20px;
            box-sizing: border-box;
            border: 10px solid rgba(51, 54, 61, 1);
            border-color: transparent rgba(51, 54, 61, 1) rgba(51, 54, 61, 1)
              transparent;
          }
        }
        .right {
          position: relative;
          float: right;
          max-width: 200px;
          margin-right: 20px;
          margin-bottom: 20px;
          padding: 10px;
          text-align: left;
          overflow-wrap: break-word;
          line-height: 16px;
          background: rgba(249, 195, 74, 1);
          border-radius: 6px;
          &:after {
            position: absolute;
            right: -15px;
            bottom: 0;
            content: "";
            width: 20px;
            height: 20px;
            box-sizing: border-box;
            border: 10px solid rgba(249, 195, 74, 1);
            border-color: transparent transparent rgba(249, 195, 74, 1)
              rgba(249, 195, 74, 1);
          }
        }
      }
    }
  }
  .entry {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 80px;
    z-index: 999;
  }
  .leftipt {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    color: white;
    input {
      width: 250px;
      height: 30px;
      font-size: 16px;
    }
    .btn {
      width: 60px;
      height: 30px;
      line-height: 30px;
      background: linear-gradient(
        135deg,
        rgba(241, 100, 129, 1) 0%,
        rgba(241, 144, 108, 1) 100%
      );
    }
  }
  .rightipt {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    color: white;
    input {
      width: 250px;
      height: 30px;
      font-size: 16px;
    }
    .btn {
      width: 60px;
      height: 30px;
      line-height: 30px;
      background: linear-gradient(
        135deg,
        rgba(241, 100, 129, 1) 0%,
        rgba(241, 144, 108, 1) 100%
      );
    }
  }
}
</style>