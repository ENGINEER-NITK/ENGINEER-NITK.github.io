import Appbar from "./components/Appbar";
import { Box, useMediaQuery, useTheme } from "@mui/material";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Brochure from "./pages/Brochure/Brochure";
import EngiCare from "./pages/EngiCare/Engi";
import AlumniConnect from "./pages/AlumniConnect/Alumni";
import Accomodation from "./pages/Accomodation/Accomodation";

import { Route, Routes } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import retro from "./themes/retro";
import React, { useEffect, useRef } from 'react';
import useGsap, { appear } from "./hooks/useGsap";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import LogoText from "./assets/svg/logo_text.svg";
import LogoMascot from "./assets/svg/logo_mascot.svg";
import Gallery from "./pages/Gallery/Gallery";
import Lenis from "@studio-freight/lenis";
import Contact from "./pages/Contact/Contact";
import Events from "./pages/Events/Events";
import Countdown from "./components/page/beforerelease";
import Accomodate from "./pages/Accomodations/Accomodate";
import Ambassador from "./pages/Ambassadors";
import BeforeReleaseLayout from "./components/page/layout";
import Team from './pages/Team/Team';
function App() {
  const root = useRef();
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("sm"));

  useEffect(()=> {
    const timeline = gsap.timeline({
      scrollTrigger: {
        toggleActions: "restart none none reverse",
        trigger: ".appbar-trigger",
        start: "top top", // Start the animation when the top of the appbar reaches the top of the viewport
        end: "bottom top", // End the animation when the bottom of the appbar reaches the top of the viewport
      },
    });

    timeline.to(".appbar .action", {
      opacity: 0, // Change the background color to #1B1B1E
      y: -12,
      ease: "expo.out",
    });

    if (!mobile)
      timeline.fromTo(
        ".appbar .menu",
        {
          opacity: 0,
        },
        {
          opacity: 1, // Change the background color to #1B1B1E
          y: -12,
          ease: "expo.out",
          stagger: 0.1,
        },
        "<"
      );
  }, [])

  useGsap(root, () => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

  });
  return (
    <ThemeProvider theme={retro("dark")}>
      <Box
        ref={root}
        sx={{
          bgcolor: "background.default",
        }}
        className="App"
      >
        {/*<Countdown />*/}
        <Routes>
          <Route exact path="/about" element={<About />} />{" "}
          <Route exact path="/gallery" element={<Gallery />} />{" "}
          <Route exact path="/events" element={<Events />} />{" "}
          <Route exact index path="/" element={<Home />} />{" "}
          <Route exact index path="/contact" element={<Contact />} />{" "}
          <Route exact index path="/engi-care" element={<EngiCare />} />{" "}
          <Route
            exact
            index
            path="/alumni-connect"
            element={<AlumniConnect />}
          />{" "}
          <Route exact index path="/accomodation" element={<Accomodation />} />{" "}
          <Route
            exact
            index
            path="/alumni-connect"
            element={<AlumniConnect />}
          />{" "}
          <Route exact path="/ambassador" element={<Ambassador />} />{" "}
          <Route exact path="/brochure" element={<Brochure />} />{" "}
          <Route exact path="/team" element={<Team />} />{" "}

        </Routes>{" "}
      </Box>{" "}
    </ThemeProvider>
  );
}

export default App;
