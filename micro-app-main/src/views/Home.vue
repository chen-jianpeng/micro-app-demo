<template>
  <div class="home">
    <div id="micro-app-main-container"></div>
  </div>
</template>

<script>
import { registerMicroApps, start } from "qiankun";
export default {
  name: "Home",
  mounted() {
    registerMicroApps([
      {
        name: "reactApp",
        entry: "//localhost:8002/index.html",
        container: "#micro-app-main-container",
        activeRule: "/react"
      },
      {
        name: "vueApp",
        entry: "//localhost:8001/index.html",
        container: "#micro-app-main-container",
        activeRule: "/vue"
      }
    ]);

    start();
  }
};
</script>

<style lang="scss"></style>
