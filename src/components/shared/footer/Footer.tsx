import Icons from "@/assets/svgs";
// import { CommonButton } from "@/components";
import { Box, Typography } from "@mui/material";
import { FooterStyled } from "./Footer.style";
import { useTranslation } from "react-i18next";
import { CommonButton } from "@/components";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <FooterStyled>
      <Box className="footer_top">
        <Icons.LogoMain />
        <Box className="footer_info">
          <a href="tel:+998 97 448 15 12">+998 97 448 15 12</a>
          <div className="d-flex direction-column gap-1">
            <a href="mailto: ozbechili@gmail.com">ozbechili@gmail.com</a>
            <span className="location">Tasheknt, Uzbekistan</span>
          </div>
          <CommonButton title="Ariza qoldirish" />
        </Box>
      </Box>
      <Box className="footer_bottom">
        <Box className="socials">
          <a href="https://www.instagram.com/ozbechili_uz" className="social">
            <Icons.InstagramIcon />
          </a>
          <a href="https://t.me/ozbechiliuz" className="social">
            <Icons.tgIcon />
          </a>
          <a href="#" className="social">
            <Icons.facebookIcon />
          </a>
        </Box>
        <Typography component={"p"} variant="h5" className="foot_text">
          {t("home.footer_text")}
        </Typography>
      </Box>
    </FooterStyled>
  );
};

export default Footer;
