import {
  ProductBox,
  ProductButton,
  ProductImg,
  ProductInfo,
} from "@/styles/Common.style";
import { Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Hudi from "../../../assets/img-hudi.png";

const Category = () => {
  const navigate = useNavigate();
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
                <ProductButton>
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
