import { Box, Paper, MenuList, MenuItem } from "@mui/material";
import {
  LanguageBox,
  MainNavbarStyled,
  StyledNavbar,
  TopNavbarStyled,
} from "./navbar.style";
import CommonButton from "../button/Button";
import Icons from "@/assets/svgs";
import { useState, useRef, useEffect } from "react";
import useOutsideClick from "@/services/useOutsideClick/useOutsideClick";
import browserStorage from "@/services/storage/browserStorage";

const Navbar = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [language, setLanguage] = useState<Record<string, string>>(
    browserStorage.get("i18nextLng")
      ? JSON.parse(browserStorage.get("i18nextLng"))
      : {
          value: "uz",
          label: "O'zbek",
        }
  );

  const refLang = useRef(null);

  const handleChangeLang = (lang: Record<string, string>) => {
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
            <Icons.LogoMain />
          </Box>
          <Box display={"flex"} gap={"14px"} justifyContent={"flex-end"}>
            <CommonButton iconButton icon={<Icons.SearchIcon />} />
            <CommonButton iconButton icon={<Icons.CartIcon />} />
            <LanguageBox ref={refLang}>
              <CommonButton
                title={language.label}
                endIcon={<Icons.ArrowDown />}
                onClick={() => setOpen(!open)}
                className={open ? "arrow" : ""}
              />
              <Paper className={open ? "show" : ""}>
                <MenuList>
                  <MenuItem
                    className={language.value === "uz" ? "active" : ""}
                    onClick={() =>
                      handleChangeLang({ value: "uz", label: "O'zbek" })
                    }
                  >
                    O'zbek
                  </MenuItem>
                  <MenuItem
                    className={language.value === "ru" ? "active" : ""}
                    onClick={() =>
                      handleChangeLang({ value: "ru", label: "Русский" })
                    }
                  >
                    Русский
                  </MenuItem>
                  <MenuItem
                    className={language.value === "en" ? "active" : ""}
                    onClick={() =>
                      handleChangeLang({ value: "en", label: "English" })
                    }
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
