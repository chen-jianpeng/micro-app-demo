<template>
  <div class="home">
    <div id="nav">
      <router-link to="/home/react">react</router-link> |
      <router-link to="/home/vue">vue</router-link>
    </div>
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
        activeRule: "/home/react"
      },
      {
        name: "vue app",
        entry: "//localhost:8001",
        container: "#micro-app-main-container",
        activeRule: "/home/vue"
      }
    ]);

    start();
  }
};
</script>

<style lang="scss"></style>
