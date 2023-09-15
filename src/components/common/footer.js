import React from "react";
import {
  Box, Button,
  Container,
  Grid,
  IconButton,
  Typography,
  useTheme,
} from '@mui/material';
import { FiBell, FiFacebook, FiInstagram, FiLinkedin, FiTwitter } from 'react-icons/fi';
import { Link } from "react-router-dom";
import { red } from '@mui/material/colors';

const Footer = () => {
  const theme = useTheme();

  return (
    <Box
      bgcolor={theme.palette.background.default}
      py={3}
      pt={6}
      px={theme.spacing(2)}
      color={theme.palette.text.secondary}
    >
      <Container maxWidth="lg">
        <Grid container spacing={3} justifyContent="space-between">
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6">Contact Us</Typography>
            <Typography variant="body2">
              Email: engineernitkpublicity@gmail.com
            </Typography>
            <Typography variant="body2">
              Phone: +91- 6392569224, 9742259067, 9632840501
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
            {/*<a target="_blank" href="https://google.com">*/}
            {/*  <IconButton color="inherit">*/}
            {/*    <FiTwitter />*/}
            {/*  </IconButton>*/}
            {/*</a>*/}

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
            <Typography variant="body2">Home</Typography>
            <Typography variant="body2">About Us</Typography>
            <Typography variant="body2">Services</Typography>
            <Typography variant="body2">Contact</Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6">Subscribe</Typography>
            <SubscribeButton />
          </Grid>
        </Grid>
        <Box mt={3} textAlign="center">
          <Typography variant="body2">
            &copy; {new Date().getFullYear()}
          </Typography>
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
      Subscribe
    </Button>
  );
}

export default Footer;
