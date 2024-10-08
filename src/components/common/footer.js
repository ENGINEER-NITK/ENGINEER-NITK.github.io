import React, { useLayoutEffect, useRef, useState } from 'react';
import {
  Box, Button,
  Container,
  Grid,
  IconButton, Stack,
  Typography,
  useTheme,
} from '@mui/material';
import { FiBell, FiFacebook, FiInstagram, FiLinkedin, FiTwitter } from 'react-icons/fi';
import { Link } from "react-router-dom";
import { red } from '@mui/material/colors';
import Logo from '../../assets/png/logo.png';
import gsap from 'gsap';
import Flip from 'gsap/Flip'
import useGsap from '../../hooks/useGsap';

const linksData = [
  { to: '/', text: 'Home' },
  { to: '/ambassador', text: 'Ambassadors' },
  { to: '/events', text: 'Events' },
  { to: '/brochure', text: 'Brochure' },
  { to: '/accommodation', text: 'Accommodation' },
  { to: '/about', text: 'About Us' },
  { to: '/contact', text: 'Contact' },
  { to: '/team', text: 'Team' },
];

const Footer = () => {
  const theme = useTheme();
  const ref = useRef()
  const q = gsap.utils.selector(ref);
  const [toggle, setToggle] = useState(false)
  const [layoutState, setLayoutState] = useState();

  //
  // useGsap(ref.current,()=> {
  //
  // gsap.to('.content', {
  //   scrollTrigger: {
  //     trigger: '.footer',
  //     markers: true,
  //     start: 'top top',
  //     end: '+=2000',
  //     scrub: true,
  //   }
  // })



  const handleClick = () => {
    setToggle(prev => !prev)
    const containers = q(".content")
    const state = Flip.getState(containers)
    setLayoutState(state)
  }


  return (
    <Box
      bgcolor='#fcee0c'
      py={3}
      pt={6}
      px={theme.spacing(2)}
      color={theme.palette.text.secondary}
      className='footer'
      ref={ref}
    >
      <Container maxWidth="lg" >
        <Grid container spacing={3} justifyContent="space-between">
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6">Contact Us</Typography>
            <Typography variant="body2">
              Email: engineernitkpublicity@gmail.com
            </Typography>
            <Typography variant="body2">
              Phone: +91-9096642803, 6200968914
            </Typography>
            <Typography variant="body2">
              Address: NITK, NH 66, Srinivasnagar, Surathkal Mangalore, Karnataka-
              575025
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6">Follow Us</Typography>
            <a target="_blank" href="https://www.facebook.com/EngineerNITK/">
              <IconButton color="inherit">
                <FiFacebook />
              </IconButton>
            </a>

            <a target="_blank" href="https://www.instagram.com/engineernitk/">
              <IconButton color="inherit">
                <FiInstagram />
              </IconButton>
            </a>

            <a
              target="_blank"
              href="https://www.linkedin.com/company/engineer-nitk/?originalSubdomain=in"
            >
              <IconButton color="inherit">
                <FiLinkedin />
              </IconButton>
            </a>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6">Quick Links</Typography>
          {linksData.map((link, index) => (
            <Typography key={index} variant={'body2'}>
              <Link to={link.to}>{link.text}</Link>
            </Typography>
          ))}
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6">Subscribe</Typography>
            <SubscribeButton />
          </Grid>
        </Grid>
        <Box mt={3} textAlign="center">
          <Stack direction='row' justifyContent='center'>
            {
              toggle ?
                <Box data-flip-id='content'  width='18px' height='18px' className='content'>
                  <img  src={Logo} width='100%' height='100%'/>
                </Box>
                :
                <Box data-flip-id='content' width='96px' height='96px' className='content' sx={{
                  position: 'fixed',
                  bottom: '50px',
                  right: '50px'
                }}>
                  <img src={Logo} width='100%' height='100%'/>
                </Box>
            }
            <Typography variant="body2">
            &copy; {new Date().getFullYear()}
              </Typography>
          </Stack>


        </Box>
      </Container>
    </Box>
  );
};

function SubscribeButton() {
  return (
    <Button
      variant="contained"
      color="primary"
      endIcon={<FiBell />}
      style={{
        borderRadius: '10px',
        textTransform: 'none',
        fontWeight: 'bold',
        fontFamily: 'Lato'
      }}
    >
      <a href="https://www.youtube.com/@engineernitk2K23" target="_blank">Subscribe</a>
    </Button>
  );
}

export default Footer;
