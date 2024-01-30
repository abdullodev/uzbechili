import { CommonButton } from "@/components";
import { Alert, Grid, Typography } from "@mui/material";
import { get } from "lodash";
import { useState } from "react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { ProductSlideBox, ProductValue, SizeTabs } from "../Product.style";

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
    <Grid container spacing={2}>
      <Grid item xs={12} md={4}>
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
            slidesPerView={4}
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
      <Grid item xs={12} md={6}>
        <ProductValue className="mb-5">
          <Typography className="title">O'lcham</Typography>
          {!size && checkSize && (
            <Alert severity="error">O'lchamni tanlang</Alert>
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
          <Typography className="title">Ranglar</Typography>
          {!color && checkColor && (
            <Alert severity="error">Rangni tanlang</Alert>
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
              <Typography className="title">Izoh</Typography>
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
