import { MainBox } from "@/styles/Common.style";
import Category from "../component/Category";
import CategoryHeader from "../component/CategoryHeader";
import { useScrollTop } from "@/utils/scrollTop";
import { PromocodeStyle } from "@/pages/home/container/Home.style";
import Icons from "@/assets/svgs";

const Categories = () => {
  useScrollTop();
  return (
    <MainBox>
      <CategoryHeader />
      <PromocodeStyle>
        <Icons.promIcon />
        Birinchi buyurtmaga "OZBECHILI" promokodi orqali 10% chegirmaga ega
        bo'ling
      </PromocodeStyle>
      <Category />
    </MainBox>
  );
};

export default Categories;
