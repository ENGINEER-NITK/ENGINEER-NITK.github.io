import { Typography } from "@mui/material";
import React, { useEffect, useRef } from 'react';
import starImage from "../../assets/gif/videogame.gif";
import { gsap } from 'gsap';
import easyMeshGradient from 'easy-mesh-gradient';

const GradientText = ({ primary, secondary, ...props }) => {
  const secondaryRef = useRef(null);


  const gradientString = easyMeshGradient({
    seed: '123',
  });

  const boxBackground = `${gradientString}`

  return (
    <Typography
      variant="h2"
      fontWeight="bold"
      color="transparent"
      fontFamily="typography.fontFamily"
      letterSpacing="-1px"
      fontSize="48px"
      className='gradient-text'
      lineHeight="1.2" // Adjust the line height as needed for better appearance
      sx={{
        background: boxBackground, // Gradient colors from top left to bottom right
        backgroundImage: boxBackground, // Fallback for some browsers
        backgroundClip: "text",
        position: "relative",
        webkitBackgroundClip: "text", // For Safari support
        zIndex: 2,
        "& > img": {
          width: "84px", // Adjust the size of the star
          height: "84px", // Adjust the size of the star
          position: "absolute",
          left: "-50px",
          top: "-50px",
          zIndex: 3,
        },
      }}
      {...props}
    >
      <span
        style={{
          display: "inline-block",
          position: "relative",
          zIndex: 4,
          color: "white",
          fontWeight: 300,
          fontSize: '32px',
        }}
      >
        {primary}_
        <img
          src={starImage}
          alt="Star"
          style={{
            height: "70px",
            position: "absolute",
            top: "-20px",
            right: "-60px",
            zIndex: -2,
            rotate: '5deg',
            opacity: 0.5
          }}
        />
      </span>{" "}
      <br />

      <span ref={secondaryRef} style={{
        fontFamily: "cyberpunk, Barlow, tommorow",
        letterSpacing: '-2px',
        zIndex: 2
      }} className='secondary'>{secondary}_</span>
    </Typography>
  );
};

export default GradientText;
