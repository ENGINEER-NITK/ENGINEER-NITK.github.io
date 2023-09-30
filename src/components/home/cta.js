import Box from "@mui/material/Box";
import { Button, Container, Paper, Stack, Typography } from "@mui/material";
import GradientText from "../common/gradienttext";
import Background from "../../assets/gif/space.gif";
import { InlineWidget, PopupButton, PopupWidget } from "react-calendly";
import { useEffect, useRef } from "react";
import Spacer from "../Spacer";
import { Description } from "../common/typography";
import useGsap from "../../hooks/useGsap";
import gsap from "gsap";
import Marquee from "react-fast-marquee";
import {imageGallery1} from "../../assets/data/homeCTA";
import {imageGallery2} from "../../assets/data/homeCTA";
// import { useGlimpsesData1, useGlimpsesData2 } from "../../hooks/useQuery";

const CTA = () => {
  const rootRef = useRef();
  const containerRef = useRef();

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
      opacity: 0,
      stagger: 0.1,
    });
  });

  // const { isLoading1, data1 } = useGlimpsesData1();
  // const { isLoading2, data2 } = useGlimpsesData2();

  // console.log("data1", data1);
  // console.log("data2", data2);

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
      <Container maxWidth="lg" ref={containerRef}>
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

        </Box>
        {/* {isLoading1 ? (<p>Loading</p>) : (<> */}
          <Marquee>
            <Stack direction="row" spacing={5}>
            {imageGallery1.map((val, index) => (
              <PhotoComponent imageUrl={val.url} />
              ))}
            </Stack>
          </Marquee>
        {/* </>)} */}

        <Spacer size="sm" />

        {/* {isLoading2 ? (<p>Loading</p>) : (<> */}
          <Marquee direction="right">
            <Stack direction="row" spacing={5}>
            {imageGallery2.map((val, index) => (
              <PhotoComponent key={index} imageUrl={val.url} />
              ))}
            </Stack>
          </Marquee>
        {/* </>)} */}
      </Container>
    </Box>
  );
};

function PhotoComponent({ imageUrl }) {
  return (
    <Paper
      className="photo-container"
      sx={{
        display: "inline-block",
        padding: 0,
        border: (theme) => `4px solid ${theme.palette.common.white}`, // Left, right, top
        boxShadow: "none",
        backgroundColor: "black",
        borderRadius: '0px'
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
