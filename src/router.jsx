import Dashboard from "./pages/dashboard";
import Scraper from "./pages/scraper";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import { createHashRouter } from "react-router-dom";

export const router = createHashRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/build-scraper",
    element: <Scraper />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />
  },
  {
    path: "/register",
    element: <Register />,
  },
]);
