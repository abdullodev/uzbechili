import { MainBox } from "@/styles/Common.style";
import Category from "../component/Category";
import CategoryHeader from "../component/CategoryHeader";
import { useScrollTop } from "@/utils/scrollTop";

const Categories = () => {
  useScrollTop();
  return (
    <MainBox style={{ background: "#f5f5f5" }}>
      <CategoryHeader />
      <Category />
    </MainBox>
  );
};

export default Categories;
