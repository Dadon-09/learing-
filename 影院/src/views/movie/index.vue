<template>
  <div>
    <div class="header">
      <div class="header-c wrap-c">
        <div class="city">
          <p>郑州</p>
          <span></span>
        </div>
        <div class="demo">
          <router-link class="coming" to="/movie/coming">正在热映</router-link>
          <router-link class="now" to="/movie/now">即将上映</router-link>
        </div>
        <div class="search">
          <i></i>
        </div>
      </div>
    </div>

    <router-view></router-view>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "@/assets/css/movie/movie.scss";
</style>