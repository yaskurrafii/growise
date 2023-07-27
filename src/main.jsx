import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/scss/styles.scss";
import { Provider } from "jotai";
import { RouterProvider } from "react-router-dom";
import { createHashRouter } from "react-router-dom";
import { router } from "./router";

// production

let injected;
const bodyDom = document.body;
var initDom = document.createElement("div");
initDom.id = "growise-crawler";

chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  if (message.action === "close") {
    document.getElementById("growise-crawler").remove();
    sendResponse({ status: "closed" });
  } else if (message.action === "open") {
    bodyDom.insertBefore(initDom, bodyDom.childNodes[0]);
    ReactDOM.createRoot(document.getElementById("growise-crawler")).render(
      <React.StrictMode>
        <RouterProvider router={router} />
        <Provider></Provider>
      </React.StrictMode>
    );
    sendResponse({ status: "opened" });
  } else {
    bodyDom.insertBefore(initDom, bodyDom.childNodes[0]);
    ReactDOM.createRoot(document.getElementById("growise-crawler")).render(
      <React.StrictMode>
        <RouterProvider router={router} />
        <Provider></Provider>
      </React.StrictMode>
    );
    sendResponse({ loaded: "true" });
  }
});

// development

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <div className="growise-crawler">
//       <RouterProvider router={router} />
//       <Provider></Provider>
//     </div>
//   </React.StrictMode>
// );
