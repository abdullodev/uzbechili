import Icons from "@/assets/svgs";
import { CommonButton } from "@/components";
import Navbar from "@/components/element/navbar/navbar";

const Home = () => {
  return (
    <div>
      <Navbar />
      <h2>salom</h2>
      <CommonButton
        title="Ikki"
        className="designed"
        startIcon={<Icons.MenuIcon />}
      />
    </div>
  );
};

export default Home;
