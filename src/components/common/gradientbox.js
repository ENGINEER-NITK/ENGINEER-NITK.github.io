import { Box } from "@mui/material";
import React from "react";

const GradientBox = ({
  children,
  height = "auto",
  background = "linear-gradient(to top left, #263238, transparent)",
  img = null,
  rotate = "-20deg",
  size = "medium",
  ...props
}) => {
  return (
    <Box
      py={size === "medium" ? 8 : size === "small" ? 6 : 10}
      px={size === "medium" ? 4 : size === "small" ? 3 : 5}
      display="flex"
      height={height}
      position="relative"
      overflow="hidden"
      className="gradient-box"
      // Add the background image here
      sx={{
        background,
        backgroundSize: "cover",
        backgroundPosition: "center",
        borderRadius: "18px",
        boxSizing: "border-box",
        zIndex:1,
        "&::before": {
          content: "''",
          position: "absolute",
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          backgroundImage: `url(${img})`, // Replace with your background image URL
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.5, // Adjust opacity as needed
          zIndex: -1 // Place it behind the main content
        }
        
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
  );
};

export default GradientBox;
