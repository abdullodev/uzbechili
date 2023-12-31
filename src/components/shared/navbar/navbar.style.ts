import { Box } from "@mui/material";
import { styled } from "styled-components";

export const StyledNavbar = styled.div`
  transition: all 0.3s ease !important;
  position: relative;
  z-index: 99;

  &.active {
    position: sticky;
    top: 0;
    z-index: 99;
    transition: 0.2s !important;
    -webkit-box-shadow: 0px 5px 13px -10px rgba(135, 198, 247, 0.87);
    -moz-box-shadow: 0px 5px 13px -10px rgba(135, 198, 247, 0.87);
    box-shadow: 0px 5px 13px -10px rgba(135, 198, 247, 0.87);

    .main-navbar {
      border-radius: 0 0 20px 20px;
    }
  }
`;

export const TopNavbarStyled = styled(Box)`
  width: 100%;
  background-color: #000;
  height: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 13px;
  color: rgba(255, 255, 255, 0.5);
  font-weight: 900;
`;

export const MainNavbarStyled = styled(Box)`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-content: space-between;
  align-items: center;
  padding: 0 32px;
  height: 72px;
  background-color: #fff;

  .arrow {
    svg {
      transform: rotate(180deg);
    }
  }

  .MuiFormControl-root {
    min-width: 148px;
    .MuiSelect-select {
      font-size: 14px !important;
    }
  }
`;

export const LanguageBox = styled(Box)`
  position: relative;
  .MuiButtonBase-root {
    width: 110px;
  }
  .MuiPaper-root {
    position: absolute;
    width: 110px;
    top: 45px;
    left: 0;
    z-index: -1;
    opacity: 0;
    transition: 0.2s ease;
    border-radius: 12px;
    transform: scale(0);
    transform-origin: top;

    &.show {
      top: 40px;
      z-index: 1;
      opacity: 1;
      transform: scale(1);
    }

    .MuiList-root {
      .MuiMenuItem-root {
        &.active {
          background-color: #f5f5f5 !important;
        }
      }
    }
  }
`;
