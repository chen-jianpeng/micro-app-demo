import { registerMicroApps, start } from "qiankun";

export default function() {
  registerMicroApps([
    {
      name: "react app",
      entry: "//localhost:8002",
      container: "#micro-app-main-container",
      activeRule: "/home/react"
    },
    {
      name: "vue app",
      entry: "//localhost:8001",
      container: "#micro-app-main-container",
      activeRule: "/home/vue"
    }
  ]);

  start();
}
