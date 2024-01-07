import Icons from "@/assets/svgs";
import { CommonButton } from "@/components";
import { Box, Typography } from "@mui/material";
import { FooterStyled } from "./Footer.style";

const Footer = () => {
  return (
    <FooterStyled>
      <Box className="footer_top">
        <Icons.LogoMain />
        <Box className="footer_info">
          <p>+998 97 448 15 12</p>
          <div className="d-flex direction-column gap-1">
            <span>ozbechili@gmail.com</span>
            <span className="location">Tasheknt, Uzbekistan</span>
          </div>
          <CommonButton title="Ariza qoldirish" />
        </Box>
      </Box>
      <Box className="footer_bottom">
        <Box className="socials">
          <a href="#" className="social">
            <Icons.InstagramIcon />
          </a>
          <a href="#" className="social">
            <Icons.tgIcon />
          </a>
          <a href="#" className="social">
            <Icons.facebookIcon />
          </a>
        </Box>
        <Typography component={"p"} variant="h5" className="foot_text">
          © 2023. Saytda joylashtirilgan barcha materiallar (jumladan, tovarlar
          va xizmatlarning nomlari va tavsiflari, foto va video materiallar,
          rasmlar, ma'lumotlar bazalari va boshqalar), shuningdek, sayt dizayni
          mualliflik huquqiga ega. Mualliflik huquqi egasining yozma roziligisiz
          sayt materiallaridan nusxa ko'chirish, ularni tarqatish, shuningdek
          har qanday boshqa usulda foydalanish taqiqlanadi.
        </Typography>
      </Box>
    </FooterStyled>
  );
};

export default Footer;
