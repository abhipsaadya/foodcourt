import React, { useState } from "react";
import { AppBar, Drawer, IconButton, Toolbar, Typography } from "@mui/material";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";
import '../../style/HeaderStyles.css';
import MenuIcon from "@mui/icons-material/Menu";

const Header = () => {
  const [mobileopen, setMobileopen] = useState(false);
  const handleClick = () => {
    setMobileopen(!mobileopen);
  };

  const drawer = (
    <Box onClick={handleClick} sx={{ textAlign: "center" }}>
      <Typography
        color={"goldenrod"}
        variant="h6"
        component="div"
        sx={{ flexGrow: 1 }}
      >
        <FastfoodIcon />
        My Resturant
      </Typography>

      <ul className="mobile-navigation">
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/menu"}>Menu </Link>
        </li>
        <li>
          <Link to={"/contact"}>Contact </Link>
        </li>
        <li>
          <Link to={"/about"}>About </Link>
        </li>
        <li>
          <Link to={"*"}></Link>
        </li>
      </ul>
    </Box>
  );

  return (
    <>
      <Box>
        <AppBar component={"nav"} sx={{ bgcolor: "black" }}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              sx={{ mr: 2, display: { sm: "none" } }}
              onClick={handleClick}
            >
              <MenuIcon />
            </IconButton>

            <Typography
              color={"goldenrod"}
              variant="h6"
              component="div"
              sx={{ flexGrow: 1 }}
            >
              <FastfoodIcon />
              My Resturant
            </Typography>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              <ul className="nav-menu">
                <li>
                  <Link to={"/"}>Home</Link>
                </li>
                <li>
                  <Link to={"/menu"}>Menu </Link>
                </li>
                <li>
                  <Link to={"/contact"}>Contact </Link>
                </li>
                <li>
                  <Link to={"/about"}>About </Link>
                </li>
                <li>
                  <Link to={"*"}></Link>
                </li>
              </ul>
            </Box>
          </Toolbar>
        </AppBar>
        <Box component="nav">
          <Drawer
            variant="temporary"
            open={mobileopen}
            onClose={handleClick}
            sx={{ display: { xs: "block", sm: "none" } }}
          >
            {drawer}
          </Drawer>
        </Box >
        <Box className="menu">
        <Toolbar/>
        </Box>
       
      </Box>
    </>
  );
};

export default Header;
