import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

import { useNavigate } from "react-router-dom";
import {
  A11y,
  Autoplay,
  Controller,
  EffectFade,
  Navigation,
  Pagination,
  Scrollbar,
} from "swiper/modules";
import { HomeSlideStyle } from "../../container/Home.style";
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

const HomeSlider = () => {
  // const navigate = useNavigate();

  // const { data: settings } = useApi("settings-general");

  return (
    <HomeSlideStyle>
      <Swiper
        allowSlideNext
        allowSlidePrev
        modules={[
          Navigation,
          Pagination,
          Scrollbar,
          A11y,
          Controller,
          EffectFade,
          Autoplay,
        ]}
        spaceBetween={50}
        autoplay={true}
        slidesPerView={"auto"}
        effect={"fade"}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        // loop={true}
        // onSwiper={(swiper) => console.log(swiper)}
        // onSlideChange={() => console.log("slide change")}
      >
        {SLIDERS.map((slide) => (
          <SwiperSlide key={slide._id}>
            <img src={slide.img} alt="slide" />
          </SwiperSlide>
        ))}
      </Swiper>
    </HomeSlideStyle>
  );
};

export default HomeSlider;
