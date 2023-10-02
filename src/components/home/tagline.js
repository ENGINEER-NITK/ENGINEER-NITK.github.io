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
import easyMeshGradient from 'easy-mesh-gradient';
import GradientBox from '../common/gradientbox';
import Patternbg from '../common/patternbg';

const servicesData = [
  {
    title: "Alumni Connect",
    description:
      "Celebrating 10 tech trailblazers who founded over 100 startups and lead global giants.",
    imageUrl: Home, // Replace with the actual image URL or import the image,
    longDescription: "Our Alumni Connect event is a testament to this belief, bringing together over 10 distinguished alumni who have carved their paths as pioneers in the tech world.  the event will  feature from founders of over 100+ game-changing startups to leaders steering global tech giants."
  },
  {
    title: "Tech Mela",
    description:
      "An innovation showcase featuring Drone Races, RC Racing, Bot Expo, and Electronic Displays with 30+ outside teams.",
    imageUrl: Party, // Replace with the actual image URL or import the image
    longDescription: "From the adrenaline-pumping Drone Race and lightning-fast RC Racing to the mind-boggling Bot Expo and awe-inspiring Electronic Displays, Tech Mela is a melting pot of cutting-edge creativity. As the stage for over 30+ outside teams, Tech Mela transforms into a dynamic arena where ideas collide, innovation thrives, and the future of technology takes center stage."
  },
  {
    title: "Engicare",
    description:
      "Engi Care, our CSR initiative, enriches lives through music, games, clothing drives, and a national case study contest.",
    imageUrl: Time, // Replace with the actual image URL or import the image
    longDescription: "Engi Care, our CSR initiative, is a testament to our dedication to making a positive difference in the lives of those around us. Events include- Music for All - Harmony Unleashed: musicalperformance by specially abled kids TechAdapt - Games Beyond Limits: games for specially abled Threads of Joy - Clothing Drive InnoVate4Good - National Case Study Contest."
  },
  {
    title: "Robowars",
    description:
    "NITK introduces South India's first <15 kg wireless RoboWars event, bringing together engineering talents from across the nation.",
    imageUrl: Time, // Replace with the actual image URL or import the image
    longDescription: "NITK is proud to present the first-of-its-kind RoboWars event in (<15 kg wireless category) South India, where teams of budding engineers, innovators, and tech enthusiasts from across the nation will come together to test their mettle in the world of robotics. "
  },
  {
    title: "Tech Conflux",
    description:
      "Where Diversity Meets Innovation with NITK's Finest Clubs and Tech Teams!",
    imageUrl: Time, // Replace with the actual image URL or import the image
    longDescription: "Tech Conflux isn't just a series of events; it's a celebration of diversity, innovation, and excellence. Event includes renowned clubs like FAARC, ACM ,ISTE, IE, IEEE, WEC, E-CELL and tech teams like nitk racing , robocon , baja nitk , sae and many more."
  },
  {
    title: "Cultural events",
    description:
    "Unforgettable diversity and creativity in one spectacular fest!",
    imageUrl: Time, // Replace with the actual image URL or import the image
    longDescription: "Prepare for a cultural spectacle like no other at NITK's ENGI 2023! From dazzling dance performances to inspiring art displays and mouthwatering international cuisine, our fest promises an unforgettable celebration of diversity and creativity. Don't miss this chance to be part of the magic!"
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
    <Patternbg>
    <Container id="tagline-root" maxWidth="lg">
      <Box className="title" pb={5}>
        <GradientText primary="Key Events" secondary="And Highlights." />
      </Box>

      <Grid alignItems='center' container spacing={2} >
        {servicesData.map((service, index) => (
          <Grid item xs={12} sm={6} md={4} key={index} >
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
              <TaglineDescriptionCard {...service} index={index} />
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
    </Patternbg>
  );
};

const TaglineDescriptionCard = ({ index,longDescription }) => {
  return (
    <Box
      bgcolor="black"
      position="absolute"
      className={`card-description-${index}`}
    >
      <Card backgroundImage={Engineer}>
        <Typography varinat={"body2"} fontSize="14px">
          {longDescription}
        </Typography>
      </Card>
    </Box>
  );
};

const TaglineCard = ({ title, description, icon, imageUrl, index }) => {
  const gradientString = easyMeshGradient({
    seed: title
  })
  return (
    <Box className={`card-${index}`}>
      <GradientBox backgroundImage={imageUrl}>
        <Box width="70%">
          <Heading variant="h2">
            {title.split(" ")[0]} {title.split(" ").slice(1).join(" ")}
          </Heading>
          <Spacer size="xs" />
          <Description variant="body1" color="textSecondary">
            {description}
          </Description>
        </Box>
      </GradientBox>
    </Box>
  );
};

export default Tagline;
