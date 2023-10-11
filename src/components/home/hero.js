import {
  Avatar,
  Box,
  Button,
  Container,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import Morph from "../../assets/svg/morph.svg";
import { FiArrowRightCircle, FiPhoneCall, FiUser } from "react-icons/fi";
import Spiral from "../../assets/svg/spiral.svg";
import React, { useEffect, useRef } from "react";
import Spacer from "../Spacer";
import { Heading } from "../common/typography";
import { formatDistanceToNow } from "date-fns";
import EmblaCarousel from "../common/carousel";
import GradientBox from "../common/gradientbox";
import BoxContent from "../common/boxcontent";
import useGsap from "../../hooks/useGsap";
import gsap from "gsap/all";
import Videotext from "./videotext";
import Background from '../../assets/gif/background.gif';
import Marquee from 'react-fast-marquee';
import Newspaper from '../../assets/gif/skull.gif'

export const wrapWordsWithSpan = (text, className) => {
  const words = text.split(" ");

  return (
    <>
      {words.map((word, index) => (
        <React.Fragment key={index}>
          <span style={{ display: "inline-block" }} className={className}>
            {word}
          </span>
          {index !== words.length - 1 && " "}
        </React.Fragment>
      ))}
    </>
  );
};

export const wrapWordWithSpan = (text, className) => {
  const words = text.split("");

  return (
    <>
      {words.map((word, index) => (
        <React.Fragment key={index}>
          <span style={{ display: "inline-block" }} className={className}>
            {word}
          </span>
        </React.Fragment>
      ))}
    </>
  );
};

const Hero = () => {
  const theme = useTheme();
  const rootRef = useRef();
  const containerRef = useRef();
  useGsap(
    rootRef,
    () => {
      const tl = gsap.timeline({ defaults: { ease: "expo.out" } });

      tl.to(rootRef.current, {
        backgroundSize: 'cover',
      })


      tl.from(containerRef.current, {
        y: 100,
        duration: 0.8,
        stagger: 0.2,
        opacity: 0,
        skewY: 10,
      }, ">-=1.3")

      tl.to(containerRef.current, {
        skewY: "-=5", // This moves the container up by 10 pixels (you can adjust this value for more/less effect)
        duration: 3, // Duration for one up or down movement
        ease: "expo.inOut" // Smooth easing function for a more natural hover effect
      });


    },
    []
  );

  return (
    <Box
      ref={rootRef}
      sx={{
        backgroundImage: `linear-gradient(to bottom right, rgba(0, 0, 0, 0.8) 20%, transparent), url(${Background})`, // Gradient from top left to bottom right, darkening the background image
        padding: "80px 0",
        backgroundSize: "cover",
        backgroundPosition: "center",
        boxShadow:
          "inset 0px 40px 30px -20px #1B1B1E, inset 0px -40px 30px -20px rgba(0, 0, 0, 0.8)",
        backgroundRepeat: 'no-repeat',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={12} md={12}>
            <Box
              sx={{
                width: {
                  xs: "100%",
                },
              }}
            >
              <Spacer size='xl' />
              <Box ref={containerRef}>
                <Videotext />
                <Box mt={-30}  sx={{
                  backgroundImage: `url(${Newspaper})`, // Gradient from top left to bottom right, darkening the background image
                  backgroundSize: "contain",
                  backgroundPosition: "center",
                  boxShadow:
                    "inset 0px 40px 30px -20px #1B1B1E, inset 0px -40px 30px -20px rgba(0, 0, 0, 0.8)",
                }}>
                  <Marquee>
                    <Typography
                      fontFamily="Mona"
                      textAlign="right"
                      variant="h1"
                      color="white"
                    >
                      Ensight.
                    </Typography>
                    <Typography
                      fontFamily="Mona"
                      textAlign="right"
                      variant="h1"
                      color="white"

                    >
                      Ennovation.
                    </Typography>
                    <Typography
                      fontFamily="Mona"
                      textAlign="right"
                      variant="h1"
                      color="white"

                    >
                      Envention.
                    </Typography>
                    <Typography
                      fontFamily="Mona"
                      textAlign="right"
                      variant="h1"
                      color="red"

                    >
                      Engineer.
                    </Typography>
                  </Marquee>
                </Box>
              </Box>
              <Stack direction="row" spacing={1} mt={5}>
                {/*<Button*/}
                {/*  className="button"*/}
                {/*  onClick={handleBookCall}*/}
                {/*  startIcon={<FiPhoneCall />}*/}
                {/*  variant="bigButton"*/}
                {/*  color="secondary"*/}
                {/*>*/}
                {/*  Book a call*/}
                {/*</Button>*/}
                {/*<Button*/}
                {/*  className="button"*/}
                {/*  onClick={handleShowMore}*/}
                {/*  startIcon={<FiArrowRightCircle />}*/}
                {/*  variant="bigButton"*/}
                {/*  color="secondary"*/}
                {/*>*/}
                {/*  Show more*/}
                {/*</Button>*/}
              </Stack>
              <Spacer size="md" />
            </Box>
          </Grid>

          {/* Second Grid Item */}
        </Grid>
      </Container>
      <Spacer size="xl" />

    </Box>
  );
};

export default Hero;
