/* global chrome */
import React from "react";
<<<<<<< Updated upstream
import ReactDOM from "react-dom/client";
import "./assets/scss/styles.scss";
=======
import { createRoot } from "react-dom/client";
import "@/assets/scss/styles.scss";
>>>>>>> Stashed changes
import "bootstrap/dist/css/bootstrap.css";
import { Provider } from "jotai";
import { ConfigProvider } from "antd";
import { RouterProvider } from "react-router-dom";
<<<<<<< Updated upstream
import { router } from "./router";
import theme from "./lib/theme";

// production
const bodyDom = document.body;
var initDom = document.createElement("div");
initDom.id = "growise-crawler";

chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  if (document.getElementById("growise-crawler") !== null) {
    document.getElementById("growise-crawler").remove();
    sendResponse({ status: "closed" });
  } else if (message.action === "init" || message.action === "toggle") {
    bodyDom.insertBefore(initDom, bodyDom.childNodes[0]);
    ReactDOM.createRoot(document.getElementById("growise-crawler")).render(
      <ConfigProvider theme={theme}>
        <React.StrictMode>
          <RouterProvider router={router} />
          <Provider></Provider>
        </React.StrictMode>
      </ConfigProvider>
    );
    sendResponse({ status: "opened" });
  }
});
=======
import router from "./router";
import theme from "@/lib/theme";
import '@/lib/i18n';

// production
// const bodyDom = document.body;
// var initDom = document.createElement("div");
// initDom.id = "growise-crawler";
// let root;

// chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
//   if (document.getElementById("growise-crawler") !== null) {
//     root.unmount();
//     document.getElementById("growise-crawler").remove();
//     sendResponse({ status: "closed" });
//   } else if (message.action === "init" || message.action === "toggle") {
//     bodyDom.insertBefore(initDom, bodyDom.childNodes[0]);
//     root = createRoot(document.getElementById("growise-crawler"));
//     root.render(
//       <ConfigProvider theme={theme}>
//         <React.StrictMode>
//           <RouterProvider router={router} />
//           <Provider></Provider>
//         </React.StrictMode>
//       </ConfigProvider>
//     );
//     sendResponse({ status: "opened" });
//   }
// });
>>>>>>> Stashed changes

// development
createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ConfigProvider theme={theme}>
      <div className="growise-crawler">
        <RouterProvider router={router} />
        <Provider></Provider>
      </div>
    </ConfigProvider>
  </React.StrictMode>
);
