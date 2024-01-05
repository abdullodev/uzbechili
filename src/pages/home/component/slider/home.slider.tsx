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

const HomeSlider = () => {
  const navigate = useNavigate();

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
        {[1, 2, 3, 5].map((slide) => (
          <SwiperSlide key={slide}>
            <h2>Hello {slide}</h2>
          </SwiperSlide>
        ))}
      </Swiper>
    </HomeSlideStyle>
  );
};

export default HomeSlider;
