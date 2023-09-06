import React, { useState, useEffect, useRef } from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Dialog } from "@mui/material";
import useGsap from "../../hooks/useGsap";
import gsap from "gsap";
function Countdown() {
  const targetDate = new Date("2023-09-15 018:30:00"); // Set your target date here
  const [timeLeft, setTimeLeft] = useState(targetDate - new Date());
  const rootRef = useRef(null);
  const [text, setText] = useState("Initial Text");

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
        ease: "expo.out",
      })
        .from(textSelector, { opacity: 0, y: -50, duration: 0.5 })
        .to(textSelector, { opacity: 1, y: 0, duration: 1 }); // Hold the text for 1 second
    });

    tl.to(textSelector, {
      opacity: 0,
      y: 50,
      duration: 0.5,
    });
    tl.from(".countdown", {
      duration: 1,
      y: 100,
      opacity: 0,
      ease: "expo.out",
    });
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const timeDifference = targetDate - now;

      setTimeLeft(timeDifference);

      if (timeDifference <= 0) {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  if (timeLeft <= 0) {
    return null; // Don't display the component if the target date has passed
  }

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));

  const hours = Math.floor(
    (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  return (
    <Dialog fullScreen open={true}>
      <Box
        className="beforerelease"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        height="100vh"
        bgcolor="#000"
        ref={rootRef}
      >
        <Typography align="center" variant="h4" className="countdown-text">
          {text}
        </Typography>

        <Typography align="center" className="countdown" variant="h1">
          {`${days}days ${hours}h ${minutes}m ${seconds}s`}
        </Typography>
      </Box>
    </Dialog>
  );
}

export default Countdown;
