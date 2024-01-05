import Icons from "@/assets/svgs";
import { CommonButton } from "@/components";
import { MainBox } from "@/styles/Common.style";
import HomeSlider from "../component/slider/home.slider";
import HomeCategories from "../component/categories/home.categories";

const Home = () => {
  return (
    <MainBox style={{ background: "#f5f5f5" }}>
      <h2>Home</h2>
      <HomeSlider />
      <HomeCategories />
    </MainBox>
  );
};

export default Home;
