import React from "react";
import { Route, Switch, Link } from "react-router-dom";
import { Layout, Menu } from "antd";
import {
  UserOutlined,
  UploadOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import Nav1 from "./views/Nav1";
import Nav2 from "./views/Nav2";
import Nav3 from "./views/Nav3";

const { Header, Content, Footer, Sider } = Layout;

function App() {
  return (
    <Layout>
      <Sider
        style={{
          overflow: "auto",
          height: "100vh",
          position: "fixed",
          left: 0,
        }}
      >
        <div className="logo" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={["4"]}>
          <Menu.Item key="1" icon={<UserOutlined />}>
            <Link to={"/app/nav1"}>nav 1</Link>
          </Menu.Item>
          <Menu.Item key="2" icon={<VideoCameraOutlined />}>
            <Link to={"/app/nav2"}>nav 2</Link>
          </Menu.Item>
          <Menu.Item key="3" icon={<UploadOutlined />}>
            <Link to={"/app/nav3"}>nav 3</Link>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout" style={{ marginLeft: 200 }}>
        <Header className="site-layout-background" style={{ padding: 0 }} />
        <Content style={{ margin: "24px 16px 0", overflow: "initial" }}>
          <Switch>
            <Route path="/app/nav1" component={Nav1} />
            <Route path="/app/nav2" component={Nav2} />
            <Route path="/app/nav3" component={Nav3} />
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
