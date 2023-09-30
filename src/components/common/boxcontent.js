import { Box, Typography } from "@mui/material";
import React from "react";
import Spacer from "../Spacer";

const BoxContent = ({ title, description, description2, width = "100%", mode = "dark", key }) => {
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
        <span style={{backgroundColor: 'rgba(23 18 24 / 70%)'}}>{description}</span>
      </Typography>
      
      <Typography
        variant="body1"
        fontWeight="bold"
        color={descriptionColor}
        fontFamily="typography.fontFamily"
        fontSize="14px"
        lineHeight="18px"

      >
        <span style={{backgroundColor: 'rgba(23 18 24 / 70%)'}}>{description2}</span>
      </Typography>
    </Box>
  );
};

export default BoxContent;
