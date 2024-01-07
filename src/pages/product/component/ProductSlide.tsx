import { CommonButton } from "@/components";
import { Grid, Typography } from "@mui/material";
import { useState } from "react";
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

interface ISlider {
  _id: string;
  img: string;
}

const SLIDERS: ISlider[] = [
  {
    _id: "1",
    img: "https://images.prom.ua/4243941517_w640_h640_4243941517.jpg",
  },
  {
    _id: "2",
    img: "https://images.prom.ua/4249696172_w640_h640_komplekt-sportivnoj-odezhdy.jpg",
  },
  {
    _id: "3",
    img: "https://images.prom.ua/4255895565_w640_h640_sportivnyj-kostyum-adidas.jpg",
  },
  {
    _id: "4",
    img: "https://images.prom.ua/4247717521_w640_h640_komplekt-sportivnoj-odezhdy.jpg",
  },
  {
    _id: "5",
    img: "https://images.prom.ua/3618757214_w640_h640_3618757214.jpg",
  },
];

const ProductSlide = () => {
  const [size, setSize] = useState<string>("s");
  const [color, setColor] = useState<string>("oq");
  const [more, setMore] = useState<boolean>(false);

  const handleChangeSize = (newValue: string) => {
    setSize(newValue);
  };
  const handleChangeColor = (newValue: string) => {
    setColor(newValue);
    console.log(newValue);
  };
  const info = `
  Lorem ipsum dolor sit amet consectetur. Tincidunt pellentesque
  sagittis id libero. Arcu amet sit nisl ut. Lorem ipsum dolor sit,
  amet consectetur adipisicing elit. Magni consequuntur alias
  molestias fugiat ex a quidem aut sequi quae repellat asperiores qui
  nesciunt totam nostrum eos, repudiandae natus ab commodi!
  `;
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
            {SLIDERS.map((slide) => (
              <SwiperSlide key={slide._id}>
                <img src={slide.img} alt="slide" />
              </SwiperSlide>
            ))}
          </Swiper>
        </ProductSlideBox>
      </Grid>
      <Grid item xs={12} md={6}>
        <ProductValue className="mb-5">
          <Typography className="title">O'lcham</Typography>
          <SizeTabs className="mt-2">
            <CommonButton
              title="s"
              className={size === "s" ? "tab active" : "tab"}
              onClick={() => handleChangeSize("s")}
            />
            <CommonButton
              title="l"
              className={size === "l" ? "tab active" : "tab"}
              onClick={() => handleChangeSize("l")}
            />
            <CommonButton
              title="m"
              className={size === "m" ? "tab active" : "tab"}
              onClick={() => handleChangeSize("m")}
            />
            <CommonButton
              title="x"
              className={size === "x" ? "tab active" : "tab"}
              onClick={() => handleChangeSize("x")}
            />
            <CommonButton
              title="xl"
              className={size === "xl" ? "tab active" : "tab"}
              onClick={() => handleChangeSize("xl")}
            />
          </SizeTabs>
        </ProductValue>

        <ProductValue className="mb-5">
          <Typography className="title">Ranglar</Typography>
          <SizeTabs className="mt-2">
            <CommonButton
              title="oq"
              className={color === "oq" ? "tab active" : "tab"}
              onClick={() => handleChangeColor("oq")}
            />
            <CommonButton
              title="qora"
              className={color === "qora" ? "tab active" : "tab"}
              onClick={() => handleChangeColor("qora")}
            />
            <CommonButton
              title="Ko'k"
              className={color === "ko'k" ? "tab active" : "tab"}
              onClick={() => handleChangeColor("ko'k")}
            />
          </SizeTabs>
        </ProductValue>

        <ProductValue className="mt-4">
          <Typography className="title">Izoh</Typography>
          <Typography className="desc mt-2">
            {!more &&
              (info.length > 100 ? (
                <>
                  {info.slice(0, 100) + "..."}{" "}
                  <b className="more" onClick={() => setMore(true)}>
                    more
                  </b>
                </>
              ) : (
                info
              ))}

            {more && (
              <>
                {info}
                {/* <b className="more" onClick={() => setMore(false)}>
                  loss
                </b> */}
              </>
            )}
          </Typography>
        </ProductValue>
      </Grid>
    </Grid>
  );
};

export default ProductSlide;
