import { Box } from "@mui/material";
import { styled } from "styled-components";

export const CategoryBoxStyle = styled(Box)`
  h3 {
    font-size: 24px;
    font-weight: 700;
    margin: 32px 0 20px 0;
  }

  .products_container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    gap: 16px;

    .one_product {
      width: 100%;
      height: 320px;
      padding: 8px;
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

      @media screen and (max-width: 540px) {
        width: 100%;
        height: 380px;
      }
    }

    @media screen and (max-width: 1290px) {
      grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    }

    @media screen and (max-width: 1192px) {
      grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    }
    @media screen and (max-width: 1136px) {
      grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    }
    @media screen and (max-width: 840px) {
      grid-template-columns: 1fr 1fr 1fr 1fr;
    }
    @media screen and (max-width: 688px) {
      grid-template-columns: 1fr 1fr 1fr;
    }
    @media screen and (max-width: 480px) {
      grid-template-columns: 1fr 1fr;
    }
  }
`;
