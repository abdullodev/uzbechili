import Footer from "@/components/shared/footer/Footer";
import Navbar from "@/components/shared/navbar/navbar";
import Baskets from "./container/Baskets";

const index = () => {
  return (
    <div>
      <Navbar />
      <Baskets />
      <Footer />
    </div>
  );
};

export default index;
