import { CrawlerItem } from "./CrawlerItem";
import { useAtom } from "jotai";
import { crawlerTask } from "@/stores/crawler";

export const Crawler = () => {
  const [tasks, _] = useAtom(crawlerTask);
  return (
    <div className="content-wrapper__crawler">
      {tasks.map((task, idx) => {
        return <CrawlerItem key={idx} data={task} />;
      })}
    </div>
  );
};
