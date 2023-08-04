import Navbar from "./components/Navbar";
import Title from "./components/Title";
import FilterBar from "./components/FilterBar";
import Crawler from "./components/Crawler";
import Layout, { Content, Header } from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";
import { useState } from "react";
import SideMenu from "./components/SideMenu";

const siderStyle = {
  textAlign: "center",
  background: "#FFFFFF",
};

function Dashboard() {
  const [tab, setTab] = useState("scraper");
  document.getElementById("growise-crawler").style.pointerEvents = "auto";
  document.getElementById("growise-crawler").style.backgroundColor = "#2f364f";
  return (
    <div id="crawler" className="growise-scraper">
      <Layout style={{ height: "100%" }} className="layout">
        <Navbar tab={tab} />
        <Layout style={{ backgroundColor: "#FFFFFF" }} hasSider>
          <Sider width={231} style={siderStyle}>
            <SideMenu />
          </Sider>
          <Content>
            <div className="content-wrapper">
              <FilterBar />
              <Crawler />
            </div>
          </Content>
        </Layout>
      </Layout>
    </div>
  );
}

export default Dashboard;
