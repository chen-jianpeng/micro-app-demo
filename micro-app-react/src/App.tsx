import React from "react";
import {
  RouteComponentProps,
  Route,
  Redirect,
  Switch,
  Link,
} from "react-router-dom";
import { Layout, Menu } from "antd";
import { UserOutlined } from "@ant-design/icons";
import Dashboard from "./views/Dashboard";
import About from "./views/About";

const { Content, Footer, Sider } = Layout;

type SiderCustomProps = RouteComponentProps<any>;

function App(props: SiderCustomProps) {
  return (
    <Layout>
      <Sider
        style={{
          overflow: "auto",
          height: "100vh",
          position: "fixed",
          left: 0,
          background: "#fff",
        }}
      >
        <Menu
          mode="inline"
          defaultSelectedKeys={[props.location.pathname]}
          style={{ height: "100%" }}
        >
          <Menu.Item key="/dashboard" icon={<UserOutlined />}>
            <Link to={"/dashboard"}>Dashboard</Link>
          </Menu.Item>
          <Menu.Item key="/about" icon={<UserOutlined />}>
            <Link to={"/about"}>About</Link>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout" style={{ marginLeft: 200 }}>
        <Content style={{ margin: "24px 16px 0", overflow: "initial" }}>
          <Switch>
            <Route
              exact
              path="/"
              render={() => <Redirect to="/dashboard" push />}
            />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/about" component={About} />
          </Switch>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
}

export default App;
