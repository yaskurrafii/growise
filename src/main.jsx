import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/scss/styles.scss";
// import Dashboard from "./pages/dashboard";
import { Provider } from "jotai";
import Scraper from "./pages/scraper";

// production
// const bodyDom = document.body;
// chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
//   var initDom = document.createElement("div");
//   initDom.id = "growise-crawler";
//   bodyDom.insertBefore(initDom, bodyDom.childNodes[0]);
//   document.querySelector("body").appendChild(initDom);
//   ReactDOM.createRoot(document.getElementById("growise-crawler")).render(
//     <React.StrictMode>
//       <Provider>
//         <Dashboard />
//       </Provider>
//     </React.StrictMode>
//   );
//   sendResponse({ loaded: "true" });
// });

// development
// <Scraper />

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="growise-crawler">
      <Provider>
        <Scraper />
      </Provider>
    </div>
  </React.StrictMode>
);
