import { Tips } from "@/components/Tools/Tips";
import { Actions } from "@/components/Tools/Actions";
import ScraperList from "@/components/ScraperList";

export const ScraperSelect = () => {
  document.getElementById("growise-crawler").remove();
  return (
    <div className="build__scraper-select">
      <div className="build__scraper-select--tools-container d-flex flex-column position-fixed gap-2">
        <Actions />
        <Tips>
          <div className="tips-title">Start setting up the script</div>
          <div className="tips-body">
            Use the mouse to select the field you want to scrape
          </div>
        </Tips>
      </div>
      <ScraperList />
    </div>
  );
};
