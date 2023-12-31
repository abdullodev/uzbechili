import { styled } from "styled-components";
import { Box, Button } from "@mui/material";

export const MainBox = styled(Box)`
  padding: 24px 120px;
  min-height: 400px;
  background-color: #f5f5f5;

  @media screen and (max-width: 910px) {
    padding: 20px 60px;
  }
  @media screen and (max-width: 720px) {
    padding: 15px 40px;
  }

  @media screen and (max-width: 540px) {
    padding: 15px;
  }
`;

export const ProductBox = styled(Box)`
  height: 320px;
  padding: 10px;
  box-sizing: border-box;
  border-radius: 12px;
  background-color: #fff;
  cursor: pointer;
  border: 1px solid #ffffff;

  &:hover {
    border: 1px solid #eaeaea;
    .product_img {
      filter: brightness(80%);
    }
  }
`;

export const ProductImg = styled(Box)`
  height: 210px;
  width: 100%;
  background-color: #e3edf8;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  transition: all 0.3s ease;

  img {
    max-width: 100%;
    max-height: 100%;
    object-fit: cover;
  }
`;

export const ProductInfo = styled(Box)`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  height: calc(100% - 210px);

  .title {
    font-size: 14px;
    color: #999;
    margin-top: 10px;
    width: 100%;
    display: inline-block;
    white-space: nowrap;
    overflow: hidden !important;
    text-overflow: ellipsis;
  }
`;

export const ProductButton = styled(Button)`
  height: 36px !important;
  border-radius: 8px !important;
  outline: none !important;
  font-size: 14px !important;
  text-transform: inherit !important;
  padding: 0 18px !important;
  color: #000 !important;
  font-weight: 800 !important;
  background-color: #f5f5f5 !important;
  line-height: 16px !important;

  .currency {
    color: #999;
    margin-left: 5px;
  }
  &:hover {
    color: #000 !important;
  }

  .MuiButton-startIcon {
    path {
      stroke: #000 !important;
    }
  }
`;
