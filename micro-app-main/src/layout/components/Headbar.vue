<template>
  <div class="headbar">
    <div class="logo"></div>
    <el-menu
      router
      class="header-menu"
      :default-active="activeIndex"
      mode="horizontal"
    >
      <el-menu-item v-for="nav in navs" :key="nav.path" :index="nav.path">
        {{ nav.name }}
      </el-menu-item>
    </el-menu>
  </div>
</template>
<script>
export default {
  name: "Headbar",
  data() {
    return {
      navs: [
        {
          path: "/dashboard",
          name: "Dashboard"
        },
        {
          path: "/vue",
          name: "Vue"
        },
        {
          path: "/react",
          name: "React"
        }
      ]
    };
  },
  computed: {
    activeIndex() {
      let nav = this.navs.find(nav => {
        return this.$route.path.includes(nav.path);
      });
      return nav ? nav.path : "";
    }
  }
};
</script>
<style lang="scss" scoped>
.headbar {
  display: flex;
  .logo {
    width: 160px;
    margin: 16px 20px 16px 0;
    background-color: $--color-primary;
    border-radius: 4px;
  }
  .header-menu {
    border-bottom: none;
  }
}
</style>
