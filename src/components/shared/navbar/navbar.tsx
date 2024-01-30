import Icons from "@/assets/svgs";
import { CommonButton } from "@/components";
import useGlobalContext from "@/context/useGlobal";
import { isAuth } from "@/services/auth";
import browserStorage from "@/services/storage/browserStorage";
import useOutsideClick from "@/services/useOutsideClick/useOutsideClick";
import {
  Badge,
  Box,
  IconButton,
  MenuItem,
  MenuList,
  Paper,
  Tooltip,
} from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import NavbarProfile from "./components/navbar.profile";
import {
  LanguageBox,
  MainNavbarStyled,
  MediaStyled,
  SidebarMenu,
  StyledNavbar,
  TopNavbarStyled,
} from "./navbar.style";

const Navbar = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const location = useLocation();
  const [tabValue, setTabValue] = useState<string>(location.pathname);
  const [language, setLanguage] = useState<string>(
    browserStorage.get("i18nextLng") ? browserStorage.get("i18nextLng") : "uz"
  );

  const {
    state: { baskets },
    actions: { setAuth },
  } = useGlobalContext();
  const navigate = useNavigate();

  const refLang = useRef(null);

  const handleChangeLang = (lang: string) => {
    setLanguage(lang);
    browserStorage.set("i18nextLng", lang);
    setOpen(false);
  };
  const showNavbar = location.pathname === "/purchase";

  useOutsideClick(refLang, () => {
    setOpen(false);
  });

  const handleChangePage = (newValue: string) => {
    if (newValue !== tabValue) {
      setTabValue(newValue);
      navigate(newValue);
    }
  };

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
  useEffect(() => {
    if (location.pathname) {
      setTabValue(location.pathname);
    }
  }, [location]);

  return (
    <>
      <TopNavbarStyled>NEW WAY TO NEW GENERATION</TopNavbarStyled>
      <StyledNavbar className="main-head">
        <MainNavbarStyled className="main-navbar">
          <IconButton className="menuIcon" onClick={() => setOpenMenu(true)}>
            <Icons.responsiveMenuIcon />
          </IconButton>
          <Box display={"flex"} gap={"14px"} className="design_box">
            {/* <CommonButton title="Menu" startIcon={<Icons.MenuIcon />} /> */}
            <CommonButton
              title="Dizayn yaratish"
              startIcon={<Icons.ShirtIcon />}
              className="designed"
            />
            {/* <CommonButton iconButton icon={<Icons.HeartIcon />} /> */}
          </Box>
          <Box display={"flex"} justifyContent={"center"}>
            <Link to="/">
              <Icons.LogoMain className="logoIcon" />
            </Link>
          </Box>
          <Box
            display={"flex"}
            gap={"14px"}
            justifyContent={"flex-end"}
            alignItems={"center"}
            className="nav_left"
          >
            {/* <CommonButton iconButton icon={<Icons.SearchIcon />} /> */}
            <Tooltip
              title={
                !!baskets.length
                  ? "Savatga o'tish"
                  : "Afsuski hanuzgacha mahsulot tanlamadingiz 😒"
              }
              arrow
            >
              <Badge
                badgeContent={baskets.length}
                sx={{
                  "& .MuiBadge-badge": {
                    color: "#ffffff",
                    backgroundColor: "#0065FF",
                  },
                }}
              >
                <CommonButton
                  iconButton
                  icon={<Icons.CartIcon />}
                  onClick={() => {
                    if (!!baskets.length) {
                      navigate("/baskets");
                    }
                  }}
                />
              </Badge>
            </Tooltip>
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

            {isAuth() ? (
              <NavbarProfile />
            ) : (
              <CommonButton
                title="Kirish"
                startIcon={<Icons.UserIcon />}
                onClick={() => setAuth(true)}
              />
            )}
          </Box>
        </MainNavbarStyled>
      </StyledNavbar>

      {!showNavbar && (
        <MediaStyled>
          <IconButton
            className={tabValue === "/" ? "active" : ""}
            onClick={() => handleChangePage("/")}
          >
            <Icons.responsiveMenuIcon className="menuIcon" />
            <span>Katalog</span>
          </IconButton>
          <IconButton
            className={tabValue.includes("design") ? "active" : ""}
            onClick={() => handleChangePage("/design")}
          >
            <Icons.TshirtIcon />
            <span>Dizaynlarim</span>
          </IconButton>
          <IconButton
            className={tabValue.includes("baskets") ? "active" : ""}
            onClick={() => handleChangePage("/baskets")}
          >
            <Icons.CartIcon />
            <span>Savat</span>
          </IconButton>
          <IconButton
            className={tabValue.includes("orders") ? "active" : ""}
            onClick={() => handleChangePage("/orders")}
          >
            <Icons.OrderIcon />
            <span>Buyurtmalar</span>
          </IconButton>
        </MediaStyled>
      )}

      <div
        className={openMenu ? "menuBack active" : "menuBack"}
        onClick={() => setOpenMenu(false)}
      ></div>

      <SidebarMenu className={openMenu ? "active" : ""}>
        <div className="head">
          <Icons.LogoMain className="logo_main" />
          <IconButton className="close_menu" onClick={() => setOpenMenu(false)}>
            <Icons.closeMenuIcon />
          </IconButton>
        </div>
        <ul>
          <li>Profile</li>
        </ul>
      </SidebarMenu>
    </>
  );
};

export default Navbar;
