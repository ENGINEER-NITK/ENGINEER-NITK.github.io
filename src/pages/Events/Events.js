import React, { useRef } from "react";
import {
  Box,
  Button,
  Container,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import Appbar from "../../components/Appbar";
import Footer from "../../components/common/footer";
import Spacer from "../../components/Spacer";
import { Description, Heading } from "../../components/common/typography";
import EmblaCarousel from "../../components/common/carousel";
import GradientBox from "../../components/common/gradientbox";
import { FiArrowRight } from "react-icons/fi";
import events from "../../assets/data/events";

const HeadCarousel = () => {
  return (
    <EmblaCarousel flex="0 0 100%" gap="20px">
      {events.map((_, index) => (
        <HeadEvent event={_} />
      ))}
    </EmblaCarousel>
  );
};

const HeadEvent = ({ event }) => {
  const background = event.image;
  const title = event.title;
  const description = event.description;
  const subtitle = event.subtitle;
  const secondCta = event.secondCta;

  return (
    <GradientBox color="white">
      <img
        style={{
          display: "block",
          position: "absolute",
          height: "400px",
          right: 0,
          bottom: 0,
          zIndex: -1,
        }}
        src={background}
      />
      <Container maxWidth="lg">
        <Box
          sx={{
            width: {
              xs: "100%",
              md: "50%",
            },
          }}
        >
          <Typography
            fontFamily="Lato"
            variant="body1"
            gutterBottom
          ></Typography>
          <Typography
            variant="h1"
            sx={{
              fontSize: {
                xs: "48px",
                md: "72px",
              },
            }}
          >
            {" "}
            {title}
          </Typography>
          <Typography fontWeight={700} variant="body1"></Typography>
          <Typography variant="body1" pb={5}>
            {subtitle}
          </Typography>
          <Stack direction="row" alignItems="center">
            <Button color="secondary" size="small">
              Event Details
            </Button>
            <Button
              variant="contained"
              color="primary"
              sx={{ margin: "0 10px" }}
            >
              Register Here
            </Button>
          </Stack>
        </Box>
      </Container>
    </GradientBox>
  );
};

const Event = ({ name, description }) => {
  return (
    <GradientBox
      height="100%"
      size="small"
      background="linear-gradient(135deg, #f7f7f7, #cfcfcf)"
    >
      <Box>
        <Typography
          variant="h2"
          fontWeight="bold"
          fontFamily="typography.fontFamily"
          color="common.black"
          letterSpacing="-1px"
          fontSize="32px"
          lineHeight="1.2"
          gutterBottom
        >
          {name}
        </Typography>
        {/*{[...Array(rating)].map((_, index) => (*/}
        {/*  <AiFillStar key={index} />*/}
        {/*))}*/}
        <Description color="black">{description}</Description>

        <Box position="absolute" right={"25px"} bottom="15px">
          <IconButton sx={{ backgroundColor: "black", color: "white" }}>
            <FiArrowRight />
          </IconButton>
        </Box>
      </Box>
    </GradientBox>
  );
};

const Events = () => {
  const rootRef = useRef();
  return (
    <Box ref={rootRef} sx={{ backgroundColor: "black" }}>
      <Appbar />
      <Container maxWidth="lg" color="white" sx={{ pt: 15 }}>
        <HeadCarousel />
        <Spacer size="md" />
        <Heading>Bruh</Heading>
        <Spacer size="xs" />
        <EmblaCarousel gap="20px">
          <Event name="Bruh" description="Bruh" />
          <Event name="Bruh" description="Bruh" />
        </EmblaCarousel>

        <Spacer size="lg" />
        <Heading>Bruh</Heading>
        <Spacer size="xs" />
        <EmblaCarousel gap="20px">
          <Event name="Bruh" description="Bruh" />
          <Event name="Bruh" description="Bruh" />
          <Event name="Bruh" description="Bruh" />
          <Event name="Bruh" description="Bruh" />
          <Event name="Bruh" description="Bruh" />
        </EmblaCarousel>

        <Spacer size="lg" />

        <Spacer size="lg" />
      </Container>
      <Footer />
    </Box>
  );
};

export default Events;
