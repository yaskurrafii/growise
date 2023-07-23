import UIButton from "@/components/Button";
import { useAtom } from "jotai";
import { crawlerTask } from "@/stores/crawler";

export const Title = () => {
  const [_, setCrawler] = useAtom(crawlerTask);
  const handleAddCrawler = () => {
    console.log(crawlerTask);
    const newItem = Date.now();
    setCrawler((v) => [...v, newItem]);
  };
  return (
    <div className="title">
      <h1>Scraper</h1>
      <UIButton onClick={handleAddCrawler} size="lg">
        Create Scraper
      </UIButton>
    </div>
  );
};
