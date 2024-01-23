import * as React from "react";
import Icons from "@/assets/svgs";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import Menu from "@mui/material/Menu";
import Tooltip from "@mui/material/Tooltip";
import { StyledProfileMenuItem } from "../navbar.style";

export default function NavbarProfile() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const logout = () => {
    localStorage.clear();
    location.pathname = "";
  };

  return (
    <>
      <Box sx={{ display: "flex", alignItems: "center", textAlign: "center" }}>
        <Tooltip title={"Account"}>
          <IconButton
            onClick={handleClick}
            size="small"
            aria-controls={open ? "account-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
          >
            <Avatar
              sx={{ background: "#F5F4F2", width: "42px", height: "42px" }}
            >
              <Icons.UserIcon />
            </Avatar>
          </IconButton>
        </Tooltip>
      </Box>

      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <StyledProfileMenuItem
          className={location.pathname === "/profile" ? "active" : ""}
        >
          <ListItemIcon>
            <Icons.userIcon />
          </ListItemIcon>
          Profile
        </StyledProfileMenuItem>
        <StyledProfileMenuItem onClick={logout}>
          <ListItemIcon>
            <Icons.logoutIcon />
          </ListItemIcon>
          Logout
        </StyledProfileMenuItem>
      </Menu>
    </>
  );
}
