import React, { useRef } from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Footer from "../../components/common/footer";
import Appbar from "../../components/Appbar";
import GradientText from "../../components/common/gradienttext";
import Spacer from "../../components/Spacer";
import useGsap from "../../hooks/useGsap";
import gsap from "gsap";
import { wrapWordsWithSpan } from "../../components/home/hero";
import imageGallery from "../../assets/data/gallery";

const Hero = () => {
  return <p>a</p>;
};
const Gallery = () => {
  const rootRef = useRef();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  console.log(imageGallery);

  useGsap(rootRef.current, () => {
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".box",
        scrub: true,
      },
    });
    timeline.fromTo(
      ".box",
      {
        y: 0,
        opacity: 0,
      },
      {
        opacity: 1,
        stagger: 0.2,
        y: isMobile ? -600 : -700,
        scrub: 2,
      }
    );

    gsap.from(".char", {
      scrollTrigger: {
        trigger: ".char",
        scrub: false,
        markers: false,
        start: "top 25%",
      },
      opacity: 0.2,
      stagger: 0.1,
    });
  });
  return (
    <Box ref={rootRef} sx={{ backgroundColor: "common.black" }}>
      <Appbar />
      <Container>
        <Box pt={15} />
        <GradientText primary="Our" secondary="Gallery." />

        <Box height="100vh" mt={2}>
          <Typography
            pb={10}
            color="secondary"
            variant="h1"
            sx={{
              fontSize: {
                md: "72px",
                xs: "36px",
              },
            }}
          >
            {wrapWordsWithSpan(
              "Dive into the Future of Technology and Creativity: Discover the Essence of NITK's Engineer Tech Fest Through Captivating Imagery.",
              "char"
            )}
          </Typography>
        </Box>
        <Grid container>
          {imageGallery.map((_, index) => (
            <Grid item md={4} xs={12}>
              <Box className="box" height="500px">
                <img
                  src={`${_.url}`}
                  alt={`${_.caption}`}
                  style={{
                    objectFit: "cover",
                  }}
                  width={"100%"}
                />
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
      <Footer />
    </Box>
  );
};

export default Gallery;
