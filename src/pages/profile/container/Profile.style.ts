import { Box } from "@mui/material";
import { styled } from "styled-components";

export const ProfileStyle = styled(Box)`
  min-height: 500px;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 32px 20px;
  background-color: #f5f5f5;

  .user-box {
    width: 290px;
  }

  .border {
    width: 100%;
    height: 1px;
    background-color: #d9d9d9;
    margin: 30px 0;
  }

  .info {
    span {
      font-size: 16px;
      color: #999;
    }
  }
  .bottom {
    margin-top: 30px;
  }
`;

export const ModalStyle = styled(Box)`
  width: 300px;
  position: absolute;
  top: 50%;
  left: 50%;
  background-color: #fff;
  border-radius: 10px;
  padding: 12px;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  gap: 20px;

  h3 {
    text-align: center;
    font-size: 20px;
  }
`;
