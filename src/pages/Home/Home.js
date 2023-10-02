import React, { useLayoutEffect, useRef, useState } from 'react';
import { Box, CssBaseline } from "@mui/material";
import "./Home.css";
import Appbar from "../../components/Appbar";

import Spacer from "../../components/Spacer";
import Services from "../../components/home/services";
import Hero from "../../components/home/hero";
import About from "../../components/home/about";
import Features from "../../components/home/features";
import Testimonials from "../../components/home/testimonials";
import CTA from "../../components/home/cta";
import Footer from "../../components/common/footer";
import Pricing from "../../components/home/pricing";
import Tagline from "../../components/home/tagline";
import Appbartrigger from '../../components/common/appbartrigger';
import useGsap from '../../hooks/useGsap';
import gsap from 'gsap'
const Home = () => {
  const root = useRef();

  return (
    <Box ref={root} position="relative" bgcolor="black">
      <CssBaseline />
      <Appbar />
      <Appbartrigger/>
      <Hero />

      <Spacer size="xl" />

      <About />

      <Spacer size="xl" />

      <Tagline />

      <Spacer size="lg" />

      <CTA />

      <Footer />
    </Box>
  );
};

export default Home;
