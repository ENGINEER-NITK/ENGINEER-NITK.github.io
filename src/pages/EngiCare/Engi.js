import React, { useRef, useState } from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Appbar from "../../components/Appbar";
import Footer from "../../components/common/footer";
import Spacer from "../../components/Spacer";
import useGsap from "../../hooks/useGsap";
import gsap from "gsap";
import bgBrouchure from "../../assets/jpg/bg-brochure.jpg";
import engiBrochurePageOne from "../../assets/jpg/engibrochure/engiENGINEER'NITK 2K23_BROCHURE_page-0001.jpg";
import engiBrochurePageTwo from "../../assets/jpg/engibrochure/engiENGINEER'NITK 2K23_BROCHURE_page-0002.jpg";
import engiBrochurePageThree from "../../assets/jpg/engibrochure/engiENGINEER'NITK 2K23_BROCHURE_page-0003.jpg";
import engiBrochurePageFour from "../../assets/jpg/engibrochure/engiENGINEER'NITK 2K23_BROCHURE_page-0004.jpg";

import { wrapWordsWithSpan } from "../../components/home/hero";

const images = [
  {
    url: engiBrochurePageOne,
    title: "Image 1",
    description: "Description for Image 1",
  },
  {
    url: engiBrochurePageTwo,
    title: "Image 2",
    description: "Description for Image 2",
  },
  {
    url: engiBrochurePageThree,
    title: "Image 3",
    description: "Description for Image 3",
  },
  {
    url: engiBrochurePageFour,
    title: "Image 4",
    description: "Description for Image 4",
  },
  
];

const EngiCare = () => {
  const rootRef = useRef();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  useGsap(rootRef.current, () => {
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".trigger",
        start: "top 10%",
        end: "+=2000",
        pin: ".trigger",
        pinSpacing: true,
        scrub: 1,
        immediateRender: false,
      },
    });

    timeline.to(
      ".scaleContainer",
      {
        y: 300,
        scale: 2,
        opacity: 0,
        duration: 1,
      },
      "<"
    );

    timeline.to(
      ".scaleContainer img",
      {
        scale: 1.7,
        duration: 1,
        x: 50,
      },
      "<"
    );

    timeline.fromTo(
      ".slide-in-text",
      {
        y: 800,
      },
      {
        y: -200,
        duration: 1,
      },
      ">-=0.5"
    );

    timeline.from(".char", {
      scrollTrigger: {
        trigger: ".char",
        scrub: true,
        start: "bottom bottom",
      },
      opacity: 0.2,
      stagger: 0.1,
    });

    const brochureTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".pin-brochure",
        start: "top 10%",
        end: "+=8000",
        pin: ".pin-brochure",
        pinSpacing: true,
        scrub: true,
      },
    });

    images.forEach((_, index) => {
      brochureTimeline.fromTo(
        `.brochure-page-${index}`,
        {
          opacity: 1,
        },
        {
          y: `-=${window.innerHeight + 150}`,
          opacity: 0,
          duration: 1,
        }
      );
      brochureTimeline.fromTo(
        `.brochure-page-${index + 1}`,
        {
          opacity: 0,
          y: 100,
        },
        {
          opacity: 1,
          duration: 1,
          y: 0,
        },
        "<"
      );
    });
  });

  return (
    <Box ref={rootRef} sx={{ backgroundColor: "common.black" }}>
      <Appbar />
      <Container maxWidth="lg" color="white">
        <Box pt={20}>
          <Box
            sx={{
              position: "absolute",
              left: "50%",
              transform: "translateX(-50%)",
            }}
          >
            <Typography
              textAlign="center"
              variant="h1"
              fontWeight={200}
              fontFamily="Lato"
              lineHeight="5rem"
              color="white"
              sx={{
                fontSize: {
                  md: "6rem",
                  xs: "3rem",
                },
              }}
            >
              ENGINEER 2 K23{" "}
            </Typography>{" "}
            <Typography
              textAlign="center"
              variant="h1"
              fontFamily="Mona"
              fontSize="7rem"
              fontWeight={700}
              letterSpacing="2px"
              sx={{
                fontSize: {
                  md: "7rem",
                  xs: "3rem",
                },
              }}
              color="white"
            >
              ENGI CARE{" "}
            </Typography>{" "}
            <Typography
              fontFamily="Mona"
              textAlign="right"
              variant="body2"
              color="white"
            >
              Ensight.{" "}
            </Typography>{" "}
            <Typography
              fontFamily="Mona"
              color="white"
              textAlign="right"
              variant="body2"
            >
              Ennovation.{" "}
            </Typography>{" "}
            <Typography
              fontFamily="Mona"
              color="white"
              textAlign="right"
              variant="body2"
            >
              Envention.{" "}
            </Typography>{" "}
          </Box>{" "}
          <Box my={45} />{" "}
          <Box overflow="hidden">
            <Box className="trigger" height="100vh" margin="auto">
              <Box className="image" width="75%" margin="auto" height="100%">
                <Box className="scaleContainer" overflow="hidden">
                  <img src={bgBrouchure} width="100%" />
                </Box>{" "}
                <Typography
                  position="absolute"
                  className="slide-in-text"
                  variant="h2"
                  color="white"
                  fontFamily="Mona"
                  fontWeight={500}
                  bottom={0}
                  sx={{
                    fontSize: {
                      md: "72px",
                      xs: "36px",
                    },
                  }}
                >
                  {" "}
                  {wrapWordsWithSpan(
                    "The 18th edition of this grand symposium outshone its predecessors, ascending to become a nationwide sensation and proudly securing the coveted second position among India's most esteemed technical fests.",
                    "char"
                  )}{" "}
                </Typography>{" "}
              </Box>{" "}
            </Box>{" "}
          </Box>{" "}
        </Box>{" "}
        <Spacer size="sm" />
        <Box className="pin-brochure">
          <Box height="100vh">
            <Grid container>
              <Grid item xs={12} md={7}>
                <Box position="relative">
                  {" "}
                  {images.map((_, index) => (
                    <img
                      style={{
                        display: "block",
                        position: "absolute",
                        top: 0,
                        width: "90%",
                        zIndex: images.length - index,
                      }}
                      className={`brochure-page-${index}`}
                      src={_.url}
                      width="90%"
                    />
                  ))}{" "}
                </Box>{" "}
              </Grid>{" "}
              <Grid
                item
                xs={12}
                md={5}
                sx={{
                  display: {
                    md: "block",
                    xs: "none",
                  },
                }}
              >
                <Typography color="white" variant="h1">
                  Know More...{" "}
                </Typography>{" "}
                
              </Grid>{" "}
            </Grid>{" "}
          </Box>{" "}
        </Box>{" "}
      </Container>{" "}
      <Footer />
    </Box>
  );
};

export default EngiCare;
