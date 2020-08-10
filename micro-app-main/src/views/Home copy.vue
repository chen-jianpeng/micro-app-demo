<template>
  <div class="home">
    <div>
      <router-link to="/home/react">react</router-link> |
      <router-link to="/home/vue">vue</router-link>
    </div>
    <div id="micro-app-main-container"></div>
  </div>
</template>

<script>
import { registerMicroApps, start, loadMicroApp } from "qiankun";
export default {
  name: "Home",
  mounted() {
    registerMicroApps([], {
      afterMount: () => {
        let paths = this.$route.path.split("/");
        if (paths[1] !== "home") return;

        switch (paths[2]) {
          case "vue": {
            this.microApp = loadMicroApp(
              {
                name: "micro-app-vue",
                entry: "//localhost:8001",
                container: "#micro-app-main-container",
                props: { name: "you are vue" }
              },
              { sandbox: { strictStyleIsolation: true } }
            );
            break;
          }

          case "react": {
            this.microApp = loadMicroApp(
              {
                name: "micro-app-react",
                entry: "//localhost:8002",
                container: "#micro-app-main-container",
                props: { name: "you are react" }
              },
              { sandbox: { strictStyleIsolation: true } }
            );
            break;
          }
        }
      }
    });

    start();
  },
  destroyed() {
    this.microApp.unmount();
  },
  updated() {
    this.microApp.update({ name: "updated" });
  }
};
</script>

<style lang="scss"></style>
