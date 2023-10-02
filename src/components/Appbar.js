import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import {
  AppBar,
  Box,
  Button,
  Container, Dialog,
  IconButton, List, ListItem, ListItemText,
  Menu,
  MenuItem,
  Slide, Stack,
  Toolbar,
  Typography,
  useTheme,
} from '@mui/material';
import {
  AiFillGithub,
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiOutlineMenu,
} from "react-icons/ai";
import LogoMascot from "../assets/svg/logo_mascot.svg";
import useGsap from "../hooks/useGsap";
import { FiMenu, FiX } from 'react-icons/fi';
import { Link } from "react-router-dom";
import GradientText from './common/gradienttext';
import Spacer from './Spacer';
import Logo from '../assets/png/logo.png'
import gsap from 'gsap';
import Flip from 'gsap/Flip'
import Patternbg from './common/patternbg';

let navLinks = [
  { title: "Home", path: "/" },
  { title: "Ambassadors", path: "/ambassador" },
  { title: "Events", path: "/events" },
  { title: "Brochure", path: "/brochure" },
  { title: "Accommodation", path: "/accomodation" },
  { title: "Contact", path: "/contact" },
  { title: "Team", path: '/team'},
  { title: "Game", path: '/game'}

];

let mainLinks = [
  { title: "Home", path: "/" },
  { title: "Ambassadors", path: "/ambassador" },
  { title: "Events", path: "/events" },
  { title: "Brochure", path: "/brochure" },
  { title: "Accommodation", path: "/accomodation" },
  { title: "Contact", path: "/contact" },
  { title: "Team", path: '/team'},
  { title: "Game", path: '/game'}
];

const Appbar = ({ isGuest = false }) => {
  const appbarRef = useRef();
  const theme = useTheme();
  const color = theme.palette.text.primary;
  const ref = useRef();

  // useLayoutEffect(() => {
  //   const timeline = gsap.timeline({
  //     scrollTrigger: {
  //       trigger: '.appbar-trigger',
  //       markers: true,
  //       start: 'top top',
  //       end: '+=1000',
  //       scrub: true,
  //     }
  //   })
  //
  //   timeline.from('.content', {
  //     scale: 1,
  //     left: 50,
  //     top: 0,
  //     duration: 2
  //   })
  //
  // }, []);


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
      <AppBar className="appbar" ref={appbarRef} elevation={0} position="fixed" sx={{

      }}>
        <Container ref={ref} maxWidth="lg">
          <Toolbar
            disableGutters
            sx={{
              py: 2,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              transition: "background-color 0.3s ease",
              position: "relative",
              // Set the position to relative for the AppBar
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Link to='/'>
              <Box className="logo_title">
                <Typography color='white' variant='h6' className="hero glitch layers" data-text="ENGI 2K23"><span>2K23_</span></Typography>
              </Box>
              {/*    <img src={Logo}  width='72px'/>*/}
              </Link>{" "}

            </Box>{" "}

            <FullscreenNav />
          </Toolbar>{" "}
        </Container>{" "}
      </AppBar>
      <Box  width='100%' height='100px' position='absolute' mt={50} className='appbar-trigger'/>
    </>
  );
};

const FullscreenNav = () => {
  const [open, setOpen] = useState(false);


  const handleClick = () => {
    setOpen(open => !open)
  }

  return (
    <div>
      <IconButton onClick={handleClick}>
        <FiMenu />
      </IconButton>

    <Dialog open={open} fullScreen>
      <Box sx={{
        backgroundColor: 'black'
      }}>
        <Patternbg>

        <Spacer size='md'/>
        <Container maxWidth='md'>
          <Box minHeight='100vh'>
            <Stack alignItems='center' direction='row' justifyContent='space-between'>
              <GradientText primary='Navigation' secondary='Menu'/>
              <IconButton
                edge="end"
                color="inherit"
                onClick={handleClick}
                sx={{
                  display: {
                    xs: 'none',
                    md: 'block'
                  }
                }}
              >
                <FiX />
              </IconButton>
            </Stack>

            <List>
              {mainLinks.map((link) => (
                <Link to={link.path}>
                  <ListItem button key={link.title} onClick={() => { /* Navigate to the path */ }}>
                    <ListItemText primary={link.title} />
                  </ListItem>
                </Link>
              ))}
            </List>
          </Box>
          <IconButton
            edge="end"
            color="inherit"
            onClick={handleClick}
            sx={{
              display: {
                md: 'none',
                xs: 'block'
              },
              position: 'fixed',
              bottom: 20,
              left: '50%',
              transform: 'translateX(-50%)'
            }}
          >
            <FiX />
          </IconButton>
        </Container>
        </Patternbg>
      </Box>
    </Dialog>
    </div>
  );
}

export default Appbar;
