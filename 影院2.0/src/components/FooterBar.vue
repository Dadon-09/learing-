<template>
  <div class="footer-bar">
    <router-link to="/home" class="home router-link"></router-link>
    <router-link to="/movie" class="movie router-link"></router-link>
    <router-link to="/ticket" class="ticket router-link"></router-link>
    <router-link to="/cinema" class="cinema router-link"></router-link>
    <router-link to="/main" class="main router-link"></router-link>
  </div>
</template>

<script>
export default {
  name: "footerBar"
};
</script>

<style lang="scss" scoped>
.footer-bar {
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  z-index: 999;
  bottom: 0;
  left: 0;
  height: 104px;
  width: 100%;
  background: url("../assets/imgs/icons/footer-bar-bg.png") no-repeat center;
  background-size: cover;
  .router-link {
    width: 70px;
    height: 70px;
    background: no-repeat center;
    background-size: 40px 40px;
    margin-top: 20px;
    &.home {
      background-image: url("../assets/imgs/icons/home.png");
      &.router-link-active {
        background-image: url("../assets/imgs/icons/home-active.png");
      }
    }
    &.movie {
      background-image: url("../assets/imgs/icons/movie.png");
      &.router-link-active {
        background-image: url("../assets/imgs/icons/movie-active.png");
      }
    }
    &.ticket {
      background-image: url("../assets/imgs/icons/ticket-active.png");
      margin-top: -10px;
      background-size: 60px 60px;
    }
    &.cinema {
      background-image: url("../assets/imgs/icons/cinema.png");
      &.router-link-active {
        background-image: url("../assets/imgs/icons/cinema-active.png");
      }
    }
    &.main {
      background-image: url("../assets/imgs/icons/main.png");
      &.router-link-active {
        background-image: url("../assets/imgs/icons/main-active.png");
      }
    }
  }
}
</style>