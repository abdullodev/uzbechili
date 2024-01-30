import { Box } from "@mui/material";
import { styled } from "styled-components";
import OrderBack from "../../../assets/orderBack.png";

export const OrderStyle = styled(Box)`
  padding: 24px 120px;
  min-height: 800px;
  background: url(${OrderBack});
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

export const OrderBox = styled(Box)`
  background-color: #fff;
  padding: 20px 20px 14px 20px;
  border-radius: 14px;
  -webkit-box-shadow: 0px 0px 7px -5px rgba(34, 60, 80, 0.6);
  -moz-box-shadow: 0px 0px 7px -5px rgba(34, 60, 80, 0.6);
  box-shadow: 0px 0px 7px -5px rgba(34, 60, 80, 0.6);

  .state_box {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 6px;

    .state_title {
      color: #000;
      &.active {
        color: #17c657;
      }
    }

    .state_line {
      width: 100%;
      height: 2px;
      border-radius: 6px;
      background-color: #e9e9e9;

      &.active {
        background-color: #17c657;
      }
    }

    .active {
      .state_title {
        color: #17c657;
      }
      .state_line {
        background-color: #17c657;
      }
    }
    .cancelled {
      .state_title {
        color: red !important;
      }
      .state_line {
        background-color: red !important;
      }
    }
  }
`;

export const DetailsStyle = styled(Box)`
  padding: 24px;
  height: 80vh;

  .box {
    width: 100%;
    margin: 0 auto;
    h2 {
      font-size: 24px;
      color: #000;
    }
    .order_state {
      color: #00d43b;
      font-size: 16px;

      &.cancelled {
        color: #ef3838;
      }
    }
  }
  .border {
    margin: 16px 0;
    width: 100%;
    height: 10px;
    border-bottom: 1px dashed #d9d9d9;
  }

  .order_number {
    color: #0065ff;
  }
`;
