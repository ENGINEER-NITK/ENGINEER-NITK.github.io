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
    clipPath: 'url(#clip)', // Referencing the clipPath id from SVG
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
      <svg style={{ opacity: 1, position: 'fixed', zIndex: -999 }} viewBox="0 0 1 1">
        <defs>
          <clipPath id="clip" clipPathUnits="objectBoundingBox">
            <text
              x="0.5"
              y="0.5"
              font-size="0.9"
              text-anchor="middle"
              alignment-baseline="middle"
              font-family="Delirium"
              font-weight="900"
              className="textStyles"
            >
              ENGI
            </text>
          </clipPath>
        </defs>
      </svg>
      <video playsInline  autoPlay loop muted className={classes.video}>
        <source src={clip} type="video/mp4" />
      </video>
    </div>
  );
};

export default VideoText;
