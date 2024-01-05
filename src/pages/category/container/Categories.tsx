import { MainBox } from "@/styles/Common.style";
import Category from "../component/Category";
import CategoryHeader from "../component/CategoryHeader";

const Categories = () => {
  return (
    <MainBox style={{ background: "#f5f5f5" }}>
      <CategoryHeader />
      <Category />
    </MainBox>
  );
};

export default Categories;
