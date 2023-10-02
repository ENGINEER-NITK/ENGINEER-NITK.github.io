import React, { useRef, useState } from "react";
import {
  Box,
  Button,
  Container,
  Grid, Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import Appbar from "../../components/Appbar";
import Footer from "../../components/common/footer";
import Spacer from "../../components/Spacer";
import useGsap from "../../hooks/useGsap";
import gsap from "gsap";
import bgBrouchure from "../../assets/png/logo.png";
import brochurePageOne from "../../assets/jpg/brochure/ENGINEER'NITK 2K23_BROCHURE_page-0001.jpg";
import brochurePageTwo from "../../assets/jpg/brochure/ENGINEER'NITK 2K23_BROCHURE_page-0002.jpg";
import brochurePageThree from "../../assets/jpg/brochure/ENGINEER'NITK 2K23_BROCHURE_page-0003.jpg";
import brochurePageFour from "../../assets/jpg/brochure/ENGINEER'NITK 2K23_BROCHURE_page-0004.jpg";
import brochurePageFive from "../../assets/jpg/brochure/ENGINEER'NITK 2K23_BROCHURE_page-0005.jpg";
import brochurePageSix from "../../assets/jpg/brochure/ENGINEER'NITK 2K23_BROCHURE_page-0006.jpg";
import brochurePageSeven from "../../assets/jpg/brochure/ENGINEER'NITK 2K23_BROCHURE_page-0007.jpg";
import brochurePageEight from "../../assets/jpg/brochure/ENGINEER'NITK 2K23_BROCHURE_page-0008.jpg";
import brochurePageNine from "../../assets/jpg/brochure/ENGINEER'NITK 2K23_BROCHURE_page-0009.jpg";
import brochurePageTen from "../../assets/jpg/brochure/ENGINEER'NITK 2K23_BROCHURE_page-0010.jpg";
import brochurePageEleven from "../../assets/jpg/brochure/ENGINEER'NITK 2K23_BROCHURE_page-0011.jpg";
import brochurePageTwelve from "../../assets/jpg/brochure/ENGINEER'NITK 2K23_BROCHURE_page-0012.jpg";
import brochurePageThirteen from "../../assets/jpg/brochure/ENGINEER'NITK 2K23_BROCHURE_page-0013.jpg";
import { wrapWordsWithSpan } from "../../components/home/hero";
import GradientText from '../../components/common/gradienttext';
import Marquee from 'react-fast-marquee';
import SponsorCard from '../../components/brochure/sponsor';
import EmblaCarousel from '../../components/common/carousel';
import Patternbg from '../../components/common/patternbg';

const images = [
  {
    url: brochurePageOne,
    title: "Image 1",
    description: "Description for Image 1",
  },
  {
    url: brochurePageTwo,
    title: "Image 2",
    description: "Description for Image 2",
  },
  {
    url: brochurePageThree,
    title: "Image 3",
    description: "Description for Image 3",
  },
  {
    url: brochurePageFour,
    title: "Image 4",
    description: "Description for Image 4",
  },
  {
    url: brochurePageFive,
    title: "Image 5",
    description: "Description for Image 5",
  },
  {
    url: brochurePageSix,
    title: "Image 6",
    description: "Description for Image 6",
  },
  {
    url: brochurePageSeven,
    title: "Image 7",
    description: "Description for Image 7",
  },
  {
    url: brochurePageEight,
    title: "Image 8",
    description: "Description for Image 8",
  },
  {
    url: brochurePageNine,
    title: "Image 9",
    description: "Description for Image 9",
  },
  {
    url: brochurePageTen,
    title: "Image 10",
    description: "Description for Image 10",
  },
  {
    url: brochurePageEleven,
    title: "Image 10",
    description: "Description for Image 10",
  },
  {
    url: brochurePageTwelve,
    title: "Image 10",
    description: "Description for Image 10",
  },
  {
    url: brochurePageThirteen,
    title: "Image 10",
    description: "Description for Image 10",
  },
];

const Brochure = () => {
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
        rotate: 360,
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
      <Patternbg>
      <Appbar />
      <Container maxWidth="lg" color="white">
        <Box pt={20}>
          <Box
          >
            <GradientText primary='Brochure' secondary='Engineer 2K23'/>
            <Spacer size='xl'/>

            <Box sx={{
              backgroundColor: 'red'
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
                  color="white"
                  textAlign="right"
                  variant="h1"
                >
                  Ennovation.
                </Typography>
                <Typography
                  fontFamily="Mona"
                  color="white"
                  textAlign="right"
                  variant="h1"
                >
                  Envention.
                </Typography>
            </Marquee>
            </Box>
          </Box>
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
        </Box>
        <Spacer size="sm" />
        <Box className="pin-brochure">
          <Box height="100vh">
            <Grid container>
              <Grid item xs={12} md={7} sx={{ position: 'relative', height: '90vh' }}>
                {/* Container box for images */}
                <Box
                  sx={{
                    width: '100%',
                    height: '100%',
                    position: 'relative',
                  }}
                >
                  {images.map((_, index) => (
                    <img
                      style={{
                        display: "block",
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        width: '100%',
                        height: '100%',
                        objectFit: 'contain',  // This ensures the image scales correctly
                        zIndex: images.length - index,
                      }}
                      className={`brochure-page-${index}`}
                      src={_.url}
                      alt="Brochure"  // Always add alt for accessibility
                    />
                  ))}
                </Box>
              </Grid>

              <Grid
                item
                xs={12}
                md={5}
                sx={{
                  display: {
                    md: "block",
                    xs: "none",
                  },
                  pl: 2,  // Add some padding for better aesthetics
                }}
              >
                <GradientText primary='Sponsors'/>
                <Spacer size='sm'/>
                <EmblaCarousel  flex='0 0 50%'>
                  <SponsorCard name='sponsor'/>

                  <SponsorCard name='sponsor'/>
                  <SponsorCard name='sponsor'/>
                  <SponsorCard name='sponsor'/>
                </EmblaCarousel>
                <Spacer size='sm'/>

                <EmblaCarousel  flex='0 0 50%'>
                  <SponsorCard name='sponsor'/>

                  <SponsorCard name='sponsor'/>
                  <SponsorCard name='sponsor'/>
                  <SponsorCard name='sponsor'/>
                </EmblaCarousel>

              </Grid>
            </Grid>
          </Box>{" "}
        </Box>{" "}

        <Box sx={{
          display: {
            md: 'none',
            xs: 'block'
          }
        }}>
          <GradientText primary='Sponsors'/>
          <Spacer size='sm'/>
          <EmblaCarousel  flex='0 0 50%'>
            <SponsorCard name='sponsor'/>

            <SponsorCard name='sponsor'/>
            <SponsorCard name='sponsor'/>
            <SponsorCard name='sponsor'/>
          </EmblaCarousel>
          <Spacer size='sm'/>

          <EmblaCarousel  flex='0 0 50%'>
            <SponsorCard name='sponsor'/>

            <SponsorCard name='sponsor'/>
            <SponsorCard name='sponsor'/>
            <SponsorCard name='sponsor'/>
          </EmblaCarousel>


        </Box>
        <Spacer size='xl'/>
      </Container>{" "}
      </Patternbg>
      <Footer />

    </Box>
  );
};

export default Brochure;
