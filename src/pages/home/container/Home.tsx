import Icons from "@/assets/svgs";
import { MainBox } from "@/styles/Common.style";
import { useScrollTop } from "@/utils/scrollTop";
import About from "../component/about/About";
import HomeCategories from "../component/categories/home.categories";
import HomeSlider from "../component/slider/home.slider";
import { PromocodeStyle } from "./Home.style";

const Home = () => {
  useScrollTop();

  return (
    <MainBox style={{ background: "#f5f5f5" }}>
      <PromocodeStyle>
        <Icons.promIcon />
        Birinchi buyurtmaga "OZBECHILI" promokodi orqali 10% chegirmaga ega
        bo'ling
      </PromocodeStyle>
      <HomeSlider />
      <HomeCategories />
      <About />
    </MainBox>
  );
};

export default Home;
