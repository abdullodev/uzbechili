import { styled } from "styled-components";
import { Box } from "@mui/material";

export const FooterStyled = styled(Box)`
  .footer_top {
    padding: 24px 120px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-height: 72px;
    background: #1c1c1c;
    flex-wrap: wrap;
    gap: 20px;

    svg {
      path {
        fill: #fff;
      }
    }

    .footer_info {
      display: flex;
      flex-wrap: wrap;
      gap: 20px;

      span,
      p {
        color: #fff;
        font-size: 16px;
      }

      .location {
        color: rgba(255, 255, 255, 0.5);
      }
    }
  }

  .footer_bottom {
    padding: 24px 120px;
    background-color: #000;
    display: flex;
    flex-direction: column;
    gap: 24px;

    .socials {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 24px;

      .social {
        width: 45px;
        height: 45px;
        background-color: #1c1c1c;
        border-radius: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: all 0.3s ease;

        &:hover {
          svg {
            transform: scale(1.1);
          }
        }
      }
    }
    .foot_text {
      font-size: 14px;
      color: rgba(255, 255, 255, 0.5);
    }
  }
`;
