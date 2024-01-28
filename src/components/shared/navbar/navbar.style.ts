import { Box, MenuItem } from "@mui/material";
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
  .menuIcon {
    width: 60px;
    height: 60px;
    display: none;
  }

  @media screen and (max-width: 760px) {
    padding: 0 20px;
    .design_box {
      display: none;
    }
    .nav_left {
      display: none;
    }
    .menuIcon {
      display: block;
      svg {
        path {
          stroke: #000;
        }
      }
    }
  }

  @media screen and (max-width: 540px) {
    padding: 0 16px;
    .logoIcon {
      transform: scale(0.8);
    }
  }
`;

export const SidebarMenu = styled(Box)`
  position: fixed;
  top: 0;
  left: -300px;
  width: 300px;
  height: 100vh;
  overflow: auto;
  background-color: #000;
  z-index: 999990;
  padding: 12px;
  transition: all 0.3s ease;

  &.active {
    left: 0;
  }

  .head {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 60px;
    gap: 10px;
    svg {
      cursor: pointer;
      path {
        fill: #fff;
      }
    }
    .close_menu {
      width: 40px;
      height: 40px;
      border-radius: 10px;
      background-color: rgba(64, 162, 186, 0.15);

      svg {
        path {
          stroke: #fff;
        }
      }
    }
  }
  ul {
    display: flex;
    margin-top: 10px;
    flex-direction: column;
    li {
      list-style: none;
      height: 36px;
      display: flex;
      align-items: center;
      color: #fff;
      background-color: rgba(64, 162, 186, 0.15);
      border-radius: 6px;
      padding: 0 12px;
      cursor: pointer;

      &:hover {
        background-color: rgba(64, 162, 186, 0.25);
      }
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

export const StyledProfileMenuItem = styled(MenuItem)<any>`
  padding: 8px 12px !important;
  color: #000;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  transition: 0.2s ease;
  svg {
    path {
      fill: #0065ff;
    }
  }

  &:hover {
    svg {
      path {
        fill: #0065ff;
      }
    }
  }

  &.active {
    background-color: #f3f3f3;
    svg {
      path {
        fill: #17c657;
      }
    }
  }
`;

export const MediaStyled = styled(Box)`
  display: none;

  @media screen and (max-width: 760px) {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    z-index: 9999;
    background-color: #fff;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    height: 60px;
    box-sizing: border-box;

    .MuiIconButton-root {
      display: flex;
      flex-direction: column;
      justify-content: center;
      font-size: 12px;
      width: 80px;
      border-radius: 10px;
      color: #999;
      text-transform: inherit !important;
      font-weight: 700;
      box-sizing: border-box;
      transition: all 0.3s ease;

      svg {
        margin-bottom: 5px;
        path {
          fill: #999 !important;
          transition: all 0.3s ease;
        }
      }
      .menuIcon {
        path {
          stroke: #999;
        }
      }
      &.active {
        color: #000;

        svg {
          path {
            fill: #000 !important;
          }
        }
        .menuIcon {
          path {
            stroke: #000;
          }
        }
      }
    }
  }
`;
