import React, { useRef, useState } from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import GradientText from "../common/gradienttext";
import { Card } from "../common/containers";
import { Description, Heading } from "../common/typography";
import Home from "../../assets/svg/Dayflow Work from Home.svg";
import Party from "../../assets/svg/Dayflow Park Life.svg";
import Time from "../../assets/svg/Dayflow Party Time.svg";
import Engineer from "../../assets/png/MacBook Pro.png";
import Spacer from "../Spacer";
import useGsap from "../../hooks/useGsap";
import gsap from "gsap";

const servicesData = [
  {
    title: "Alumni Connect",
    description:
      "Comprehensive web solutions from frontend to backend for a seamless user experience.",
    imageUrl: Home, // Replace with the actual image URL or import the image
  },
  {
    title: "Tech Mela",
    description:
      "Ensure smooth website operation with regular updates, backups, and technical assistance.",
    imageUrl: Party, // Replace with the actual image URL or import the image
  },
  {
    title: "Engicare",
    description:
      "Efficiently configure and manage servers to ensure optimal performance and security.",
    imageUrl: Time, // Replace with the actual image URL or import the image
  },
  {
    title: "Robowars",
    description:
      "Efficiently configure and manage servers to ensure optimal performance and security.",
    imageUrl: Time, // Replace with the actual image URL or import the image
  },
  {
    title: "Tech Conflux",
    description:
      "Efficiently configure and manage servers to ensure optimal performance and security.",
    imageUrl: Time, // Replace with the actual image URL or import the image
  },
  {
    title: "Cultural events",
    description:
      "Efficiently configure and manage servers to ensure optimal performance and security.",
    imageUrl: Time, // Replace with the actual image URL or import the image
  },
  // Add more service objects as needed
];
const Tagline = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  console.log(isMobile);
  const hoverTimeoutRef = useRef(null);
  const isHoveringRef = useRef(false);
  const handleHover = (index) => {
    clearTimeout(hoverTimeoutRef.current);
    isHoveringRef.current = true;
    hoverTimeoutRef.current = setTimeout(() => {
      if (isHoveringRef.current) {
        gsap.to(`.card-${index}`, {
          y: "-100%",
          duration: 1,
          ease: "expo.out",
          opacity: 0,
        });
        gsap.to(`.card-container-${index}`, {
          duration: 1,
          ease: "expo.out",
          delay: 0.3,
        });
        gsap.to(`.card-description-${index}`, {
          y: "-100%",
          duration: 1,
          ease: "expo.out",
          delay: 0.2,
          opacity: 1,
        });
        setHoveredIndex(index);
      }
    }, 300);
  };

  const handleMouseLeave = (index) => {
    isHoveringRef.current = false;
    clearTimeout(hoverTimeoutRef.current);
    setHoveredIndex(null);
    gsap.to(`.card-container-${index}`, {
      scale: 1,
      duration: 1,
      ease: "expo.out",
    });
    gsap.to(`.card-${index}`, {
      y: 0,
      duration: 1,
      ease: "expo.out",
      opacity: 1,
    });
    gsap.to(`.card-description-${index}`, {
      y: 0,
      duration: 1,
      ease: "expo.out",
      opacity: 0,
    });
  };

  return (
    <Container id="tagline-root" maxWidth="lg">
      <Box className="title" pb={5}>
        <GradientText primary="Key Events" secondary="And Highlights." />
      </Box>

      <Grid container spacing={2}>
        {servicesData.map((service, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Box
              key={index}
              zIndex={index === hoveredIndex ? 100 : 1}
              className={`card-container-${index}`}
              position="relative"
              overflow="hidden"
              onMouseEnter={() => handleHover(index)}
              onMouseLeave={() => handleMouseLeave(index)}
            >
              <TaglineCard {...service} index={index} />
              <TaglineDescriptionCard index={index} />
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

const TaglineDescriptionCard = ({ index }) => {
  return (
    <Box
      bgcolor="black"
      position="absolute"
      className={`card-description-${index}`}
    >
      <Card backgroundImage={Engineer}>
        <Typography varinat={"body2"} fontSize="11px">
          From the adrenaline-pumping Drone Race and lightning-fast RC Racing to
          the mind-boggling Bot Expo and awe-inspiring Electronic Displays, Tech
          Mela is a melting pot of cutting-edge creativity. Venture into the
          cosmos with our Space-related Projects that bring together the
          brightest minds to explore the uncharted territories of outer space.
          As the stage for over 30+ outside teams, Tech Mela transforms into a
          dynamic arena where ideas collide, innovation thrives, and the future
          of technology takes center stage
        </Typography>
      </Card>
    </Box>
  );
};

const TaglineCard = ({ title, description, icon, imageUrl, index }) => {
  return (
    <Box className={`card-${index}`}>
      <Card backgroundImage={imageUrl}>
        <Box width="70%">
          <Heading variant="h2">
            {title.split(" ")[0]} {title.split(" ").slice(1).join(" ")}
          </Heading>
          <Spacer size="xs" />
          <Description variant="body1" color="textSecondary">
            {description}
          </Description>
        </Box>
      </Card>
    </Box>
  );
};

export default Tagline;
