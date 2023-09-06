import React from 'react';
import {
    Box,
    Container,
    Grid,
    IconButton,
    Typography,
    useTheme,
} from '@mui/material';
import {FiFacebook, FiInstagram, FiLinkedin, FiTwitter} from "react-icons/fi";

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
                        <Typography variant='body2'>Email: info@example.com</Typography>
                        <Typography variant='body2'>Phone: +1 (123) 456-7890</Typography>
                        <Typography variant='body2'>Address: 123 Main Street, City</Typography>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <Typography variant="h6">Follow Us</Typography>
                        <IconButton color="inherit">
                            <FiFacebook />
                        </IconButton>
                        <IconButton color="inherit">
                            <FiTwitter />
                        </IconButton>
                        <IconButton color="inherit">
                            <FiInstagram />
                        </IconButton>
                        <IconButton color="inherit">
                            <FiLinkedin />
                        </IconButton>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <Typography variant="h6">Quick Links</Typography>
                        <Typography variant='body2'>Home</Typography>
                        <Typography variant='body2'>About Us</Typography>
                        <Typography variant='body2'>Services</Typography>
                        <Typography variant='body2'>Contact</Typography>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <Typography variant="h6">Newsletter</Typography>
                        <Typography variant='body2'>Subscribe to our newsletter</Typography>
                        {/* Add a newsletter signup form here */}
                    </Grid>
                </Grid>
                <Box mt={3} textAlign="center">
                    <Typography  variant="body2">
                        &copy; {new Date().getFullYear()} Your Company. All rights reserved.
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
};

export default Footer;
