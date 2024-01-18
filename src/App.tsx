import { Suspense } from "react";
import { Toaster } from "react-hot-toast";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/routes";

// compoenent
import { Loader } from "./components";

// css
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./styles/common.css";
import AuthModal from "./components/shared/authModal/container/authModal";

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <AuthModal />
      <RouterProvider router={router} />
      <Toaster />
    </Suspense>
  );
}

export default App;
