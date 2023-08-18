/* global chrome */
import React from "react";
import ReactDOM, { createRoot } from "react-dom/client";
import "./assets/scss/styles.scss";
import "bootstrap/dist/css/bootstrap.css";
import { Provider } from "jotai";
import { ConfigProvider } from "antd";
import { RouterProvider } from "react-router-dom";
import router from "./router";
import theme from "./lib/theme";

// production
const bodyDom = document.body;
var initDom = document.createElement("div");
initDom.id = "growise-crawler";
let root;

chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  if (document.getElementById("growise-crawler") !== null) {
    root.unmount();
    document.getElementById("growise-crawler").remove();
    sendResponse({ status: "closed" });
  } else if (message.action === "init" || message.action === "toggle") {
    bodyDom.appendChild(initDom);
    root = createRoot(document.getElementById("growise-crawler"));
    root.render(
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

// development
// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <ConfigProvider theme={theme}>
//       <div className="growise-crawler">
//         <RouterProvider router={router} />
//         <Provider></Provider>
//       </div>
//     </ConfigProvider>
//   </React.StrictMode>
// );
