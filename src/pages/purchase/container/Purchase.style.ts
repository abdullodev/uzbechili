import { Box } from "@mui/material";
import { styled } from "styled-components";
import purchaseBack from "../../../assets/purchaseBack.png";

export const PurchaseStyle = styled(Box)`
  padding: 24px 120px;
  min-height: 800px;
  background: url(${purchaseBack});
  background-size: cover;

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

export const ContactView = styled(Box)`
  width: 100%;
  padding: 24px;
  border-radius: 12px;
  background-color: #fff;
  min-height: 182px;

  .header_box {
    height: 48px;
    display: flex;
    align-items: flex-start;
    border-bottom: 1px dashed #e9e9e9;

    .iconBox {
      width: 32px;
      height: 32px;
      border-radius: 50%;
      border: 1px solid #d9d9d9;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`;

export const ArrivedView = styled(Box)`
  width: 100%;
  padding: 24px;
  border-radius: 12px;
  background-color: #fff;
  min-height: 630px;

  .header_box {
    height: 48px;
    display: flex;
    align-items: flex-start;
    border-bottom: 1px dashed #e9e9e9;

    .iconBox {
      width: 32px;
      height: 32px;
      border-radius: 50%;
      border: 1px solid #d9d9d9;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`;

export const PaymentView = styled(Box)`
  position: sticky;
  top: 80px;
  padding: 24px;
  width: 100%;
  border-radius: 12px;
  background-color: #fff;
  min-height: 402px;

  .header_box {
    height: 48px;
    display: flex;
    align-items: flex-start;
    border-bottom: 1px dashed #e9e9e9;

    .iconBox {
      width: 32px;
      height: 32px;
      border-radius: 50%;
      border: 1px solid #d9d9d9;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`;

export const ArriveBox = styled(Box)`
  height: 63px;
  width: 100%;
  border-radius: 10px;
  background-color: #f5f5f5;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 10px;

  p {
    font-size: 14px;
    color: #999;
  }
  span {
    font-size: 16px;
    color: #000;
    font-weight: 700;
  }

  &.designed {
    border-radius: 10px;
    background: var(
      --secondary,
      linear-gradient(90deg, #ff5c4d 0%, #eb469f 40%, #8341ef 100%)
    );
    height: 48px;
    padding: 12px;

    p {
      color: #fff;
    }
  }
`;
