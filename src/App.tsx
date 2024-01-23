import { Suspense, lazy } from "react";
import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";
const NotFound = lazy(() => import("./pages/notFound"));
const Home = lazy(() => import("./pages/home/container"));
const Categories = lazy(() => import("./pages/category/container"));
const Product = lazy(() => import("./pages/product"));
const Baskets = lazy(() => import("./pages/basket"));
const Purchase = lazy(() => import("./pages/purchase"));

// compoenent
import { AuthModal, Loader } from "./components";

// css
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./styles/common.css";

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <AuthModal />
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="category/:id" element={<Categories />} />
        <Route path="product/:id" element={<Product />} />
        <Route path="baskets" element={<Baskets />} />
        <Route path="purchase" element={<Purchase />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Toaster />
    </Suspense>
  );
}

export default App;
