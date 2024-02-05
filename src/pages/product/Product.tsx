import { CommonButton } from "@/components";
import useGlobalContext from "@/context/useGlobal";
import { useApi } from "@/hooks/useApi/useApiHooks";
import { isAuth } from "@/services/auth";
import { MainBox } from "@/styles/Common.style";
import { numberFormat } from "@/utils/numberFormat";
import { Box, Grid, Typography } from "@mui/material";
import { get } from "lodash";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FlexBox, ProductTop } from "./Product.style";
import ProductSlide from "./component/ProductSlide";
import { useTranslation } from "react-i18next";

const Product = () => {
  const [size, setSize] = useState<string>("");
  const [color, setColor] = useState<string>("");
  const [checkSize, setCheckSize] = useState<boolean>(false);
  const [checkColor, setCheckColor] = useState<boolean>(false);

  const { id } = useParams<{ id: string }>();
  const {
    actions: { setAuth, addToCart },
  } = useGlobalContext();
  const navigate = useNavigate();
  const { t } = useTranslation();

  const { data: categoryData } = useApi(`product/${id}`);

  const handleAddBasket = () => {
    if (!isAuth()) {
      return setAuth(true);
    }
    if (!color && !size) {
      setCheckSize(true);
      setCheckColor(true);
    } else if (!size) setCheckSize(true);
    else if (!color) setCheckColor(true);
    else if (color && size) {
      const cartData = {
        color,
        size,
        name: get(categoryData, "data.name", ""),
        productId: get(categoryData, "data._id", ""),
        price: get(categoryData, "data.price", 0),
        count: 1,
        image: get(categoryData, "data.imageUrls", [])?.[0],
      };

      addToCart(cartData, true);
    }
  };

  const handlePurchase = () => {
    if (!isAuth()) {
      return setAuth(true);
    }

    if (!color && !size) {
      setCheckSize(true);
      setCheckColor(true);
    } else if (!size) setCheckSize(true);
    else if (!color) setCheckColor(true);
    else if (color && size) {
      const cartData = {
        color,
        size,
        productId: get(categoryData, "data._id", ""),
        price: get(categoryData, "data.price", 0),
        name: get(categoryData, "data.name", ""),
        count: 1,
        image: get(categoryData, "data.imageUrls", [])?.[0],
      };

      addToCart(cartData, true);
      navigate("/purchase");
    }
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
              title={t("product.add_to_basket")}
              className="white"
              onClick={handleAddBasket}
            />
            <CommonButton
              title={t("product.purchase_now")}
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
