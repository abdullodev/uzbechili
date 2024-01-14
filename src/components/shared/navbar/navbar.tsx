import { Box, Paper, MenuList, MenuItem } from "@mui/material";
import {
  LanguageBox,
  MainNavbarStyled,
  StyledNavbar,
  TopNavbarStyled,
} from "./navbar.style";
import Icons from "@/assets/svgs";
import { useState, useRef, useEffect } from "react";
import useOutsideClick from "@/services/useOutsideClick/useOutsideClick";
import browserStorage from "@/services/storage/browserStorage";
import { CommonButton } from "@/components";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [language, setLanguage] = useState<string>(
    browserStorage.get("i18nextLng") ? browserStorage.get("i18nextLng") : "uz"
  );

  const navigate = useNavigate();

  const refLang = useRef(null);

  const handleChangeLang = (lang: string) => {
    setLanguage(lang);
    browserStorage.set("i18nextLng", lang);
    setOpen(false);
  };

  useOutsideClick(refLang, () => {
    setOpen(false);
  });

  useEffect(() => {
    const handleScrollChange = () => {
      const header = document.querySelector(".main-head");
      if (window.scrollY > 110) {
        header?.classList.add("active");
      } else {
        header?.classList.remove("active");
      }
    };

    document.addEventListener("scroll", handleScrollChange);

    return () => {
      document.removeEventListener("scroll", handleScrollChange);
    };
  }, []);

  return (
    <>
      <TopNavbarStyled>NEW WAY TO NEW GENERATION</TopNavbarStyled>
      <StyledNavbar className="main-head">
        <MainNavbarStyled className="main-navbar">
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
            <Link to="/">
              <Icons.LogoMain />
            </Link>
          </Box>
          <Box display={"flex"} gap={"14px"} justifyContent={"flex-end"}>
            <CommonButton iconButton icon={<Icons.SearchIcon />} />
            <CommonButton
              iconButton
              icon={<Icons.CartIcon />}
              onClick={() => navigate("/baskets")}
            />
            <LanguageBox ref={refLang}>
              <CommonButton
                title={
                  language === "uz"
                    ? "O'zbek"
                    : language === "ru"
                    ? "Русский"
                    : "English"
                }
                endIcon={<Icons.ArrowDown />}
                onClick={() => setOpen(!open)}
                className={open ? "arrow" : ""}
              />
              <Paper className={open ? "show" : ""}>
                <MenuList>
                  <MenuItem
                    className={language === "uz" ? "active" : ""}
                    onClick={() => handleChangeLang("uz")}
                  >
                    O'zbek
                  </MenuItem>
                  <MenuItem
                    className={language === "ru" ? "active" : ""}
                    onClick={() => handleChangeLang("ru")}
                  >
                    Русский
                  </MenuItem>
                  <MenuItem
                    className={language === "en" ? "active" : ""}
                    onClick={() => handleChangeLang("en")}
                  >
                    English
                  </MenuItem>
                </MenuList>
              </Paper>
            </LanguageBox>
            <CommonButton title="Kirish" startIcon={<Icons.UserIcon />} />
          </Box>
        </MainNavbarStyled>
      </StyledNavbar>
    </>
  );
};

export default Navbar;
