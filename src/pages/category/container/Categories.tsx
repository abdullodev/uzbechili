import { MainBox } from "@/styles/Common.style";
import Category from "../component/Category";
import CategoryHeader from "../component/CategoryHeader";
import { useScrollTop } from "@/utils/scrollTop";
import { PromocodeStyle } from "@/pages/home/container/Home.style";
import Icons from "@/assets/svgs";
import { useApi } from "@/hooks/useApi/useApiHooks";
import { numberFormat } from "@/utils/numberFormat";
import { get } from "lodash";

const Categories = () => {
  useScrollTop();

  const { data: promocode } = useApi("promo-code/65accb9c527dbdb82619e8cd");

  return (
    <MainBox>
      <CategoryHeader />
      <PromocodeStyle>
        <Icons.promIcon />
        Birinchi buyurtmaga "OZBECHILI" promokodi orqali{" "}
        {numberFormat(get(promocode, "data.amount", "0"))}{" "}
        {get(promocode, "data.currency", "uzs")} chegirmaga ega bo'ling
      </PromocodeStyle>
      <Category />
    </MainBox>
  );
};

export default Categories;
