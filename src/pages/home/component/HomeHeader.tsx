import React from "react";
import { Box } from "@mui/material";
import { CommonButton } from "@/components";

const HomeHeader = () => {
  return (
    <Box display={"flex"} justifyContent={"space-between"} mb={2}>
      <h3>Hudilar</h3>
      <CommonButton />
    </Box>
  );
};

export default HomeHeader;
