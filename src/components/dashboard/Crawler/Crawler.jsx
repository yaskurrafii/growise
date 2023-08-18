import { CrawlerItem } from "./CrawlerItem";
import { useAtom } from "jotai";
import { crawlerTask, crawlerData } from "@/stores/crawler";
import { useEffect } from "react";
import { GetCrawler } from "@/apis/api";

export const Crawler = () => {
  const [tasks, setTask] = useAtom(crawlerTask);
  const [data, setData] = useAtom(crawlerData);

  useEffect(() => {
    async function getTask() {
      const response = await GetCrawler(data.account);
      setTask(response.data);
    }
    getTask();
  }, [data.account]);

  return (
    <div className="content-wrapper__crawler">
      {tasks.map((task, idx) => {
        return <CrawlerItem key={idx} data={task} />;
      })}
    </div>
  );
};
