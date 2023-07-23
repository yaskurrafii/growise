import UIButton from "@/components/Button/index.jsx";
import {
  LogoIcon,
  GlobeIcon,
  CrawlerIcon,
  AiIcon,
  WorkerIcon,
} from "./Icon.jsx";

export const Navbar = () => {
  return (
    <nav className="nav-wrapper">
      <div className="nav-wrapper__logo">
        <LogoIcon />
      </div>
      <div className="nav-wrapper__service">
        <UIButton
          variant="transparent"
          size="nav"
          color="orange"
          icon={<GlobeIcon />}
        >
          Template Store
        </UIButton>
        <UIButton
          icon={<CrawlerIcon />}
          size="nav"
          variant="transparent"
          color="lb"
          className="service__crawler"
        >
          Crawler
        </UIButton>
        <UIButton
          variant="transparent"
          icon={<WorkerIcon />}
          color="teal"
          size="nav"
          className="service__worker"
        >
          Work Process
        </UIButton>
        <UIButton
          variant="transparent"
          color="purple"
          size="nav"
          icon={<AiIcon />}
          className="service__ai"
        >
          AI Assistant
        </UIButton>
      </div>
      <div className="nav-wrapper__profile">
        <p>History</p>
        <p>Username</p>
      </div>
    </nav>
  );
};
