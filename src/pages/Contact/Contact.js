import React, { useRef } from "react";
import { Box, Button, Container, Typography } from "@mui/material";
import Appbar from "../../components/Appbar";
import Footer from "../../components/common/footer";
import Spacer from "../../components/Spacer";
import useGsap from "../../hooks/useGsap";
import Typeform from "../../components/Typeform";
import gsap from "gsap";
import bgBrouchure from "../../assets/jpg/bg-brochure.jpg";
import GradientText from '../../components/common/gradienttext';

const Contact = () => {
  const rootRef = useRef();
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

    // timeline.to(
    //   ".scaleContainer",
    //   {
    //     scale: 3,
    //     duration: 1,
    //   },
    //   "<"
    // );
    //
    // timeline.to(
    //   ".scaleContainer img",
    //   {
    //     scale: 4,
    //     duration: 1,
    //   },
    //   "<"
    // );

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
  });
  return (
    <Box ref={rootRef} sx={{ backgroundColor: "common.black" }}>
      <Appbar />
      <Container maxWidth="lg" color="white">
        <Box pt={20}>
          <GradientText primary='Contact Us' secondary='Reach out to us'/>


          <Spacer size="xs" />
        </Box>

        <Box my={5} textAlign="center">
          <Typeform />
        </Box>
      </Container>
      <Footer />
    </Box>
  );
};

export default Contact;
