<template>
  <div class="home-app">
    <home-template></home-template>
  </div>
</template>
<script>
import homeTemplate from "@/views/HomeTemplate";
export default {
  name: "app",
  components: {
    homeTemplate,
  },
};
</script>
<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  min-height: 100%;
  //position: relative;
  display: flex;
  flex-direction: column;
}
.home-app {
  flex-grow: 1;
  //height: 100%;
}
</style>
