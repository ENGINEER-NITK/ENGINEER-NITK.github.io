import { Typography } from "@mui/material";
import React from "react";
import starImage from "../../assets/png/trees.png";
const GradientText = ({ primary, secondary, ...props }) => {
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
        background: "linear-gradient(to bottom right, #c8f704, #6c7f02)", // Gradient colors from top left to bottom right
        backgroundImage: "linear-gradient(to bottom right, #c8f704, #6c7f02)", // Fallback for some browsers
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
      <br /> {secondary}
    </Typography>
  );
};

export default GradientText;
