import { MainBox } from "@/styles/Common.style";
import { Box, Grid, Typography } from "@mui/material";
import { FlexBox, ProductTop } from "./Product.style";
import ProductSlide from "./component/ProductSlide";
import { CommonButton } from "@/components";
import { useNavigate } from "react-router-dom";

const Product = () => {
  const navigate = useNavigate();
  return (
    <MainBox>
      <ProductTop>
        <Typography className="title">Толстовка короткая</Typography>
        <Typography className="title">
          150 000 <span className="currency">uzs</span>
        </Typography>
      </ProductTop>

      <Grid container spacing={2}>
        <Grid item md={9} xs={12}>
          <Box sx={{ width: "100%" }}>
            <ProductSlide />
          </Box>
        </Grid>
        <Grid item md={3} xs={12}>
          <FlexBox>
            <CommonButton title="Savatga qo'shish" className="white" />
            <CommonButton
              title="Hoziroq sotib olish"
              className="blue"
              onClick={() => navigate("/purchase")}
            />
          </FlexBox>
        </Grid>
      </Grid>
    </MainBox>
  );
};

export default Product;
