import Icons from "@/assets/svgs";
import { CommonButton } from "@/components";
import { MainBox } from "@/styles/Common.style";
import { Typography } from "@mui/material";
import { AboutHeader, AboutVideoBox } from "../../container/Home.style";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();

  return (
    <MainBox mt={5}>
      <AboutHeader>
        <Icons.LogoMain className="what_is_logo" />
        <Typography variant="h5" component={"h2"} className="what_is">
          {t("home.what_is_this")}
        </Typography>
      </AboutHeader>

      <AboutVideoBox>
        <CommonButton
          startIcon={<Icons.videoIcon />}
          title={t("home.all_two_minutes")}
          className="vide_btn"
        />
      </AboutVideoBox>
    </MainBox>
  );
};

export default About;
