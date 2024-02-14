import { CommonButton } from "@/components";
import { numberFormat } from "@/utils/numberFormat";
import { Alert, Grid, Typography } from "@mui/material";
import { get } from "lodash";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  ProductBottom,
  ProductSlideBox,
  ProductValue,
  SizeTabs,
} from "../Product.style";

interface IProductSlide {
  product: Record<string, any>;
  setSize: React.Dispatch<React.SetStateAction<string>>;
  setColor: React.Dispatch<React.SetStateAction<string>>;
  setCheckSize: React.Dispatch<React.SetStateAction<boolean>>;
  setCheckColor: React.Dispatch<React.SetStateAction<boolean>>;
  size: string;
  color: string;
  checkSize: boolean;
  checkColor: boolean;
}

const ProductSlide = ({
  product,
  color,
  size,
  setColor,
  setSize,
  checkColor,
  setCheckColor,
  checkSize,
  setCheckSize,
}: IProductSlide) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>();

  const { t } = useTranslation();

  const handleChangeSize = (newValue: string) => {
    if (newValue === size) {
      setSize("");
      setCheckSize(false);
    } else {
      setSize(newValue);
    }
  };
  const handleChangeColor = (newValue: string) => {
    if (newValue === color) {
      setColor("");
      setCheckColor(false);
    } else {
      setColor(newValue);
    }
  };

  return (
    <Grid container spacing={"32px"}>
      <Grid item xs={12} md={5.2}>
        <ProductSlideBox>
          <Swiper
            loop={true}
            spaceBetween={10}
            navigation={true}
            thumbs={{
              swiper:
                thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
            }}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper2"
          >
            {get(product, "imageUrls").map((slide: string, index: number) => (
              <SwiperSlide key={slide + index}>
                <img src={import.meta.env.VITE_BASE_URL + slide} alt="slide" />
              </SwiperSlide>
            ))}
          </Swiper>
          <Swiper
            onSwiper={setThumbsSwiper}
            loop={true}
            spaceBetween={10}
            slidesPerView={5}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper"
          >
            {get(product, "imageUrls").map((slide: string, index: number) => (
              <SwiperSlide key={slide + index}>
                <img src={import.meta.env.VITE_BASE_URL + slide} alt="slide" />
              </SwiperSlide>
            ))}
          </Swiper>
        </ProductSlideBox>
      </Grid>
      <ProductBottom>
        <Typography className="title">{get(product, "name", "")}</Typography>{" "}
        <Typography className="price">
          {numberFormat(get(product, "price", ""))}
          <span className="currency"> uzs</span>
        </Typography>
      </ProductBottom>
      <Grid item xs={12} sm={7} md={6.8}>
        <ProductValue className="mb-5">
          <Typography className="title">{t("product.size")}</Typography>
          {!size && checkSize && (
            <Alert severity="error">{t("product.select_size")}</Alert>
          )}
          <SizeTabs className="mt-2">
            {get(product, "sizes", []).map((child: string) => (
              <CommonButton
                title={child}
                className={child === size ? "tab active" : "tab"}
                onClick={() => handleChangeSize(child)}
              />
            ))}
          </SizeTabs>
        </ProductValue>

        <ProductValue className="mb-5">
          <Typography className="title">{t("product.color")}</Typography>
          {!color && checkColor && (
            <Alert severity="error">{t("product.select_color")}</Alert>
          )}
          <SizeTabs className="mt-2">
            {get(product, "color", []).map((child: string) => (
              <CommonButton
                title={child}
                className={child === color ? "tab active" : "tab"}
                onClick={() => handleChangeColor(child)}
              />
            ))}
          </SizeTabs>
        </ProductValue>

        <ProductValue className="mt-4">
          {get(product, "description", "") && (
            <>
              <Typography className="title">{t("product.desc")}</Typography>
              <Typography className="desc mt-2">
                <div
                  dangerouslySetInnerHTML={{
                    __html: get(product, "description", ""),
                  }}
                ></div>
              </Typography>
            </>
          )}
        </ProductValue>
      </Grid>
    </Grid>
  );
};

export default ProductSlide;
