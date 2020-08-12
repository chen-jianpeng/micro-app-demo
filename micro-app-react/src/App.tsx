import React from "react";
import {
  RouteComponentProps,
  Route,
  Redirect,
  Switch
} from "react-router-dom";
import { Layout } from "antd";
import Home from "./views/Home";
import About from "./views/About";

const { Content, Footer } = Layout;

type SiderCustomProps = RouteComponentProps<any>;

function App(props: SiderCustomProps) {
  return (
    <Layout className="site-layout">
      <Content style={{ margin: "24px 16px 0", overflow: "initial" }}>
        <Switch>
          <Route
            exact
            path="/"
            render={() => <Redirect to="/home" push />}
          />
          <Route path="/home" component={Home} />
          <Route path="/about" component={About} />
        </Switch>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Ant Design ©2018 Created by Ant UED
      </Footer>
    </Layout>
  );
}

export default App;
