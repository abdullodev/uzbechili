import {
  Box,
  Paper,
  MenuList,
  ClickAwayListener,
  MenuItem,
} from "@mui/material";
import {
  LanguageBox,
  MainNavbarStyled,
  StyledNavbar,
  TopNavbarStyled,
} from "./navbar.style";
import CommonButton from "../button/Button";
import Icons from "@/assets/svgs";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState<boolean>(false);

  const handleClose = () => {
    setOpen(false);
  };

  function handleListKeyDown(event: React.KeyboardEvent) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === "Escape") {
      setOpen(false);
    }
  }

  return (
    <StyledNavbar>
      <TopNavbarStyled>NEW WAY TO NEW GENERATION</TopNavbarStyled>
      <MainNavbarStyled>
        <Box display={"flex"} gap={"14px"}>
          <CommonButton title="Menu" startIcon={<Icons.MenuIcon />} />
          <CommonButton
            title="Dizayn yaratish"
            startIcon={<Icons.ShirtIcon />}
            className="designed"
          />
          <CommonButton iconButton icon={<Icons.HeartIcon />} />
        </Box>
        <Box display={"flex"} justifyContent={"center"}>
          <Icons.LogoMain />
        </Box>
        <Box display={"flex"} gap={"14px"} justifyContent={"flex-end"}>
          <CommonButton iconButton icon={<Icons.SearchIcon />} />
          <CommonButton iconButton icon={<Icons.CartIcon />} />
          <LanguageBox>
            <CommonButton
              title="Uzbek"
              endIcon={<Icons.ArrowDown />}
              onClick={() => setOpen(!open)}
              className={open ? "arrow" : ""}
            />
            <Paper className={open ? "show" : ""}>
              <MenuList>
                <MenuItem onClick={() => setOpen(false)}>Uzbek</MenuItem>
                <MenuItem onClick={() => setOpen(false)}>Русский</MenuItem>
                <MenuItem onClick={() => setOpen(false)}>English</MenuItem>
              </MenuList>
            </Paper>
          </LanguageBox>
          <CommonButton title="Kirish" startIcon={<Icons.UserIcon />} />
        </Box>
      </MainNavbarStyled>
    </StyledNavbar>
  );
};

export default Navbar;
