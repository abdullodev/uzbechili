import { Typography } from "@mui/material";
import { NotFoundStyle } from "./NotFound.style";

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
