import Icons from "@/assets/svgs";
import { CommonButton } from "@/components";
import { Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import { CategoryBox, HomeCategoriesStyle } from "../../container/Home.style";
import { useApi } from "@/hooks/useApi/useApiHooks";
import { get } from "lodash";
import { useTranslation } from "react-i18next";

const HomeCategories = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const { data: categories } = useApi("categories");

  return (
    <HomeCategoriesStyle>
      <Typography component={"h2"} variant="h4" className="text-center my-5">
        {t("home.categories")}
      </Typography>

      <Grid container spacing={2}>
        {get(categories, "data", []).map((category: Record<string, any>) => (
          <Grid item md={4} sm={6} xs={12} key={category._id}>
            <CategoryBox
              onClick={() => {
                if (!category.isSoon) {
                  navigate(`category/${category._id}`);
                }
              }}
              className={category.isSoon ? "disabled" : ""}
            >
              {category.isSoon && (
                <CommonButton
                  startIcon={<Icons.tezIcon />}
                  title="TEZ ORADA"
                  className="designed"
                />
              )}
              <img
                src={import.meta.env.VITE_BASE_URL + category.imageUrl}
                alt={get(category, "name", "")}
                className="category_img"
              />
              <Typography variant="h5" className="category_name">
                {get(category, "name", "")}
              </Typography>
            </CategoryBox>
          </Grid>
        ))}
      </Grid>
    </HomeCategoriesStyle>
  );
};

export default HomeCategories;
