import ScraperListName from "./ScraperListName";
import ToggleTable from "./ToggleTable";
import ExitToApp from "./ExitToApp";
import { useAtomValue, useSetAtom } from "jotai";
import { crawlerData, mode } from "@/stores/crawler";
import Status from "./Status";
import FeedOptions from "./FeedOptions";

export const Header = ({ isOpen, setOpenTable }) => {
  const data = useAtomValue(crawlerData);
  return (
    <div className="scraper-list__header d-flex rounded-top-3 px-4 py-3 justify-content-between">
      <div className="scraper-list__header-left d-flex align-items-center gap-3">
        <ScraperListName name={data.name} />
        <Status status={"Saving..."} />
      </div>
      <div className="scraper-list__header__right d-flex align-items-center gap-3">
        <FeedOptions />
        <ToggleTable isOpen={isOpen} setOpenTable={setOpenTable} />
        <ExitToApp />
      </div>
    </div>
  );
};
