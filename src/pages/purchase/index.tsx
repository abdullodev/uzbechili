import Footer from "@/components/shared/footer/Footer";
import Navbar from "@/components/shared/navbar/navbar";
import Purchase from "./container/Purchase";

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
