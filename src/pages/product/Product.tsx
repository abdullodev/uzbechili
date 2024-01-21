import { MainBox } from "@/styles/Common.style";
import { Box, Grid, Typography } from "@mui/material";
import { FlexBox, ProductTop } from "./Product.style";
import ProductSlide from "./component/ProductSlide";
import { CommonButton } from "@/components";
import { useNavigate, useParams } from "react-router-dom";
import { isAuth } from "@/services/auth";
import useGlobalContext from "@/context/useGlobal";
import { useApi } from "@/hooks/useApi/useApiHooks";
import { get } from "lodash";
import { numberFormat } from "@/utils/numberFormat";
import { useState } from "react";

const Product = () => {
  const [size, setSize] = useState<string>("");
  const [color, setColor] = useState<string>("");
  const [checkSize, setCheckSize] = useState<boolean>(false);
  const [checkColor, setCheckColor] = useState<boolean>(false);

  const { id } = useParams<{ id: string }>();
  const {
    actions: { setAuth },
  } = useGlobalContext();
  const navigate = useNavigate();

  const { data: categoryData } = useApi(`product/${id}`);

  const handleAddBasket = () => {
    if (!isAuth()) {
      setAuth(true);
    }
  };

  const handlePurchase = () => {
    if (!color && !size) {
      setCheckSize(true);
      setCheckColor(true);
    } else if (!size) setCheckSize(true);
    else if (!color) setCheckColor(true);
    else if (color && size) navigate("/purchase");
  };

  return (
    <MainBox>
      <ProductTop>
        <Typography className="title">
          {get(categoryData, "data.name", "")}
        </Typography>
        <Typography className="title">
          {numberFormat(get(categoryData, "data.price", ""))}
          <span className="currency"> uzs</span>
        </Typography>
      </ProductTop>

      <Grid container spacing={2}>
        <Grid item md={9} xs={12}>
          <Box sx={{ width: "100%" }}>
            <ProductSlide
              product={get(categoryData, "data", {})}
              setSize={setSize}
              size={size}
              setColor={setColor}
              color={color}
              checkSize={checkSize}
              setCheckSize={setCheckSize}
              checkColor={checkColor}
              setCheckColor={setCheckColor}
            />
          </Box>
        </Grid>
        <Grid item md={3} xs={12}>
          <FlexBox>
            <CommonButton
              title="Savatga qo'shish"
              className="white"
              onClick={handleAddBasket}
            />
            <CommonButton
              title="Hoziroq sotib olish"
              className="blue"
              onClick={handlePurchase}
            />
          </FlexBox>
        </Grid>
      </Grid>
    </MainBox>
  );
};

export default Product;
