import { atom } from "jotai";

//scraper task in dashboard
export const crawlerTask = atom([
  // {
  //   id: 1,
  //   type: "single",
  //   name: "test",
  //   url: "https://google.com",
  //   last_run: "2023-08-14T13:35:41.533781Z",
  //   status: "stop",
  //   next_url: "",
  //   css: '{"test" : ""}',
  //   account: "57752cef-b309-4ad8-b9b8-3c57d4c01387",
  // },
  // {
  //   id: 2,
  //   type: "single",
  //   name: "test",
  //   url: "https://stackoverflow.com/questions/41498274/codeigniter-class-rest-controller-not-found",
  //   last_run: "2023-08-14T13:44:36.950921Z",
  //   status: "stop",
  //   next_url: "",
  //   css: {
  //     test: "html:nth-of-type(1) > body:nth-of-type(1) > div:nth-of-type(3) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(3) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(2) > div:nth-of-type(1) > p:nth-of-type(1)",
  //   },
  //   account: "57752cef-b309-4ad8-b9b8-3c57d4c01387",
  // },
  // {
  //   id: 3,
  //   type: "single",
  //   name: "test",
  //   url: "https://www.traveloka.com/id-id/kereta-api/search?st=PSE.SBI&dt=8-9-2023.null&ps=1.0&pd=KAI#/build-scraper",
  //   last_run: "2023-08-14T13:45:49.282299Z",
  //   status: "stop",
  //   next_url: "",
  //   css: {
  //     harga:
  //       "html:nth-of-type(1) > body:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(5) > div:nth-of-type(1) > div:nth-of-type(2) > div > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(4) > div:nth-of-type(1) > h2:nth-of-type(1)",
  //     "nama kereta":
  //       "html:nth-of-type(1) > body:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(5) > div:nth-of-type(1) > div:nth-of-type(2) > div > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > h3:nth-of-type(1)",
  //   },
  //   account: "57752cef-b309-4ad8-b9b8-3c57d4c01387",
  // },
  // {
  //   id: 4,
  //   type: "single",
  //   name: "test",
  //   url: "https://www.traveloka.com/id-id/kereta-api/search?st=PSE.SBI&dt=8-9-2023.null&ps=1.0&pd=KAI#/build-scraper",
  //   last_run: "2023-08-14T14:36:48.585449Z",
  //   status: "stop",
  //   next_url: "",
  //   css: {
  //     nama_kereta:
  //       "html:nth-of-type(1) > body:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(5) > div:nth-of-type(1) > div:nth-of-type(2) > div > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > h3:nth-of-type(1)",
  //     harga:
  //       "html:nth-of-type(1) > body:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(5) > div:nth-of-type(1) > div:nth-of-type(2) > div > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(4) > div:nth-of-type(1) > h2:nth-of-type(1)",
  //     jam_keberangkatan:
  //       "html:nth-of-type(1) > body:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(5) > div:nth-of-type(1) > div:nth-of-type(2) > div > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(1) > h3:nth-of-type(1)",
  //   },
  //   account: "57752cef-b309-4ad8-b9b8-3c57d4c01387",
  // },
]);

//scraper data form multiple step
export const crawlerData = atom({ css: {} });

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
export const tableName = atom("");
export const dataItem = atom({});
export const actions = atom({});
