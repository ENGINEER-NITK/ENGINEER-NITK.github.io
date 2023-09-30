import { Typography } from "@mui/material";
import React, { useEffect, useRef } from 'react';
import starImage from "../../assets/png/trees.png";
import { gsap } from 'gsap';
import easyMeshGradient from 'easy-mesh-gradient';

const GradientText = ({ primary, secondary, ...props }) => {
  const secondaryRef = useRef(null);

  useEffect(() => {
    // GSAP Animation
    const shine = gsap.timeline({ repeat: -1, yoyo: true });

    const animate = () => {
      // Generate a random duration between 1 and 3 seconds
      const randomDuration = Math.random() * 2 + 1;

      shine.fromTo(secondaryRef.current, {
        backgroundPosition: "200% center",
      }, {
        backgroundPosition: "-200% center",
        duration: randomDuration,
        ease: "power1.inOut",
        onComplete: animate, // Call animate again after completion to keep the animation running
      });
    };

    animate(); // Initial call to start the animation
  }, []);

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
          zIndex: 1,
        },
        ".secondary": {
          background: "linear-gradient(90deg, transparent, transparent 47%, red 50%, transparent 53%, transparent)",
          backgroundSize: "200% auto",
          display: "inline-block",
        }
      }}
      {...props}
    >
      <span
        style={{
          display: "inline-block",
          position: "relative",
          zIndex: 4,
          textShadow: `
      -1px -1px 0 #fff,  
       1px -1px 0 #fff,
      -1px  1px 0 #fff,
       1px  1px 0 #fff
    `,
          color: "black",
        }}
      >
        {primary}
        <img
          src={starImage}
          alt="Star"
          style={{
            width: "84px",
            height: "84px",
            marginLeft: "10px", // Optional: To provide some spacing after the primary text
            marginRight: "10px", // Optional: To provide some spacing before the secondary text
            position: "absolute",
            top: "-20px",
            right: "-60px",
          }}
        />
      </span>{" "}
      <br />

      <span ref={secondaryRef} className='secondary'>{secondary}</span>
    </Typography>
  );
};

export default GradientText;
