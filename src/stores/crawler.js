import { atom } from "jotai";

//scraper task in dashboard
export const crawlerTask = atom([]);

//form build scraper
export const crawlerData = atom({
  type: "",
  name: "",
  actions:[],
});

export const formStep = atom(1);
export const hoverActive = atom(true);
