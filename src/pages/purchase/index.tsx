import Footer from "@/components/shared/footer/Footer";
import Purchase from "./container/Purchase";
import Navbar from "@/components/shared/navbar/navbar";

const index = () => {
  return (
    <div>
      <Navbar />
      <Purchase />
      <Footer />
    </div>
  );
};

export default index;
