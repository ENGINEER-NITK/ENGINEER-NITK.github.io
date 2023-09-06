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
import React, { useRef } from "react";
import Spacer from "../Spacer";
import { Heading } from "../common/typography";
import { formatDistanceToNow } from "date-fns";
import EmblaCarousel from "../common/carousel";
import GradientBox from "../common/gradientbox";
import BoxContent from "../common/boxcontent";
import useGsap from "../../hooks/useGsap";
import gsap from "gsap";
import Videotext from "./videotext";

const recentOrders = [
  {
    id: 1,
    name: "John Doe",
    product: "Product A",
    timestamp: "2023-07-25 12:34 PM",
    quote: "Great product! I'm loving it!",
  },
  {
    id: 2,
    name: "Jane Smith",
    product: "Product B",
    timestamp: "2023-07-25 01:45 PM",
    quote: "Excellent service and fast delivery!",
  },
  {
    id: 2,
    name: "Jane Smith",
    product: "Product B",
    timestamp: "2023-07-25 01:45 PM",
    quote: "Excellent service and fast delivery!",
  },
  {
    id: 2,
    name: "Jane Smith",
    product: "Product B",
    timestamp: "2023-07-25 01:45 PM",
    quote: "Excellent service and fast delivery!",
  },
  {
    id: 2,
    name: "Jane Smith",
    product: "Product B",
    timestamp: "2023-07-25 01:45 PM",
    quote: "Excellent service and fast delivery!",
  },
  // Add more recent orders as needed
];

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
  console.log(words);

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
  useGsap(
    rootRef,
    () => {
      const tl = gsap.timeline({ defaults: { ease: "expo.out" } });

      tl.from(".title", {
        y: 100,
        duration: 0.8,
        stagger: 0.2,
        opacity: 0,
        skewY: 10,
      })
        .from(".description", { y: 30, opacity: 0, duration: 0.6 }, "-=0.2")
        .from(
          ".card",
          { y: 30, opacity: 0, duration: 0.6, stagger: 0.2 },
          "-=0.4"
        )
        .from(
          ".button",
          { y: 20, opacity: 0, duration: 0.6, stagger: 0.1 },
          "-=0.3"
        );
    },
    []
  );

  const formatTimestamp = (timestamp) => {
    const currentDate = new Date();
    const orderDate = new Date(timestamp);
    return formatDistanceToNow(orderDate, {
      addSuffix: true,
      includeSeconds: true,
    });
  };

  const handleBookCall = () => {
    const ctaSection = document.getElementById("cta-root");
    if (ctaSection) {
      const offsetTop = ctaSection.offsetTop;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  const handleShowMore = () => {
    const ctaSection = document.getElementById("services-root");
    if (ctaSection) {
      const offsetTop = ctaSection.offsetTop;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <Box
      ref={rootRef}
      sx={{
        // backgroundImage: `url(${Morph})`, // Replace with your actual image path
        backgroundSize: "cover",
        backgroundPosition: "center",
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
              <Typography
                className="appbar-trigger"
                paragraph
                mt={20}
                fontWeight={100}
                fontFamily="lato"
                variant="h1"
                fontSize="6rem"
                mb={-7}
                letterSpacing={2}
                zIndex={1000}
                position="relative"
                color="secondary"
              >
                {wrapWordsWithSpan("2 0 2 3", "title")}
              </Typography>
              <Videotext />

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
    </Box>
  );
};

export default Hero;
