<template>
  <div class="main-myorder">
    <mainheader title="我的订单" page="/main">
      <template v-slot:right>
        <div class="edit">编辑</div>
      </template>
    </mainheader>
    <div class="route-order">
      <router-link to="/order/all">全部</router-link>
      <router-link to="/order/pay">待付款</router-link>
      <router-link to="/order/evalute">待评价</router-link>
      <router-link to="/order/back">退款</router-link>
    </div>

    <router-view></router-view>
  </div>
</template>

<script>
import mainheader from "@/components/main/header";
export default {
  name: "",
  data() {
    return {};
  },
  components: {
    mainheader
  }
};
</script>

<style lang='scss' scoped>
@import "@/assets/css/common/common.scss";
.main-myorder {
  padding: 0 $basePadding;
  .edit {
    width: 42px;
    height: 20px;
    border-radius: 2px;
    border: 1px solid rgba(249, 195, 74, 1);
    color: rgba(249, 195, 74, 1);
    line-height: 20px;
    font-size: 16px;
  }
  .route-order {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 50px;
    color: rgba(255, 255, 255, 1);
    font-size: 14px;
    a {
      text-decoration: none;
      color: rgba(255, 255, 255, 1);
      -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
      -webkit-user-select: none;
      -moz-user-focus: none;
      -moz-user-select: none;
      &::after {
        position: absolute;
        left: 0;
        bottom: -10px;
        width: 100%;
        height: 2px;
        background-color: rgba(249, 195, 74, 1);
        content: "";
        opacity: 0;
        transition: all ease 0.4s;
      }
      &.router-link-exact-active {
        position: relative;
        color: rgba(249, 195, 74, 1);
        transition: all ease 0.4s;

        &::after {
          opacity: 1;
        }
      }
    }
  }
  .content {
    width: 100%;
  }
}
</style>