import React from "react";
import { NotFoundStyle } from "./NotFound.style";
import { Typography } from "@mui/material";

const NotFound = () => {
  return (
    <NotFoundStyle>
      <Typography component={"h2"} className="not_found">
        404 | Page not found
      </Typography>
    </NotFoundStyle>
  );
};

export default NotFound;
