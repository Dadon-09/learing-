<template>
  <div id="app">
    <router-view></router-view>
    <FooterBar></FooterBar>
  </div>
</template>
<script>
import FooterBar from "@/components/FooterBar.vue";
export default {
  name: "app",
  components: {
    FooterBar
  }
};
</script>
<style lang="scss">
body {
  background-color: #23262d;
}
body,
html {
  width: 100%;
  height: 100%;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height:100%;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
