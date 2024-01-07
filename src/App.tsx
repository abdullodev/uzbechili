import { Suspense, useEffect } from "react";
import { RouterProvider, useLocation } from "react-router-dom";
import { router } from "./routes/routes";

// compoenent
import { Loader } from "./components";

// css
import "./styles/common.css";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <RouterProvider router={router} />
    </Suspense>
  );
}

export default App;
