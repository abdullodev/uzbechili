import { Box } from "@mui/material";
import { styled } from "styled-components";

export const HomeSlideStyle = styled(Box)`
  .swiper {
    width: 100%;
    height: 100%;
    height: 400px;
    overflow: hidden;
    border-radius: 24px;
    position: relative;

    .swiper-slide {
      text-align: center;
      font-size: 18px;
      background: #fff;
      border-radius: 24px;
      background-color: #f5f5f5;
      height: 100%;
      /* Center slide text vertically */
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .swiper-button-prev::after,
    .swiper-button-next::after {
      font-size: 15px;
      font-weight: 900;
      color: #000;
      -webkit-box-shadow: 0px 0px 11px -5px rgba(100, 175, 232, 0.6);
      -moz-box-shadow: 0px 0px 11px -5px rgba(100, 175, 232, 0.6);
      box-shadow: 0px 0px 11px -5px rgba(100, 175, 232, 0.6);
    }
    .swiper-button-prev {
      margin-left: 24px;
    }
    .swiper-button-next {
      margin-right: 24px;
    }

    .swiper-button-next,
    .swiper-button-prev {
      position: absolute;
      bottom: 0;
      right: 0;
      width: 48px;
      height: 48px;
      background-color: #fff;
      border-radius: 50%;

      &.swiper-button-disabled {
        pointer-events: visible !important;
        cursor: pointer !important;
        color: red;
      }
    }
    .swiper-slide img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    .swiper-pagination-bullet {
      background-color: #0065ff;
    }
  }
`;
