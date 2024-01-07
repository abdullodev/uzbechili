import React from "react";
import { Grid } from "@mui/material";
import { CategoryBox, HomeCategoriesStyle } from "../../container/Home.style";
import Typography from "@mui/material/Typography";
import { CommonButton } from "@/components";
import Icons from "@/assets/svgs";
import { useNavigate } from "react-router-dom";
import { useScrollTop } from "@/utils/scrollTop";

interface ICategories {
  _id: string;
  isReady: boolean;
  img: string;
  title: string;
}
const categories: ICategories[] = [
  {
    _id: "1",
    isReady: true,
    img: "https://loloclo.ru/upload/iblock/e76/e7694823d67e335d2c995d588993fcb5.jpg",
    title: "Futbolkalar",
  },
  {
    _id: "2",
    isReady: false,
    img: "https://loloclo.ru/upload/iblock/e76/e7694823d67e335d2c995d588993fcb5.jpg",
    title: "Hudilar",
  },
  {
    _id: "3",
    isReady: true,
    img: "https://loloclo.ru/upload/iblock/e76/e7694823d67e335d2c995d588993fcb5.jpg",
    title: "Futbolkalar",
  },
  {
    _id: "4",
    isReady: false,
    img: "https://loloclo.ru/upload/iblock/e76/e7694823d67e335d2c995d588993fcb5.jpg",
    title: "Oversayzlar",
  },
];

const HomeCategories = () => {
  const navigate = useNavigate();

  return (
    <HomeCategoriesStyle>
      <Typography component={"h2"} variant="h4" className="text-center my-5">
        KATEGORIYALAR
      </Typography>

      <Grid container spacing={2}>
        {categories.map((category) => (
          <Grid item md={4} sm={6} xs={12} key={category._id}>
            <CategoryBox
              onClick={() => {
                if (category.isReady) {
                  navigate(`category/${category._id}`);
                }
              }}
              className={!category.isReady ? "disabled" : ""}
            >
              {!category.isReady && (
                <CommonButton
                  startIcon={<Icons.tezIcon />}
                  title="TEZ ORADA"
                  className="designed"
                />
              )}
              <img src={category.img} alt="img" className="category_img" />
              <Typography variant="h5" className="category_name">
                {category.title}
              </Typography>
            </CategoryBox>
          </Grid>
        ))}
      </Grid>
    </HomeCategoriesStyle>
  );
};

export default HomeCategories;
