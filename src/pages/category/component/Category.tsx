import {
  ProductBox,
  ProductButton,
  ProductImg,
  ProductInfo,
} from "@/styles/Common.style";
import { Grid, Typography } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import Hudi from "../../../assets/img-hudi.png";
import { isAuth } from "@/services/auth";
import useGlobalContext from "@/context/useGlobal";
import { useApi } from "@/hooks/useApi/useApiHooks";

const Category = () => {
  const navigate = useNavigate();
  const {
    actions: { setAuth },
  } = useGlobalContext();
  const { id } = useParams<{ id: string }>();
  const { data: subCategories } = useApi(`/categories/${id}`);

  console.log(subCategories);

  return (
    <Grid container spacing={[2, 3]}>
      {new Array(10, 11, 12, 14, 121, 1223, 123123).map(
        (_: any, index: number) => (
          <Grid item xl={2} lg={2.4} md={3} sm={4} xs={6} key={index}>
            <ProductBox
              onClick={() => {
                navigate(`/product/${index}`);
              }}
            >
              <ProductImg className="product_img">
                <img src={Hudi} alt="hudi" />
              </ProductImg>
              <ProductInfo>
                <Typography variant="h3" className="title">
                  Толстовка короткая
                </Typography>
                <ProductButton
                  onClick={(e: any) => {
                    e.stopPropagation();
                    if (!isAuth()) {
                      setAuth(true);
                    }
                  }}
                >
                  150 000<span className="currency"> uzs</span>
                </ProductButton>
              </ProductInfo>
            </ProductBox>
          </Grid>
        )
      )}
    </Grid>
  );
};

export default Category;
