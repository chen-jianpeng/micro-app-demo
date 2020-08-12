<template>
  <el-container class="base-layout">
    <el-header class="header" height="60px">
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
.header {
  box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.2), 0 4px 5px 0 rgba(0, 0, 0, 0.14),
    0 1px 10px 0 rgba(0, 0, 0, 0.12);
  z-index: 1;
}
</style>
