import "./public-path"
import React from "react";
import ReactDOM from "react-dom";
import Pages from "./Pages";
import * as serviceWorker from "./serviceWorker";

import "./style/antd/antd.less";
import "./style/index.less";

function render() {
  ReactDOM.render(
    <React.StrictMode>
      <Pages />
    </React.StrictMode>,
    document.getElementById("micro-app-react")
  );

  // If you want your app to work offline and load faster, you can change
  // unregister() to register() below. Note this comes with some pitfalls.
  // Learn more about service workers: https://bit.ly/CRA-PWA
  serviceWorker.unregister();
}

const win: any = window;
if (!win.__POWERED_BY_QIANKUN__) {
  render();
}

export async function bootstrap() {
  console.log("react app bootstraped");
}

export async function mount(props: any) {
  console.log(props);

  render();
}

export async function unmount() {
  const node = document.getElementById("micro-app-react");
  if (node) {
    ReactDOM.unmountComponentAtNode(node);
  }
}

export async function update(props: any) {
  console.log("update props", props);
}
