import React, { useRef, useState } from "react";
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

const Home = () => {
  const [open, setOpen] = useState(true);
  const root = useRef();

  return (
    <Box ref={root} position="relative" bgcolor="black">
      <CssBaseline />
      <Appbar />

      <Hero />
      <Spacer size="lg" />

      <Tagline />

      <Spacer size="lg" />

      <CTA />

      <Footer />
    </Box>
  );
};

export default Home;
