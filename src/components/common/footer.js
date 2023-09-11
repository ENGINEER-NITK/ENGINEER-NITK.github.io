import React from "react";
import {
  Box,
  Container,
  Grid,
  IconButton,
  Typography,
  useTheme,
} from "@mui/material";
import { FiFacebook, FiInstagram, FiLinkedin, FiTwitter } from "react-icons/fi";
import { Link } from "react-router-dom";

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
              Email: engineerpublicity@nitk.edu.in
            </Typography>
            <Typography variant="body2">
              Phone: +91- 6392569224, 9742259067
            </Typography>
            <Typography variant="body2">
              Address: NH 66, Srinivasnagar, Surathkal Mangalore, Karnataka-
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
          {/*<Grid item xs={12} sm={6} md={3}>*/}
          {/*  <Typography variant="h6">Quick Links</Typography>*/}
          {/*  <Typography variant="body2">Home</Typography>*/}
          {/*  <Typography variant="body2">About Us</Typography>*/}
          {/*  <Typography variant="body2">Services</Typography>*/}
          {/*  <Typography variant="body2">Contact</Typography>*/}
          {/*</Grid>*/}
          {/*<Grid item xs={12} sm={6} md={3}>*/}
          {/*  <Typography variant="h6">Newsletter</Typography>*/}
          {/*  <Typography variant="body2">Subscribe to our newsletter</Typography>*/}
          {/*  /!* Add a newsletter signup form here *!/*/}
          {/*</Grid>*/}
        </Grid>
        {/*<Box mt={3} textAlign="center">*/}
        {/*  <Typography variant="body2">*/}
        {/*    &copy; {new Date().getFullYear()}*/}
        {/*  </Typography>*/}
        {/*</Box>*/}
      </Container>
    </Box>
  );
};

export default Footer;
