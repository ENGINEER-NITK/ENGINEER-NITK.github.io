import React from 'react';
import { Box, Typography, IconButton, Avatar } from '@mui/material';
import { FiLink, FiLinkedin } from 'react-icons/fi';

const SponsorCard = ({ logo, name, website, linkedin }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        px: 2,
        py:1 ,
        borderRadius: '15px',
        boxShadow: '0 4px 20px 0 rgba(0, 0, 0, 0.12)',
        backgroundColor: 'rgba(255, 255, 255, 0.9)', // slight translucency
        backdropFilter: 'blur(10px)',
      }}
    >
      {/* Circular Logo */}
      <Avatar src={logo} alt={name + " Logo"} sx={{ width: 80, height: 80, boxShadow: '0 2px 10px 0 rgba(0, 0, 0, 0.1)' }} />

      {/* Name */}
      <Typography variant="h6" align="center" mt={2}>
        {name}
      </Typography>

      {/* Website and LinkedIn */}
      <Box mt={2} display="flex" gap={2} justifyContent="center">
        <IconButton
          color="primary"
          href={website}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="website"
          sx={{ backgroundColor: 'rgba(0, 112, 210, 0.1)', '&:hover': { backgroundColor: 'rgba(0, 112, 210, 0.2)' } }}
        >
          <FiLink />
        </IconButton>
        <IconButton
          color="primary"
          href={linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="linkedin"
          sx={{ backgroundColor: 'rgba(0, 112, 210, 0.1)', '&:hover': { backgroundColor: 'rgba(0, 112, 210, 0.2)' } }}
        >
          <FiLinkedin />
        </IconButton>
      </Box>
    </Box>
  );
};

export default SponsorCard;
