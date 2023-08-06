import { atom } from "jotai";

//scraper task in dashboard
export const crawlerTask = atom([]);

//form build scraper
export const crawlerData = atom({
  type: "",
  name: "擷取資料範本-kkday全球樂園清單",
  actions: [],
});

export const formStep = atom(1);

//scraper select element
export const hoverActive = atom(true);

//scraper mode
//ex: "select scraperElement", "select paginationElement"
export const mode = atom("scraper");

//feed feedOption
//ex: "1 == 'no-pagination'", "2 == 'click'", "3 == 'infinite-scroll'"
export const feedOption = atom(1);
export const paginationBtn = atom(null);
export const paginationStep = atom(0);
export const tableName = atom("");
export const dataItem = atom({});