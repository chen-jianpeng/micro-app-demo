<template>
  <div class="sidebar">
    <el-menu router :default-active="activeIndex">
      <el-menu-item v-for="nav in data" :key="nav.path" :index="nav.path">
        <template slot="title">
          <i :class="nav.icon"></i>
          <span> {{ nav.name }}</span>
        </template>
      </el-menu-item>
    </el-menu>
  </div>
</template>
<script>
export default {
  name: "Sidebar",
  props: {
    data: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {};
  },
  computed: {
    activeIndex() {
      let nav = this.data.find(nav => {
        return this.$route.path.includes(nav.path);
      });
      return nav ? nav.path : "";
    }
  }
};
</script>
<style lang="scss" scoped>
.el-menu {
  border-right: none;
}
</style>
