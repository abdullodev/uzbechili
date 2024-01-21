import { Swiper, SwiperSlide } from "swiper/react";

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
import { useApi } from "@/hooks/useApi/useApiHooks";
import { get } from "lodash";

const HomeSlider = () => {
  // const navigate = useNavigate();

  const { data } = useApi("banner");

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
        {get(data, "data", []).map((slide: Record<string, any>) => (
          <SwiperSlide key={slide._id}>
            <img
              src={import.meta.env.VITE_BASE_URL + slide.imageUrl}
              alt={slide.imageUrl}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </HomeSlideStyle>
  );
};

export default HomeSlider;
