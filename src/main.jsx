import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/scss/styles.scss";
import "bootstrap/dist/css/bootstrap.css"
// import Dashboard from "./pages/dashboard";
import { Provider } from "jotai";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./pages/dashboard";
import Scraper from "./pages/scraper";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "/build-scraper",
    element: <Scraper />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

// production
// const bodyDom = document.body;
// chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
//   var initDom = document.createElement("div");
//   initDom.id = "growise-crawler";
//   bodyDom.insertBefore(initDom, bodyDom.childNodes[0]);
//   document.querySelector("body").appendChild(initDom);
//   ReactDOM.createRoot(document.getElementById("growise-crawler")).render(
//     <React.StrictMode>
//       <div className="growise-crawler">
//         <RouterProvider router={router} />
//         <Provider></Provider>
//       </div>
//     </React.StrictMode>
//   );
//   sendResponse({ loaded: "true" });
// });

// development

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="growise-crawler">
    <RouterProvider router={router} />
      <Provider>
      </Provider>
    </div>
  </React.StrictMode>
);
