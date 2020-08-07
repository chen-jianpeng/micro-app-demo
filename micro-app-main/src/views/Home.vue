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
import registerMicroApps from "@/registerMicroApps";
export default {
  name: "Home",
  mounted() {
    registerMicroApps();
  }
};
</script>

<style lang="scss"></style>
