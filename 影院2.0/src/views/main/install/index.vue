<template>
  <div id="app">
    <!-- 顶部 -->
    <div class="top">
      <router-link to="/main" tag="div" class="back"></router-link>
      <div class="title">设置</div>
    </div>
    <!-- 头像部分 -->
    <div class="header">
      <div class="headImg"></div>
      <div class="userName">YH.Dai116</div>
    </div>
    <div class="phone">
      <div class="number">账号与安全</div>
      <div class="phone-text">
        手机绑定与更换
      </div>
      <div class="icon"></div>
    </div>
    <!-- 分割线 -->
    <div class="hr"></div>
    <!-- switch开关 -->
    <div class="more">
      <div class="good" v-for="item in list" :key="item.id">
        <p>{{ item.titles }}</p>
        <div class="switch-big">
          <input class="switch switch-anim" type="checkbox" checked />
        </div>
      </div>
    </div>
    <div class="hr"></div>
    <!-- 关于 -->
    <div class="about">
      <p>关于</p>
      <div class="about-icon"></div>
    </div>
    <div class="login-back">
      <p @click="backgo">退出登陆</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        { titles: "被赞提醒", id: 1 },
        { titles: "影评/话题提醒", id: 2 },
        { titles: "消息设置", id: 3 },
        { titles: "系统通知", id: 4 }
      ]
    };
  },
  methods: {
    backgo() {
      localStorage.clear("手机号");
      localStorage.clear("密码");
      this.$router.push("/login");
    }
  }
};
</script>

<style lang="scss" scoped>
#app {
  .top {
    display: flex;
    justify-content: space-between;
    width: 185px;
    height: 22px;
    margin: 10px 0 0 20px;

    .back {
      width: 13px;
      height: 19px;
      background: url("../../../assets/imgs/mine/back.png") no-repeat center;
      background-size: 100% 100%;
    }

    .title {
      width: 32px;
      height: 100%;
      font-size: 16px;
      font-weight: 500;
      color: #fff;
    }
  }

  .header {
    display: flex;
    flex-wrap: wrap;
    width: 73px;
    height: 105px;
    margin: 35px auto;

    .headImg {
      width: 73px;
      height: 73px;
      background: url("../../../assets/imgs/mine/message/img3.png") no-repeat
        center;
      background-size: 100% 100%;
    }

    .userName {
      width: 68px;
      height: 22px;
      font-size: 16px;
      font-weight: 500;
      color: #fff;
      line-height: 22px;
    }
  }

  .phone {
    display: flex;
    justify-content: space-between;
    margin: 48px 0 0 20px;
    width: 318px;
    height: 20px;
    font-size: 14px;
    font-weight: 400;

    .number {
      width: 70px;
      height: 100%;
      color: #fff;
    }

    .phone-text {
      width: 98px;
      height: 20px;
      margin-left: 140px;
      color: #63656a;
    }

    .icon {
      width: 6px;
      height: 11px;
      margin-top: 1px;
      background: url("../../../assets/imgs/icons/arr-right.png") no-repeat
        center;
      background-size: 100% 100%;
    }
  }

  .hr {
    width: 100%;
    height: 6px;
    margin-top: 10px;
    background-color: #33363d;
  }

  .more {
    width: 100%;
    height: 145px;
    font-size: 14px;
    font-weight: 400;
    color: #fff;

    .good {
      display: flex;
      justify-content: space-between;
      margin: 10px 20px;
      width: 335px;
      height: 26px;

      p {
        margin: 10px 0;
        height: 26px;
        line-height: 26px;
        font-size: 14px;
        font-weight: 400;
        color: #fff;
      }

      .switch-big {
        margin: 10px 0;
        width: 43px;
        height: 26px;

        .switch {
          width: 100%;
          height: 100%;
          position: relative;
          border: 1px solid #dfdfdf;
          background-color: #fdfdfd;
          box-shadow: #dfdfdf 0 0 0 0 inset;
          border-radius: 20px;
          background-clip: content-box;
          display: inline-block;
          -webkit-appearance: none;
          user-select: none;
          outline: none;
        }

        .switch:before {
          content: "";
          width: 25px;
          height: 25px;
          position: absolute;
          top: 0;
          left: 0;
          border-radius: 20px;
          background-color: #fff;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);
        }

        .switch:checked {
          border-color: #f2707c;
          box-shadow: #f2707c 0 0 0 16px inset;
          background-color: #f2707c;
        }

        .switch:checked:before {
          left: 16px;
        }

        .switch.switch-anim {
          transition: border cubic-bezier(0, 0, 0, 1) 0.4s,
            box-shadow cubic-bezier(0, 0, 0, 1) 0.4s;
        }

        .switch.switch-anim:before {
          transition: left 0.3s;
        }

        .switch.switch-anim:checked {
          box-shadow: #f2707c 0 0 0 16px inset;
          background-color: #f2707c;
          transition: border ease 0.4s, box-shadow ease 0.4s,
            background-color ease 1.2s;
        }

        .switch.switch-anim:checked:before {
          transition: left 0.3s;
        }
      }
    }
  }

  .about {
    display: flex;
    justify-content: space-between;
    margin: 10px 20px;
    width: 335px;
    height: 26px;

    p {
      margin: 10px 0;
      height: 26px;
      line-height: 26px;
      font-size: 14px;
      font-weight: 400;
      color: #fff;
    }

    .about-icon {
      margin-top: 20px;
      width: 6px;
      height: 11px;
      background: url("../../../assets/imgs/icons/arr-right.png") no-repeat
        center;
      background-size: 100% 100%;
    }
  }

  .login-back {
    width: 335px;
    height: 40px;
    margin: 30px 20px;
    background: linear-gradient(
      150deg,
      rgba(242, 91, 134, 1) 0%,
      rgba(241, 172, 94, 1) 100%
    );
    box-shadow: 0px 0px 4px 1px rgba(242, 109, 125, 0.18);
    border-radius: 6px;

    p {
      width: 335px;
      height: 40px;
      text-align: center;
      line-height: 40px !important;
      font-size: 18px;
      font-weight: 500;
      color: #fff;
      line-height: 25px;
    }
  }
}
</style>