import UIButton from "@/components/Button";
import { useAtom } from "jotai";
import { crawlerTask } from "@/stores/crawler";
import { Link } from "react-router-dom";

export const Title = () => {
  const [_, setCrawler] = useAtom(crawlerTask);
  const handleAddCrawler = () => {
    const newItem = Date.now();
    setCrawler((v) => [...v, newItem]);
  };
  return (
    <div className="title">
      <h1>Scraper</h1>
      <Link to={`/build-scraper`}>
        <UIButton onClick={handleAddCrawler} size="lg">
          Create Scraper
        </UIButton>
      </Link>
    </div>
  );
};
