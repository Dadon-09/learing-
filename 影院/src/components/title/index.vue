<template>
  <div class="title">
    <div class="demo">
      <span></span>
      <p>{{ title }}</p>
    </div>
    <div class="box">
      <p>{{ text }}</p>
      <span></span>
    </div>
  </div>
</template>

<script>
export default {
  name: "titleT",
  data() {
    return {};
  },
  props: { title: String, text: String }
};
</script>

<style lang="scss" scoped>
.title {
  width: 335px;
  display: flex;
  margin: 30px auto 10px;
  justify-content: space-between;
  color: rgba(255, 255, 255, 0.7);
  .demo {
    display: flex;
    span {
      margin-right: 5px;
      width: 4px;
      height: 17px;
      background: linear-gradient(
        90deg,
        rgba(242, 97, 130, 1) 0%,
        rgba(241, 160, 100, 1) 100%
      );
    }
    p {
      font-size: 18px;
    }
  }
  .box {
    line-height: 17px;
    overflow: hidden;
    display: flex;
    p {
      font-size: 12px;
      margin-right: 5px;
    }
    span {
      margin-top: 3.5px;
      display: block;
      width: 6px;
      height: 10px;
      background: url("../../assets/imgs/icons/right.png") no-repeat center;
    }
  }
}
</style>