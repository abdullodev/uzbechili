import { Box } from "@mui/material";
import { styled } from "styled-components";
import BasketBack from "../../../assets/basketBack.png";

export const BasketStyle = styled(Box)`
  width: 100%;
  min-height: 663px;
  background: url(${BasketBack});
  background-size: cover;
  padding: 24px 120px;

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

export const BasketBoxes = styled(Box)`
  min-height: 218px;
  background-color: #fff;
  border-radius: 14px;
  padding: 24px;

  .delete_all {
    color: #999 !important;

    svg {
      path {
        stroke: none !important;
        fill: #999 !important;
      }
    }
  }

  .basket_header {
    padding-bottom: 20px;
    border-bottom: 1px dashed #e9e9e9;
  }
`;

export const PaymentBox = styled(Box)`
  position: sticky;
  top: 80px;
  background-color: #fff;
  border-radius: 14px;
  padding: 24px;

  .payment_header {
    padding-bottom: 30px;
    border-bottom: 1px dashed #e9e9e9;
  }
`;

export const CardView = styled(Box)`
  width: 100%;
  background-color: rgba(0, 0, 0, 0.015);
  padding: 12px 0 10px 16px;
  border-radius: 12px;

  .image_box {
    width: 100%;
    height: 80px;
    border-radius: 10px;
    background-color: #e9e9e9;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      max-width: 90%;
      max-height: 90%;
      object-fit: cover;
    }
  }

  .title {
    width: 100%;
    white-space: nowrap;
    overflow: hidden !important;
    text-overflow: ellipsis;

    code {
      color: #0065ff;
      font-weight: 600;
    }
  }
`;

export const AmountCalcBox = styled(Box)`
  min-width: 90px;
  height: 32px;
  background-color: #f5f5f5;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 8px;

  .amount {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    color: #000;
  }
  .buttonAmount {
    width: 32px;
    height: 32px;
    border-radius: 8px;

    svg {
      path {
        fill: #999;
      }
    }
  }
`;

export const DefaultBasket = styled(Box)`
  width: 100%;
  height: 480px;
  border-radius: 14px;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 10px;

  p {
    color: #999;
  }
`;
