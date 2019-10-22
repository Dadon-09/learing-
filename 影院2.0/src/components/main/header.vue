<template>
  <div class="header">
    <!-- 返回到我的页面 -->
    <router-link :to="page" tag="div" class="left"></router-link>
    <span class="header-title">
      <slot name="image"></slot>
      <span>{{title}}</span>
    </span>
    <slot name="right"></slot>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {};
  },
  props: {
    title: String,
    url: String,
    page: String
  }
};
</script>

<style lang='scss' scoped>
.header {
  display: flex;
  align-items: center;
  height: 50px;
  justify-content: space-between;
  .left {
    width: 18px;
    height: 18px;
    background: url("../../assets/imgs/icons/arr-left.png") no-repeat center;
    background-size: cover;
  }
  .header-title {
    width: 48px;
    height: 20px;
    font-size: 16px;
    font-family: PingFangSC-Medium, PingFangSC;
    color: rgba(255, 255, 255, 1);
    // 解决中间元素始终居中
    flex: 1;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 32px;
      height: 32px;
      border-radius: 50%;
      margin-right: 20px;
    }
  }
}
</style>