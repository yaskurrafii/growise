import { Space } from "antd";
import {
  ArrowRightIcon,
  HomeIcon,
  AiIcon,
  CrawlerIcon,
  WorkerIcon,
} from "@/components/Icons";
const WorkspaceItem = () => {
  return (
    <div className="workspace-item d-flex flex-column gap-3">
      <Space style={{ paddingLeft: 4 }} align="center" direction="horizontal">
        <ArrowRightIcon />
        <HomeIcon />
        <p className="workspace-item--title">My Workspace</p>
      </Space>
      <Space direction="vertical" align="start" style={{ padding: "0 50px" }}>
        <div className="d-flex py-1 flex-row align-items-center gap-2 nav-wrapper__tab-ai">
          <AiIcon />
          <p style={{ color: "#A3A3A3", fontWeight: 400 }}>AI Document</p>
        </div>
        <div className="d-flex py-1 flex-row align-items-center gap-2 nav-wrapper__tab-ai">
          <CrawlerIcon />
          <p>Scraper</p>
        </div>
        <div className="d-flex py-1 flex-row align-items-center gap-2 nav-wrapper__tab-workflow">
          <WorkerIcon />
          <p>Workflow</p>
        </div>
      </Space>
    </div>
  );
};

export default WorkspaceItem;
