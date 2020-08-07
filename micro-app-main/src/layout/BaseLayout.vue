<template>
  <div class="base-layout">
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
    >
      <el-menu-item
        v-for="nav in navs"
        :key="nav.routeName"
        :index="nav.routeName"
        >{{ nav.name }}</el-menu-item
      >
    </el-menu>

    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: "BaseLayout",
  data() {
    return {
      activeIndex: this.$route.name,
      navs: [
        {
          routeName: "Dashboard",
          name: "工作台"
        },
        {
          routeName: "Home",
          name: "工具中心"
        }
      ]
    };
  },
  methods: {
    handleSelect(name) {
      this.$router.push({ name });
    }
  }
};
</script>
<style lang="scss" scoped></style>
