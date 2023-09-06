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
      }}
      {...props}
    >
      {children}
      {img && (
        <Box
          component="img"
          src={img} // Replace with the actual image URL
          height="100%"
          position="absolute"
          right="-5%"
          bottom="-5%"
          sx={{
            display: "block",
            rotate: rotate,
          }}
        />
      )}
    </Box>
  );
};

export default GradientBox;
