import React, { useState, useEffect, useRef } from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Button, Dialog, Stack } from "@mui/material";
import useGsap from "../../hooks/useGsap";
import gsap from "gsap";
import { FiPlay, FiUsers } from "react-icons/fi";
import Spacer from "../Spacer";
import { Link } from "react-router-dom";
import { DateTime, Interval } from 'luxon';
import { makeStyles } from '@mui/styles';
import VHSGif from '../../assets/bg-brochure/Layx.gif'

const useStyles = makeStyles({
  dialogBackground: {
    backgroundImage: `url(${VHSGif})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center center'
  }
});

function Countdown() {
  // 2023-09-15 018:30:00
  const targetDate = DateTime.fromISO("2023-09-15T18:40:00"); // Use Luxon's DateTime.fromISO to parse ISO strings
  const [timeLeft, setTimeLeft] = useState(targetDate - new Date());
  const rootRef = useRef(null);
  const [text, setText] = useState("");

  useGsap(rootRef.current, () => {
    const texts = [
      "It's Happening",
      "What? What? What?",
      "NITK's Techfest",
      "When? When?",
      "13 14 15 October", // Assuming you have hours, minutes, and seconds defined
    ];

    const tl = gsap.timeline();
    const textSelector = ".countdown-text";

    texts.forEach((txt, index) => {
      tl.to(textSelector, {
        opacity: 0,
        y: 50,
        duration: 0.5,
        onComplete: () => setText(txt),
        ease: "power3",
      })
        .from(textSelector, { opacity: 0, y: -50, duration: 0.5 })
        .to(textSelector, { opacity: 1, y: 0, duration: 1 }); // Hold the text for 1 second
    });

    tl.to(textSelector, {
      opacity: 0,
      y: 50,
      duration: 0.5,
      onComplete: () => setText("Website Releasing on"),
      ease: "power3",
    })
      .from(textSelector, { opacity: 0, y: -50, duration: 0.5 })
      .to(textSelector, { opacity: 1, y: 0, duration: 1 });
    tl.from(".countdown", {
      duration: 1,
      y: 100,
      opacity: 0,
      ease: "expo.out",
    });

    tl.from(".appear", {
      duration: 1,
      y: 100,
      opacity: 0,
      ease: "expo.out",
      stagger: 0.5,
    });
  });

  const classes = useStyles();

  useEffect(() => {
    const interval = setInterval(() => {
      const now = DateTime.local(); // Get the current local time using Luxon
      const timeDifference = targetDate.diff(now, ['days', 'hours', 'minutes', 'seconds']); // Compute the difference using Luxon's diff method

      // Convert the timeDifference to milliseconds using Luxon's Duration object
      const timeDifferenceInMs = timeDifference.as('milliseconds');
      setTimeLeft(timeDifferenceInMs);

      if (timeDifferenceInMs <= 0) {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  if (timeLeft <= 0) {
    return null; // Don't display the component if the target date has passed
  }

// Using Luxon's Duration object to extract days, hours, minutes, and seconds
  const duration = Interval.fromDateTimes(DateTime.local(), DateTime.local().plus({ milliseconds: timeLeft })).toDuration(['days', 'hours', 'minutes', 'seconds']);

  const days = duration.days;
  const hours = duration.hours;
  const minutes = duration.minutes;
  const seconds = Math.floor(duration.seconds);
  return (
    <Dialog fullScreen open={true}
    >
      <Box
        className="beforerelease"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        height="100vh"
        bgcolor="rgba(0, 0, 0, 1)"
        ref={rootRef}
        className={classes.dialogBackground}
      >
        <Typography align="center" variant="h4" className="countdown-text">
          {text}
        </Typography>

        <Typography align="center" className="countdown" variant="h1">
          {`${days}days ${hours}h ${minutes}m ${seconds}s`}
        </Typography>

        <Spacer size="sm" />

        {/*<Stack direction="row" gap={2}>*/}
        {/*  <Link to="/brochure">*/}
        {/*    <Button className="appear" endIcon={<FiPlay />}>*/}
        {/*      Brochure*/}
        {/*    </Button>*/}
        {/*  </Link>*/}
        {/*  <Link to="/ambassador">*/}
        {/*    <Button className="appear" endIcon={<FiUsers />}>*/}
        {/*      Campus Ambassadors*/}
        {/*    </Button>*/}
        {/*  </Link>*/}
        {/*</Stack>*/}
      </Box>
    </Dialog>
  );
}

export default Countdown;
