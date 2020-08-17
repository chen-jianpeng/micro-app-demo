import "../public-path";
import Vue from "vue";
import App from "./App.vue";

let instance = null;

function render() {
  Vue.config.productionTip = false;

  instance = new Vue({
    render: h => h(App)
  }).$mount("#micro-app-vue-dashboard");
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
