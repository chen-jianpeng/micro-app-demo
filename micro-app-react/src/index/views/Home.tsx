import React, { Component } from "react";
import "../assets/style/home.less";
import logo from "../assets/logo.svg";

import DemoDialog from "../components/DemoDialog";

class Home extends Component {
  render() {
    return (
      <div className="home">
        <header className="home-header">
          <img src={logo} className="home-logo" alt="logo" />
          <p>
            Edit <code>src/views/Home.tsx</code> and save to reload.
          </p>
          <a
            className="home-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <DemoDialog></DemoDialog>
        </header>
      </div>
    );
  }
}

export default Home;
