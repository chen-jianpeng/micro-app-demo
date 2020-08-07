<template>
  <div class="dashboard">
    工作台
  </div>
</template>

<script>
import registerMicroApps from "@/registerMicroApps";
export default {
  name: "Dashboard",
  mounted() {
    registerMicroApps();
  }
};
</script>

<style lang="scss"></style>
