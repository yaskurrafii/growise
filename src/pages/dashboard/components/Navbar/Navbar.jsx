import {
  LogoIcon,
  CrawlerIcon,
  AiIcon,
  WorkerIcon,
  MenuIcon,
} from "./Icon.jsx";
import { Header } from "antd/es/layout/layout.js";
import { Space, Button } from "antd";
import { useNavigate } from "react-router-dom";

export const Navbar = ({ tab }) => {
  const navigate = useNavigate();
  return (
    <Header
      style={{
        zIndex: 10,
        boxShadow: "rgba(0, 0, 0, 0.10) 0 2px 14px",
        background: "white",
        alignItems: "center",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        gap: 12,
        padding: "12px 20px",
        height: 64,
      }}
    >
      <Space size="middle">
        <Space size="small">
          <MenuIcon />
          <LogoIcon />
        </Space>
        <Space direction="horizontal" size="large">
          <h4 className="navbar-tab--name">My Workspace</h4>
          <div className="position-relative">
            <div className="d-flex flex-row align-items-center gap-2 nav-wrapper__tab-ai">
              <AiIcon />
              <p style={{ color: "#A3A3A3", fontWeight: 400 }}>AI Document</p>
            </div>
          </div>
          <div className="d-flex flex-row align-items-center gap-2 nav-wrapper__tab-ai">
            <CrawlerIcon />
            <p>Scraper</p>
            {tab === "scraper" && (
              <div className="position-absolute bottom-0"></div>
            )}
          </div>
          <div className="d-flex flex-row align-items-center gap-2 nav-wrapper__tab-workflow">
            <WorkerIcon />
            <p>Workflow</p>
          </div>
        </Space>
      </Space>
      <Button type="primary" onClick={() => navigate("/build-scraper")}>
        Create new scraper
      </Button>
    </Header>
  );
};
