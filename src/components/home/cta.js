import Box from "@mui/material/Box";
import { Button, Container, Paper, Stack, Typography } from "@mui/material";
import GradientText from "../common/gradienttext";
import Background from "../../assets/svg/Pattern-12.svg";
import { InlineWidget, PopupButton, PopupWidget } from "react-calendly";
import { useRef } from "react";
import Spacer from "../Spacer";
import { Description } from "../common/typography";
import useGsap from "../../hooks/useGsap";
import gsap from "gsap";
import image from "../../assets/png/iPhone 12 _ 12 Pro.png";
import Marquee from "react-fast-marquee";

const CTA = () => {
  const rootRef = useRef();
  useGsap(rootRef.current, () => {
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".cta-root",
      },
    });

    timeline.from(".intro-section", {
      y: 100,
      opacity: 0,
      duration: 1,
    });

    timeline.to(".intro-section .description", {
      y: -100,
      opacity: 0,
      duration: 1,
      delay: 0.5,
    });

    timeline.from(".photo-container", {
      x: [20, -20],
      y: -200,
      stagger: 0.1,
    });
  });
  return (
    <Box
      ref={rootRef}
      id="cta-root"
      minHeight="100vh"
      sx={{
        backgroundImage: `linear-gradient(to bottom right, rgba(0, 0, 0, 0.8) 20%, transparent), url(${Background})`, // Gradient from top left to bottom right, darkening the background image
        padding: "80px 0",
        backgroundSize: "120%",
        backgroundPosition: "center",
        boxShadow:
          "inset 0px 40px 30px -20px #1B1B1E, inset 0px -40px 30px -20px rgba(0, 0, 0, 0.8)",
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            width: {
              md: "30%",
              xs: "100%",
            },
          }}
          className="intro-section"
        >
          <GradientText primary="Glimpses" secondary="of Events." />
          <Spacer size="sm" />
          <Description className="description" fontWeight={700}>
            Discover your business's untapped potential in just 30 minutes! Our
            call will unveil growth opportunities, address challenges, and craft
            a tailored strategy for success.{" "}
          </Description>
        </Box>
        <Marquee>
          <Stack direction="row" spacing={5}>
            <PhotoComponent imageUrl={image} />
            <PhotoComponent imageUrl={image} />
            <PhotoComponent imageUrl={image} />
            <PhotoComponent imageUrl={image} />
            <PhotoComponent imageUrl={image} />
            <PhotoComponent imageUrl={image} />
          </Stack>
        </Marquee>
      </Container>
    </Box>
  );
};

function PhotoComponent({ imageUrl }) {
  return (
    <Paper
      className="photo-container"
      sx={{
        borderRadius: 0,
        display: "inline-block",
        padding: 2,
        border: (theme) => `12px solid ${theme.palette.common.white}`, // Left, right, top
        borderBottomWidth: (theme) => `48px`, // Bottom        borderRadius: 1,
        boxShadow: "none",
        backgroundColor: "black",
      }}
    >
      <img
        src={imageUrl}
        alt="Your Image"
        style={{
          height: "200px",
          width: "auto",
        }}
      />
    </Paper>
  );
}

export default CTA;
