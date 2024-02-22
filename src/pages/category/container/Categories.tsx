import { MainBox } from "@/styles/Common.style";
import Category from "../component/Category";
// import CategoryHeader from "../component/CategoryHeader";
import { useScrollTop } from "@/utils/scrollTop";
// import { PromocodeStyle } from "@/pages/home/container/Home.style";
// import Icons from "@/assets/svgs";
// import { useTranslation } from "react-i18next";

const Categories = () => {
  useScrollTop();
  // const { t } = useTranslation();

  return (
    <MainBox>
      {/* <CategoryHeader /> */}
      {/* <PromocodeStyle>
        <Icons.promIcon />
        {t("category.promocode").replace("{{value}}", "OZBECHILI")}
      </PromocodeStyle> */}
      <Category />
    </MainBox>
  );
};

export default Categories;
