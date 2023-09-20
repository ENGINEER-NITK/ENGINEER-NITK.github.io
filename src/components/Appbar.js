import React, { useEffect, useRef, useState } from "react";
import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Slide,
  Toolbar,
  Typography,
  useTheme,
} from "@mui/material";
import {
  AiFillGithub,
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiOutlineMenu,
} from "react-icons/ai";
import LogoMascot from "../assets/svg/logo_mascot.svg";
import useGsap from "../hooks/useGsap";
import { FiMenu } from "react-icons/fi";
import { Link } from "react-router-dom";

let navLinks = [
  { title: "Home", path: "/" },
  { title: "Ambassadors", path: "/ambassador" },
  { title: "Events", path: "/events" },
  { title: "Brochure", path: "/brochure" },
  { title: "Accommodation", path: "/accomodation" },
  { title: "Contact", path: "/contact" },
  { title: "Team", path: '/team'}
];

let mainLinks = [
  { title: "Home", path: "/" },
  { title: "Ambassadors", path: "/ambassador" },
  { title: "Events", path: "/events" },
  { title: "Brochure", path: "/brochure" },
  { title: "Accommodation", path: "/accomodation" },
  { title: "Contact", path: "/contact" },
  { title: "Team", path: '/team'}

];

const Appbar = ({ isGuest = false }) => {
  const appbarRef = useRef();
  const theme = useTheme();
  const color = theme.palette.text.primary;

  if (isGuest)
    navLinks = navLinks.filter(
      (_) => _.title === "Brochure" || _.title === "Ambassadors"
    );

  if (isGuest)
    mainLinks = mainLinks.filter(
      (_) => _.title === "Brochure" || _.title === "Ambassadors"
    );

  return (
    <>
      <AppBar className="appbar" ref={appbarRef} elevation={0} position="fixed">
        <Container maxWidth="lg">
          <Toolbar
            disableGutters
            sx={{
              py: 2,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              transition: "background-color 0.3s ease",
              position: "relative", // Set the position to relative for the AppBar
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center" }}>

              <Box className="logo_title">
                <div className="glitch-wrapper">
                  <div className="glitch" data-text="Engi 2K23">Engi 2K23</div>
                </div>
              </Box>{" "}
            </Box>{" "}
            <Box
              sx={{
                display: {
                  md: "flex",
                  xs: "none",
                },
                alignItems: "center",
                color: "white",
                gap: 3,
              }}
            >
              {mainLinks.map((link, index) => (
                <Link to={link.path}>
                  <Typography
                    className="action"
                    fontWeight={600}
                    key={index}
                    variant="body1"
                  >
                    {link.title}{" "}
                  </Typography>{" "}
                </Link>
              ))}{" "}
            </Box>{" "}
            <AppMenu />
          </Toolbar>{" "}
        </Container>{" "}
      </AppBar>
      <div className='appbar-trigger'/>
    </>
  );
};

const AppMenu = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Box  bgcolor="white" color='black'>
      <IconButton onClick={handleClick}>
        <FiMenu />
      </IconButton>{" "}
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            color: "black",
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        {" "}
        {navLinks.map((link) => (
          <Link to={link.path}>
            <MenuItem onClick={handleClose}> {link.title} </MenuItem>
          </Link>
        ))}
      </Menu>{" "}
    </Box>
  );
};

export default Appbar;
