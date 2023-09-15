import React, { useRef } from 'react';
import useGsap from '../../hooks/useGsap';
import gsap from 'gsap';
import { Box, Container } from '@mui/material';
import Appbar from '../../components/Appbar';
import GradientText from '../../components/common/gradienttext';
import Spacer from '../../components/Spacer';
import Typeform from '../../components/Typeform';
import Footer from '../../components/common/footer';

const Team = () => {
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
          <GradientText primary='Team' secondary='Meet us'/>


          <Spacer size="xs" />
        </Box>

        <Box my={5} textAlign="center">
          <Typeform hash='FrhWDR8b'/>
        </Box>
      </Container>
      <Footer />
    </Box>)
};

export default Team;
