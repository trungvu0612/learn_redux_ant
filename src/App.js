import { Layout } from "antd";
import React from "react";
import "./App.css";
import MenuMain from "./component/menuMain";
import Home from "./page/home";

function App() {
  return (
    <div className="App">
      <Layout>
        <Home />
      </Layout>
    </div>
  );
}

export default App;
