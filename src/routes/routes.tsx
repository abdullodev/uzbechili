import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

const NotFound = lazy(() => import("../pages/notFound"));
const Home = lazy(() => import("../pages/home/container"));
const Categories = lazy(() => import("../pages/category/container"));
const Product = lazy(() => import("../pages/product"));
const Baskets = lazy(() => import("../pages/basket"));
const Purchase = lazy(() => import("../pages/purchase"));

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
    path: "/category/:id",
    element: <Categories />,
  },
  {
    path: "/product/:id",
    element: <Product />,
  },
  {
    path: "/baskets",
    element: <Baskets />,
  },
  {
    path: "/purchase",
    element: <Purchase />,
  },
]);
