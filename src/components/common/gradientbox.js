import { Box } from "@mui/material";
import React from "react";
import easyMeshGradient from 'easy-mesh-gradient';
import barcode from '../../assets/png/barcode.webp'
const GradientBox = ({
  children,
  height = "auto",
  background = "linear-gradient(to top left, #00b8ff, transparent 75%)",
  img = null,
  rotate = "-20deg",
  size = "medium",
  className='gradient-box',
  action = false,
  ...props
}) => {

  return (
    <Box sx={{
      overflow: 'hidden',
      position: 'relative',

      '::after': {
        content: '""',
        position: 'absolute',
        bottom: -31,
        left: -30,
        width: '50px', // Adjust size here
        height: '50px', // Adjust size here
        backgroundColor: 'black', // Adjust color here
        zIndex: 99,
        border: '5px solid #f2e900',
        rotate: '45deg'
      },
      '::before': {
        content: '"RGS"',
        position: 'absolute',
        right: 31,
        bottom: 0,
        width: '50px', // Adjust size here
        backgroundColor: 'black', // Adjust color here
        zIndex: 99,
        textAlign: 'center',
        fontSize: '9px',
        fontFamily: 'Barlow',
        letterSpacing: '1px'
      },
    }}>
      <Box
        sx={{
          position: 'absolute',
          right: 0,
          top: '50%',
          transform: 'translateY(-85%)',
          zIndex: 9999,
          rotate: '90deg',
          backgroundColor: '#f2e900'
        }}
      >
        <img width='75px'  src={barcode} alt="Barcode" />
      </Box>
    <Box
      py={size === "medium" ? 8 : size === "small" ? 6 : 10}
      px={size === "medium" ? 4 : size === "small" ? 3 : 5}
      display="flex"
      height={height}
      position="relative"
      overflow="hidden"
      className={className}
      // Add the background image here
      sx={{
        '::after': {
          content: '"/// ENGINEER.MODULE_HIGHLIGHT"',
          position: 'absolute',
          left: 31,
          top: 0,
          zIndex: 99,
          fontSize: '9px',
          fontFamily: 'Barlow',
          letterSpacing: '1px',
          py: 0.5
        },
        background: background,
        backgroundSize: "cover",
        backgroundPosition: "center",
        zIndex:1,
        border: '5px solid #f2e900',
        "&::before": {
          content: "''",
          position: "absolute",
          width: '100%',
          height: '250px',
          bottom: 0,
          right: 0,
          backgroundImage: `url(${img})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 1, // Adjust opacity as needed
          zIndex: -1,
          backgroundRepeat: 'no-repeat',// Place it behind the main content
        },

      }}
      {...props}
    >
      {children}
      {img && (
        <Box
          component="img"
          // src={img} // Replace with the actual image URL
          height="50%"
          position="absolute"
          right="-5%"
          bottom="-5%"
          sx={{
            display: "block",
            // rotate: rotate,
            zIndex:0
          }}
        />
      )}
    </Box>
    </Box>
  );
};

export default GradientBox;
