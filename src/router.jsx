import Dashboard from "./pages/dashboard";
import Scraper from "./pages/scraper";
import { createHashRouter } from "react-router-dom";

export const router = createHashRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "/build-scraper",
    element: <Scraper />,
  },
]);
