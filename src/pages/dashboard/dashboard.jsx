import { useState } from "react";
import Layout, { Content } from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";
import Navbar from "@/components/dashboard/Navbar";
import FilterBar from "@/components/dashboard/FilterBar";
import Crawler from "@/components/dashboard/Crawler";
import SideMenu from "@/components/dashboard/SideMenu";

const siderStyle = {
  textAlign: "center",
  background: "#FFFFFF",
};

function Dashboard() {
  // document.getElementById("growise-crawler").style.pointerEvents = "auto";
  // document.getElementById("growise-crawler").style.backgroundColor = "#2f364f";
  const [tab, setTab] = useState("scraper");
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
