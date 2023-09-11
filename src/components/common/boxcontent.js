import { Box, Typography } from "@mui/material";
import React from "react";

const BoxContent = ({ title, description, width = "100%", mode = "dark" }) => {
  const color = mode === "dark" ? "white" : "black";
  const descriptionColor = mode === "dark" ? "textSecondary" : "grey";
  return (
    <Box width={width}>
      <Typography
        variant="h2"
        fontWeight="bold"
        color={color}
        fontFamily="typography.fontFamily"
        letterSpacing="-1px"
        fontSize="32px"
        gutterBottom
        lineHeight="1.2" // Adjust the line height as needed for better appearance
      >
        {title}
      </Typography>
      <Typography
        variant="body1"
        fontWeight="bold"
        color={descriptionColor}
        fontFamily="typography.fontFamily"
        fontSize="14px"
        lineHeight="18px"
      >
        {description}
      </Typography>
    </Box>
  );
};

export default BoxContent;
