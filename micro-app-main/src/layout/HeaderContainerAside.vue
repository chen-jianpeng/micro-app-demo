<template>
  <el-container class="header-container-aside">
    <el-header height="60px">
      <router-view name="headbar"></router-view>
    </el-header>
    <el-container>
      <el-aside width="200px" class="aside">
        <router-view name="sidebar"></router-view>
      </el-aside>
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
.aside {
  position: fixed;
  top: 60px;
  bottom: 0;
  left: 0;
  border-right: 1px solid #e6e6e6;
}
.main {
  margin-left: 200px;
  padding: 0;
}
</style>
