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
        name: "react app",
        entry: "//localhost:8002",
        container: "#micro-app-main-container",
        activeRule: "/react"
      },
      {
        name: "vue app",
        entry: "//localhost:8001",
        container: "#micro-app-main-container",
        activeRule: "/vue"
      }
    ]);

    start();
  }
};
</script>

<style lang="scss"></style>
