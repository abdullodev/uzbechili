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
import { useTranslation } from "react-i18next";

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

  const { t, i18n } = useTranslation();
  const refLang = useRef(null);

  const handleChangeLang = (lang: string) => {
    setLanguage(lang);
    browserStorage.set("i18nextLng", lang);
    i18n.changeLanguage(lang);
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

  const hasPurchase = location.pathname.includes("purchase");

  return (
    <>
      <TopNavbarStyled>{t("navbar.new_way")}</TopNavbarStyled>
      <StyledNavbar className="main-head">
        <MainNavbarStyled className="main-navbar">
          <IconButton className="menuIcon" onClick={() => setOpenMenu(true)}>
            <Icons.responsiveMenuIcon />
          </IconButton>
          <Box display={"flex"} gap={"14px"} className="design_box">
            {!hasPurchase ? (
              <CommonButton
                title={t("navbar.make_design")}
                startIcon={<Icons.ShirtIcon />}
                className="designed"
              />
            ) : (
              <CommonButton
                title={t("common.back")}
                startIcon={<Icons.backIcon />}
                onClick={() => navigate(-1)}
              />
            )}
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
            {hasPurchase ? null : (
              <Tooltip
                title={
                  !!baskets.length
                    ? t("navbar.go_to_basket")
                    : t("navbar.no_product")
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
            )}
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
                    {t("navbar.ozbek")}
                  </MenuItem>
                  <MenuItem
                    className={language === "ru" ? "active" : ""}
                    onClick={() => handleChangeLang("ru")}
                  >
                    {t("navbar.ruskiy")}
                  </MenuItem>
                  <MenuItem
                    className={language === "en" ? "active" : ""}
                    onClick={() => handleChangeLang("en")}
                  >
                    {t("navbar.english")}
                  </MenuItem>
                </MenuList>
              </Paper>
            </LanguageBox>

            {hasPurchase ? null : isAuth() ? (
              <NavbarProfile />
            ) : (
              <CommonButton
                title={t("common.enter")}
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
            <span>{t("navbar.katalog")}</span>
          </IconButton>
          <IconButton
            className={tabValue.includes("design") ? "active" : ""}
            onClick={() => {
              if (isAuth()) {
                handleChangePage("/design");
              } else setAuth(true);
            }}
          >
            <Icons.TshirtIcon />
            <span>{t("navbar.my_design")}</span>
          </IconButton>
          <IconButton
            className={tabValue.includes("baskets") ? "active" : ""}
            onClick={() => {
              if (isAuth()) {
                handleChangePage("/baskets");
              } else setAuth(true);
            }}
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
              <Icons.CartIcon />
            </Badge>
            <span>{t("navbar.basket")}</span>
          </IconButton>
          <IconButton
            className={tabValue.includes("orders") ? "active" : ""}
            onClick={() => {
              if (isAuth()) {
                handleChangePage("/orders");
              } else setAuth(true);
            }}
          >
            <Icons.OrderIcon />
            <span>{t("navbar.orders")}</span>
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
        <div className="main_box">
          <ul>
            <li
              onClick={() => {
                if (isAuth()) {
                  navigate("/profile");
                } else {
                  setAuth(true);
                }

                setOpenMenu(false);
              }}
            >
              {t("navbar.profile")}
            </li>
          </ul>

          <div className="d-flex gap-1 pb-4">
            <CommonButton
              title="UZ"
              sx={{ width: "100% !important" }}
              onClick={() => {
                handleChangeLang("uz");
                setOpenMenu(false);
              }}
              className={language === "uz" ? "blue" : ""}
            />
            <CommonButton
              title="RU"
              sx={{ width: "100% !important" }}
              onClick={() => {
                handleChangeLang("ru");
                setOpenMenu(false);
              }}
              className={language === "ru" ? "blue" : ""}
            />
            <CommonButton
              title="EN"
              sx={{ width: "100% !important" }}
              onClick={() => {
                handleChangeLang("en");
                setOpenMenu(false);
              }}
              className={language === "en" ? "blue" : ""}
            />
          </div>
        </div>
      </SidebarMenu>
    </>
  );
};

export default Navbar;
