import Dashboard from "./pages/dashboard";
import Scraper from "./pages/scraper";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/register";
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
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);
