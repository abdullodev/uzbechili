import { MainBox } from "@/styles/Common.style";
import React from "react";
import { Box, Typography } from "@mui/material";
import Icons from "@/assets/svgs";
import { AboutHeader, AboutVideoBox } from "../../container/Home.style";
import { CommonButton } from "@/components";

const About = () => {
  return (
    <MainBox mt={5}>
      <AboutHeader>
        <Icons.LogoMain className="what_is_logo" />
        <Typography variant="h5" component={"h2"} className="what_is">
          BU NIMA?
        </Typography>
      </AboutHeader>

      <AboutVideoBox>
        <CommonButton
          startIcon={<Icons.videoIcon />}
          title="BARCHASI 2 DAQIQADA"
          className="vide_btn"
        />
      </AboutVideoBox>
    </MainBox>
  );
};

export default About;
