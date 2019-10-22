<template>
  <div id="app">
    <!-- 返回首页按钮 -->
    <router-link to="/" tag="div" class="back"></router-link>

    <!-- logo -->
    <div class="logo"></div>

    <!-- 手机号输入框 -->
    <div class="phone">
      <div class="iocn-ph"></div>
      <input type="number" v-model="phones" placeholder="请输入手机号" />
    </div>
    <!-- 密码输入框 -->
    <div class="paw">
      <div class="iocn-pa"></div>
      <input type="password" v-model="passw" placeholder="请输入密码" />
    </div>
    <!-- 登陆按钮 -->
    <div class="btn" @click="btns">登陆</div>
    <!-- 注册按钮 忘记密码 -->
    <div class="links">
      <div class="enrol">注册账号</div>
      <div class="forget">忘记密码</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      phones: "",
      passw: ""
    };
  },
  methods: {
    // 点击按钮 数据存取本地 并跳转到 个人页
    btns() {
      if (this.phones == "" || this.passw == "") {
        alert("请输入正确的账号或密码");
      } else {
        localStorage.setItem("手机号", this.phones);
        localStorage.setItem("密码", this.passw);
        this.$router.push("/main");
      }
    }
  }
};
</script>

<style lang="scss" scoped>
#app {
  position: relative;
  background-color: #23262d;

  .back {
    width: 14px;
    height: 26px;
    margin: 20px 0 0 24px;
    background-image: url("../../../assets/imgs/mine/login/back.png");
    background-size: 50% 50%;
    background-position: center;
    background-repeat: no-repeat;
  }

  .logo {
    position: absolute;
    left: 136px;
    top: 87px;
    width: 103px;
    height: 92px;
    background-image: url("../../../assets/imgs/mine/login/logo.png");
    background-size: 100% 100%;
  }

  .phone {
    position: absolute;
    left: 61px;
    top: 222px;
    width: 254px;
    height: 40px;
    background: rgba(51, 54, 61, 1);
    box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.2);
    border-radius: 11px;

    .iocn-ph {
      position: absolute;
      left: 27px;
      top: 11px;
      width: 14px;
      height: 19px;
      background-image: url("../../../assets/imgs/mine/login/iPhone.png");
      background-size: 100% 100%;
      background-position: center;
    }

    input {
      width: 150px;
      height: 18px;
      margin: 11px 109px 11px 49px;
      font-size: 18px;
      color: #fff;
      border: none;
      outline: none;
      background: rgba(51, 54, 61, 1);
    }
  }

  .paw {
    position: absolute;
    left: 61px;
    top: 282px;
    width: 254px;
    height: 40px;
    background: rgba(51, 54, 61, 1);
    box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.2);
    border-radius: 11px;

    .iocn-pa {
      position: absolute;
      left: 27px;
      top: 11px;
      width: 14px;
      height: 19px;
      background-image: url("../../../assets/imgs/mine/login/passwrod.png");
      background-size: 100% 100%;
      background-position: center;
    }

    input {
      width: 150px;
      height: 18px;
      margin: 11px 109px 11px 49px;
      font-size: 18px;
      color: #fff;
      border: none;
      outline: none;
      background: rgba(51, 54, 61, 1);
    }
  }

  .btn {
    position: absolute;
    left: 61px;
    top: 350px;
    width: 254px;
    height: 40px;
    background: linear-gradient(
      150deg,
      rgba(242, 91, 134, 1) 0%,
      rgba(241, 172, 94, 1) 100%
    );
    box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.57);
    border-radius: 11px;
    font-size: 20px;
    font-weight: 400;
    line-height: 40px;
    color: rgba(255, 255, 255, 1);
  }

  .links {
    display: flex;
    justify-content: space-between;
    width: 254px;
    height: 28px;
    margin: 380px 0 0 60px;
    color: #929397;
  }
}
</style>