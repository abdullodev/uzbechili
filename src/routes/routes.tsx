import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

const NotFound = lazy(() => import("../pages/notFound"));
const Home = lazy(() => import("../pages/home/container"));
const Categories = lazy(() => import("../pages/category/container"));

export const router = createBrowserRouter([
  {
    path: "*",
    element: <NotFound />,
  },
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/categories",
    element: <Categories />,
  },
]);
