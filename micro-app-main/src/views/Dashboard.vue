<template>
  <div class="dashboard">
    <el-row :gutter="20">
      <el-col :span="12"><div ref="vueDashboard"></div></el-col>
      <el-col :span="12"><div ref="reactDashboard"></div></el-col>
    </el-row>
  </div>
</template>

<script>
import { loadMicroApp } from "qiankun";
export default {
  name: "Dashboard",
  mounted() {
    const vueDashboard = this.$refs.vueDashboard;
    const reactDashboard = this.$refs.reactDashboard;

    this.vueDashboardApp = loadMicroApp({
      name: "vueDashboard",
      entry: "//localhost:8001/dashboard.html",
      container: vueDashboard,
      props: { name: "qiankun" }
    });
    this.reactDashboardApp = loadMicroApp({
      name: "reactDashboard",
      entry: "//localhost:8002/dashboard.html",
      container: reactDashboard,
      props: { name: "qiankun" }
    });
  },
  updated() {
    this.vueDashboardApp.update({ name: "kuitos" });
    this.reactDashboardApp.update({ name: "kuitos" });
  },
  async beforeRouteLeave(to, from, next) {
    await Promise.all([
      this.vueDashboardApp.unmount(),
      this.reactDashboardApp.unmount()
    ]);

    next();
  }
};
</script>

<style lang="scss" scoped></style>
