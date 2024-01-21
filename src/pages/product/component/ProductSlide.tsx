import { CommonButton } from "@/components";
import { Grid, Typography, Alert } from "@mui/material";
import { get } from "lodash";
import {
  A11y,
  Controller,
  EffectFade,
  Navigation,
  Pagination,
  Scrollbar,
} from "swiper/modules";
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

  console.log(size);
  console.log(color);

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={6}>
        <ProductSlideBox>
          <Swiper
            // allowSlideNext
            // allowSlidePrev
            modules={[
              Navigation,
              Pagination,
              Scrollbar,
              A11y,
              Controller,
              EffectFade,
            ]}
            spaceBetween={50}
            slidesPerView={"auto"}
            effect={"fade"}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            loop={true}
            // onSwiper={(swiper) => console.log(swiper)}
            // onSlideChange={() => console.log("slide change")}
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
