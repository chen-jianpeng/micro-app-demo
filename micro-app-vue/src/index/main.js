import "../public-path";
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

let instance = null;

function render() {
  Vue.config.productionTip = false;

  instance = new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount("#micro-app-vue");
}

if (!window.__POWERED_BY_QIANKUN__) {
  render();
}

export async function bootstrap() {
  console.log("vue app bootstraped");
}

export async function mount(props) {
  console.log(props);
  render();
}

export async function unmount() {
  instance.$destroy();
  instance = null;
}

export async function update(props) {
  console.log("update props", props);
}
