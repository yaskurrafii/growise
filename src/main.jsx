import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/scss/styles.scss";
import Scraper from "@/pages/scraper";
import { Provider } from "jotai";

// production
const bodyDom = document.body;
chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  var initDom = document.createElement("div");
  initDom.id = "growise-crawler";
  bodyDom.insertBefore(initDom, bodyDom.childNodes[0]);
  document.querySelector("body").appendChild(initDom);
  ReactDOM.createRoot(document.getElementById("growise-crawler")).render(
    <React.StrictMode>
      <Provider>
        <Scraper />
      </Provider>
    </React.StrictMode>
  );
  sendResponse({ loaded: "true" });
});

// development
// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <Provider>
//       <Scraper />
//     </Provider>
//   </React.StrictMode>
// );
