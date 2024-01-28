import { Box } from "@mui/material";
import { styled } from "styled-components";
import OrderBack from "../../../assets/orderBack.png";

export const OrderStyle = styled(Box)`
  padding: 24px 120px;
  min-height: 800px;
  background: url(${OrderBack});
  background-size: cover;
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
    grid-template-columns: 1fr 1fr;
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
  }
`;
