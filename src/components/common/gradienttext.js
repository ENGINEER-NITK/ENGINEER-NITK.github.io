import { Typography } from "@mui/material";
import React from "react";

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
        webkitBackgroundClip: "text", // For Safari support
      }}
      {...props}
    >
      {primary} <br /> {secondary}
    </Typography>
  );
};

export default GradientText;
