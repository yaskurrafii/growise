import Dashboard from "./pages/dashboard";
import Scraper from "./pages/scraper";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import { createMemoryRouter } from "react-router-dom";

const routes = [
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/build-scraper",
    element: <Scraper />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/register",
    element: <Register />,
  },
];

const router = createMemoryRouter(routes, {
  initialEntries: ["/login", "/register", "/dashboard", "/build-scraper"],
  initialIndex: 0
});

export default router;
