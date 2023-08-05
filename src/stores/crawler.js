import { atom } from "jotai";

//scraper task in dashboard
export const crawlerTask = atom([
  {
    name: " 擷取資料範本-kkday全球樂園清單",
    page: "www.google.com",
    url: "https://www.kkday.com/zh-tw/product/115575",
    dataField: [
      {
        name: "kkday旅遊標題",
      },
      { name: "kkday旅遊敘述" },
      { name: "標題URl" },
      { name: "購買量" },
      { name: "購買量" },
      { name: "標題URl" },
      { name: "購買量" },
    ],
    timestamp: "Last execution time 2022.12.25 09:10",
  },
  {
    name: " 擷取資料範本-kkday全球樂園清單",
    page: "www.google.com",
    url: "https://www.kkday.com/zh-tw/product/115575",
    dataField: [
      {
        name: "kkday旅遊標題",
      },
      { name: "kkday旅遊敘述" },
      { name: "標題URl" },
      { name: "購買量" },
      { name: "購買量" },
      { name: "標題URl" },
      { name: "購買量" },
    ],
    timestamp: "Last execution time 2022.12.25 09:10",
  },
  {
    name: " 擷取資料範本-kkday全球樂園清單",
    page: "www.google.com",
    url: "https://www.kkday.com/zh-tw/product/115575",
    dataField: [
      {
        name: "kkday旅遊標題",
      },
      { name: "kkday旅遊敘述" },
      { name: "標題URl" },
      { name: "購買量" },
      { name: "購買量" },
      { name: "標題URl" },
      { name: "購買量" },
    ],
    timestamp: "Last execution time 2022.12.25 09:10",
  },
]);

//scraper data form multiple step
export const crawlerData = atom({
  type: "",
  name: "擷取資料範本-kkday全球樂園清單",
  actions: [],
});

//scraper create form multiple step
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
