import { Box } from "@mui/material";
import { styled } from "styled-components";

export const ProductTop = styled(Box)`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-bottom: 10px;

  .title {
    font-size: 36px;
    color: #000;
    font-weight: 700;

    .currency {
      color: #999;
    }
  }

  @media screen and (max-width: 720px) {
    .title {
      font-size: 22px;
    }
  }

  @media screen and (max-width: 540px) {
    display: none;
  }
`;
export const ProductBottom = styled(Box)`
  display: none;

  @media screen and (max-width: 540px) {
    display: flex;
    flex-direction: column;
    padding: 18px;

    .title {
      font-size: 22px;
      color: #000;
      font-weight: 700;
    }
    .price {
      font-size: 20px;
      color: #0065ff;
      font-weight: 600;
      .currency {
        color: #999;
      }
    }
  }
`;

export const ProductSlideBox = styled(Box)`
  .mySwiper2 {
    width: 100%;
    height: 620px;
    overflow: hidden;
    border-radius: 24px;
    position: relative;

    .swiper-slide {
      text-align: center;
      font-size: 18px;
      background: #fff;
      border-radius: 24px;
      background: linear-gradient(to right, #c1c6cc, #c7cbd4);
      height: 100%;
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
      border-radius: 24px;
    }
    .swiper-pagination-bullet {
      background-color: #0065ff;
    }
  }
  .mySwiper {
    width: 100%;
    height: 80px !important;
    overflow: hidden;
    border-radius: 10px;
    position: relative;
    margin-top: 12px;

    .swiper-slide {
      text-align: center;
      font-size: 18px;
      background: #fff;
      border-radius: 10px;
      background-color: #f5f5f5;
      width: 56px !important;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      -webkit-box-shadow: 0px 3px 9px -8px rgba(34, 60, 80, 0.6);
      -moz-box-shadow: 0px 3px 9px -8px rgba(34, 60, 80, 0.6);
      box-shadow: 0px 3px 9px -8px rgba(34, 60, 80, 0.6);
    }

    .swiper-slide img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 10px;
    }
    .swiper-pagination-bullet {
      background-color: #0065ff;
    }
  }

  @media screen and (max-width: 540px) {
    .mySwiper2 {
      width: 100%;
      height: 620px;
    }
  }
`;

export const ProductValue = styled(Box)`
  .title {
    font-size: 15px;
    font-weight: 700;
    color: #000;
  }
  .desc {
    font-size: 14px;
    font-weight: 600;
    color: #999;

    .more {
      color: #0065ff;
      cursor: pointer;
    }
  }
`;

export const SizeTabs = styled(Box)`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;

  .MuiButton-root {
    text-transform: capitalize !important;
    font-weight: 700 !important;
    border-radius: 8px !important;
    background-color: #fff !important;

    &.active {
      background: #0065ff !important;
      color: #fff !important;
    }
  }
`;
export const FlexBox = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: flex-end;

  .MuiButton-root {
    width: 180px !important;
    height: 48px !important;
  }

  @media screen and (max-width: 900px) {
    flex-direction: row;
  }
`;
