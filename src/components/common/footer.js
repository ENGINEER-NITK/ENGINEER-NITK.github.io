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
          <Link to='/'><Typography variant="h6">Quick Links</Typography></Link>
            <Typography variant="body2"><Link to='/'>Home</Link></Typography>
            <Typography variant="body2"><Link to='/events'>Events</Link></Typography>
            <Typography variant="body2"><Link to='/ambassador'>Ambassadors</Link></Typography>
            <Typography variant="body2"><Link to='/brochure'>Brochure</Link></Typography>
            <Typography variant="body2"><Link to='/accomodation'>Accomodation</Link></Typography>
            <Typography variant="body2"><Link to='/about'>About Us</Link></Typography>
            <Typography variant="body2"><Link to='/contact'>Contact</Link></Typography>
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
      <a href="https://www.youtube.com/@engineernitk2K23" target="_blank">Subscribe</a>
    </Button>
  );
}

export default Footer;
