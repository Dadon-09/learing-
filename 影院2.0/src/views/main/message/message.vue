<template>
  <div class="main-message">
    <mainheader title="消息中心" page="/main"></mainheader>
    <!-- 系统通知 -->
    <div class="functionbar">
      <div class="icon" style="background:rgba(249,195,74,1);">
        <img src="../../../assets/imgs/mine/message/notice.png" alt />
      </div>
      <div class="content">
        <div class="text">
          <div class="up">系统通知</div>
          <div class="down">哈皮巴斯得！祝你生日快乐！</div>
        </div>
        <div class="time">1个月前</div>
      </div>
    </div>
    <!-- 赞 -->
    <div class="functionbar">
      <div class="icon" style="background:rgba(239,136,51,1);">
        <img src="../../../assets/imgs/mine/message/zan.png" alt />
      </div>
      <div class="content">
        <div class="text">
          <div class="up">赞</div>
          <div class="down">一个赞都不给我！</div>
        </div>
        <div class="time">1个月前</div>
      </div>
    </div>
    <!-- 评论 -->
    <div class="functionbar">
      <div class="icon" style="background:rgba(101,72,169,1);">
        <img src="../../../assets/imgs/mine/message/pl.png" alt />
      </div>
      <div class="content">
        <div class="text">
          <div class="up">暂时没有收到评论</div>
          <div class="down">暂时还没有收到评论</div>
        </div>
        <div class="time">1个月前</div>
      </div>
    </div>
    <!-- 全部私信 -->
    <h2>全部私信</h2>
    <!-- 私信列表 -->
    <div class="functionbar msglist" v-for="item in messagearr" :key="item.id" @click="details">
      <div class="icon">
        <img :src="item.avater" alt />
      </div>
      <div class="content">
        <div class="text">
          <div class="up">{{item.username}}</div>
          <div class="down" v-if="!item.isnoread">暂时还没有收到评论</div>
          <div class="down" v-else>您有未读的消息!</div>
        </div>
        <div class="time">
          {{item.time}}
          <div class="tips" v-if="item.isnoread">{{item.noreadnum}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import mainheader from "@/components/main/header";
import mocks from "mockjs";
const mock = mocks.Random;
export default {
  name: "",
  data() {
    return {
      messagearr: [
        {
          id: mock.guid(),
          username: "Zeng Wen",
          avater: require("@/assets/imgs/mine/message/img1.png"),
          time: "1个月前",
          // 判断是否有未读,true 有消息 false 无消息
          isnoread: true,
          noreadnum: 5
        },
        {
          id: mock.guid(),
          username: "Chikelu Obasea",
          avater: require("@/assets/imgs/mine/message/img2.png"),
          time: "1个月前",
          // 判断是否有未读,true 有消息 false 无消息
          isnoread: true,
          noreadnum: 99
        },
        {
          id: mock.guid(),
          username: "Kimmy McIlmorie",
          avater: require("@/assets/imgs/mine/message/img3.png"),
          time: "1个月前",
          // 判断是否有未读,true 有消息 false 无消息
          isnoread: false,
          noreadnum: 5
        },
        {
          id: mock.guid(),
          username: "Xu Jianhong",
          avater: require("@/assets/imgs/mine/message/img4.png"),
          time: "1个月前",
          // 判断是否有未读,true 有消息 false 无消息
          isnoread: false,
          noreadnum: 5
        },
        {
          id: mock.guid(),
          username: "Kung Jiyeon",
          avater: require("@/assets/imgs/mine/message/img5.png"),
          time: "1个月前",
          // 判断是否有未读,true 有消息 false 无消息
          isnoread: false,
          noreadnum: 5
        }
      ]
    };
  },
  components: {
    mainheader
  },
  methods: {
    details() {
      this.$router.push("/details");
    }
  }
};
</script>

<style lang='scss' scoped>
@import "@/assets/css/common/common.scss";
.main-message {
  padding: 0 $basePadding;
  .functionbar {
    width: 100%;
    height: 55px;
    margin: 20px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .icon {
      width: 44px;
      height: 44px;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        width: 22px;
        height: 22px;
      }
    }
    .content {
      width: 270px;
      height: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .text {
        display: flex;
        flex-flow: column wrap;
        justify-content: space-around;
        .up {
          font-size: 16px;
          font-family: PingFangSC-Medium, PingFangSC;
          font-weight: 500;
          color: rgba(255, 255, 255, 1);
          line-height: 22px;
          text-align: left;
        }
        .down {
          font-size: 12px;
          font-family: PingFangSC-Regular, PingFangSC;
          font-weight: 400;
          color: rgba(255, 255, 255, 0.6);
          line-height: 17px;
          text-align: left;
        }
      }
      .time {
        font-size: 12px;
        font-family: PingFangSC-Regular, PingFangSC;
        font-weight: 400;
        color: rgba(255, 255, 255, 0.6);
        line-height: 17px;
      }
    }
    &.msglist {
      .icon {
        img {
          width: 100%;
          height: 100%;
        }
      }
      .content {
        .text {
          .up {
            font-size: 14px;
            color: #f9c34a;
          }
        }
        .time {
          position: relative;
        }
        .tips {
          position: absolute;
          left: -20px;
          top: 0;
          width: 16px;
          height: 16px;
          border-radius: 50%;
          background: rgba(249, 195, 74, 1);
          line-height: 16px;
          text-align: center;
          color: white;
        }
      }
    }
  }
  h2 {
    width: 100%;
    height: 25px;
    line-height: 25px;
    font-size: 20px;
    color: white;
    text-align: left;
    margin: 30px 0;
  }
}
</style>