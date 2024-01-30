import Footer from "@/components/shared/footer/Footer";
import Navbar from "@/components/shared/navbar/navbar";
import Profile from "./container/Profile";

const index = () => {
  return (
    <div>
      <Navbar />
      <Profile />
      <Footer />
    </div>
  );
};

export default index;
