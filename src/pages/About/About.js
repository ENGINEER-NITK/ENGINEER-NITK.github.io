import React, { useRef } from "react";
import Morph from "../../assets/svg/morph.svg";
import {
  Box,
  Button,
  Container,
  Grid,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import { FiArrowRightCircle, FiPhoneCall } from "react-icons/fi";
import useGsap from "../../hooks/useGsap";
import gsap from "gsap";
import { formatDistanceToNow } from "date-fns";
import Appbar from "../../components/Appbar";
import Hero from "../../components/about/hero";
import Footer from "../../components/common/footer";
import Appbartrigger from '../../components/common/appbartrigger';

const wrapWordsWithSpan = (text, className) => {
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

const About = () => {
  return (
    <Box>
      <Appbar />
      <Appbartrigger/>

      <Hero />
      <Footer />
    </Box>
  );
};

export default About;
