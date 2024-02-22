import { Box } from "@mui/material";
import { styled } from "styled-components";

export const HomeSlideStyle = styled(Box)`
  .swiper {
    width: 100%;
    height: 100%;
    height: 580px;
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
      font-size: 16px;
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
      background-color: rgba(255, 255, 255, 0.25);

      &.swiper-button-disabled {
        pointer-events: visible !important;
        cursor: pointer !important;
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

export const PromocodeStyle = styled(Box)`
  width: 100%;
  height: 40px;
  border-radius: 10px;
  border-radius: 8px;
  background: linear-gradient(90deg, #0065ff 0%, #00b2ff 100%);
  height: 56px;
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 0 12px;
  color: #fff;
  font-size: 16px;
  margin-bottom: 12px;

  @media screen and (max-width: 540px) {
    font-size: 12px;
  }
`;

export const HomeCategoriesStyle = styled(Box)`
  .text-center {
    font-size: 44px;
    font-weight: 800;
    color: #000;
    text-transform: uppercase;
  }

  @media screen and (max-width: 540px) {
    .text-center {
      font-size: 30px;
    }
  }
`;
export const CategoryBox = styled(Box)`
  width: 100%;
  height: 280px;
  border-radius: 20px;
  position: relative;
  overflow: hidden;
  background-color: #fff;
  cursor: pointer;
  padding: 16px;
  transition: all 0.3s ease;

  .category_img {
    transition: all 0.3s ease;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    object-fit: cover;
    z-index: 1;
  }
  .category_name {
    transition: all 0.3s ease;
    position: absolute;
    bottom: 10px;
    left: 16px;
    font-size: 20px;
    color: #fff;
    z-index: 2;
    font-weight: 700;
  }

  .designed {
    position: absolute;
    top: 16px;
    right: 16px;
    z-index: 2;
    font-weight: 600;
    height: 27px !important;
    font-size: 14px !important;
  }

  &:hover {
    .category_img {
      filter: brightness(80%);
      transform: scale(1.03);
    }
    .category_name {
      color: #f5f5f5;
    }
  }
  &.disabled {
    cursor: default;
    &:hover {
      .category_img {
        filter: none;
        transform: none;
      }
      .category_name {
        color: #000;
      }
    }
  }
`;

export const AboutHeader = styled(Box)`
  text-align: center;

  .what_is {
    font-size: 44px;
    font-weight: 700;
    color: rgba(0, 0, 0, 0.2);
    margin-top: 16px;
  }

  .what_is_logo {
    transform: scale(1.8);
  }

  @media screen and (max-width: 540px) {
    .what_is_logo {
      transform: scale(0.9);
    }
    .what_is {
      font-size: 30px;
    }
  }
`;

export const AboutVideoBox = styled(Box)`
  width: 560px;
  height: 320px;
  border-radius: 32px;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  margin-top: 40px;

  .vide_btn {
    width: 230px !important;
    height: 48px !important;
    border-radius: 24px !important;
    background-color: #000 !important;
    color: #fff !important;
    padding: 0px !important;
    font-weight: 700 !important;
  }

  @media screen and (max-width: 720px) {
    width: 440px;
  }
  @media screen and (max-width: 540px) {
    width: 100%;
  }
`;
