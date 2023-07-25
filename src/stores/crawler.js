import { atom, useSetAtom } from "jotai";

//scraper task in dashboard
export const crawlerTask = atom([]);

//form build scraper
export const crawlerData = atom({
  type: "",
  name: "",
});

export const formStep = atom(1);
