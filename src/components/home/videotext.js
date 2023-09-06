import React from "react";
import { Box, Typography } from "@mui/material";
import clip from "../../assets/video/video.mp4";
import { makeStyles } from "@mui/styles";
import useGsap from "../../hooks/useGsap";
import { wrapWordWithSpan } from "./hero";
import gsap from "gsap";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: 0,
    padding: 0,
    position: "relative",
    height: "120vh",
    [theme.breakpoints.down("sm")]: {
      height: "50vh",
    },
    width: "100%",
    overflow: "hidden",
  },
  video: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    objectPosition: "center",
    position: "absolute",
    top: 0,
    left: 0,
  },
  h1: {
    position: "absolute",
    width: "100%",
    top: 0,
    left: 0,
    backgroundColor: "black",
    color: "#fff",
    textAlign: "center",
    mixBlendMode: "darken",
  },
}));

const VideoText = () => {
  const classes = useStyles();
  useGsap(`.${classes.root}`, () => {
    gsap.from(`.${classes.root}`, {
      opacity: 0.1,
      stagger: 0.1,
    });
  });

  return (
    <div className={classes.root}>
      <video autoPlay loop muted className={classes.video}>
        <source src={clip} type="video/mp4" />
      </video>
      <Typography
        paragraph
        variant="h1"
        color="textPrimary"
        fontFamily="Delirium"
        className={classes.h1}
        sx={{
          fontSize: {
            xs: "95vw",
            md: "70vw",
          },
          lineHeight: {
            xs: "95vw",
            md: "65vw",
          },
        }}
        fontWeight={900}
      >
        <span className="char">E</span>
        <span className="char">N</span>
        <span className="char">G</span>
        <span className="char">I</span>
      </Typography>
    </div>
  );
};

export default VideoText;
