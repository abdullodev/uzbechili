import Footer from "@/components/shared/footer/Footer";
import Navbar from "@/components/shared/navbar/navbar";
import OrderHistory from "./container/OrderHistory";

const index = () => {
  return (
    <div>
      <Navbar />
      <OrderHistory />
      <Footer />
    </div>
  );
};

export default index;
