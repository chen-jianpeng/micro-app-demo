<template>
  <el-container class="header-container">
    <el-header height="60px">
      <router-view name="headbar"></router-view>
    </el-header>
    <el-container>
      <el-main class="main">
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
export default {
  name: "BaseLayout",
  data() {
    return {};
  }
};
</script>
<style lang="scss" scoped>
.el-header {
  box-shadow: 0 8px 24px -2px rgba(0, 0, 0, 0.05);
  z-index: 1;
}
</style>
