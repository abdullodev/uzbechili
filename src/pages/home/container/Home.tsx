import Icons from "@/assets/svgs";
import { CommonButton } from "@/components";
import { MainBox } from "@/styles/Common.style";
import HomeHeader from "../component/HomeHeader";
import HomeCategories from "../component/HomeCategories";

const Home = () => {
  return (
    <MainBox style={{ background: "#f5f5f5" }}>
      <HomeHeader />
      <HomeCategories />
    </MainBox>
  );
};

export default Home;
