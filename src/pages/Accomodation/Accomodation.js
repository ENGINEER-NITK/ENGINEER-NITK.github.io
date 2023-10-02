import React, { useRef, useState } from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
  FormControl,
  MenuItem,
  Button,
  Select, Stack, Card, CardContent,
} from '@mui/material';
import Appbar from "../../components/Appbar";
import Footer from "../../components/common/footer";
import Spacer from "../../components/Spacer";
import useGsap from "../../hooks/useGsap";
import gsap from "gsap";
import { wrapWordsWithSpan } from "../../components/home/hero";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

// Import the tab content components
import AccommodationPolicies from "./AccommodationPolicies";
import Instructions from "./Instructions";
import ReachingNITK from "./ReachingNITK";
import ContactUs from "./ContactUs";
import GradientText from "../../components/common/gradienttext";
import { FiHome } from 'react-icons/fi';

const Accomodation = () => {
  const rootRef = useRef();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

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

    timeline.to(
      ".scaleContainer",
      {
        y: 300,
        scale: 2,
        opacity: 0,
        duration: 1,
      },
      "<"
    );

    timeline.to(
      ".scaleContainer img",
      {
        scale: 1.7,
        duration: 1,
        x: 50,
      },
      "<"
    );

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

    timeline.from(".char", {
      scrollTrigger: {
        trigger: ".char",
        scrub: true,
        start: "bottom bottom",
      },
      opacity: 0.2,
      stagger: 0.1,
    });

    const brochureTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".pin-brochure",
        start: "top 10%",
        end: "+=8000",
        pin: ".pin-brochure",
        pinSpacing: true,
        scrub: true,
      },
    });
  });

  const tabOptions = [
    "Accommodation Policies",
    "Instructions",
    "Reaching NITK",
    "Contact Us",
  ];

  const [selectedTab, setSelectedTab] = useState(tabOptions[0]);

  const renderTabContent = () => {
    switch (selectedTab) {
      case "Accommodation Policies":
        return <AccommodationPolicies />;
      case "Instructions":
        return <Instructions />;
      case "Reaching NITK":
        return <ReachingNITK />;
      case "Contact Us":
        return <ContactUs />;
      default:
        return null;
    }
  };


  const handleTabChangeOnLaptop = (event, newValue) => {
    setSelectedTab(tabOptions[newValue]);
    setValue(newValue); // Update the value state for the Tabs component
  };

  const handleTabChange = (event) => {
    const newValue = event.target.value;
    setSelectedTab(newValue);
    // You don't need to update the `value` state here.
  };

  return (

    <Box ref={rootRef} sx={{ backgroundColor: "common.black" }}>
      <Appbar />
      <Container maxWidth="md" color="white">
        <Box sx={{ paddingTop: isMobile ? "70px" : "80px" }}>
          <Spacer size='md'/>
          <Stack>
            <GradientText primary="Lodging" secondary="Queries" />
            <Stack direction="row" flexWrap='wrap' alignItems="center" gap={1} ml={37} mt={2} mb={1}>

        </Stack>

            {/* <a href="https://engineer.yapsody.com/event/book/785135/31574123?ref=elink" target="_blank" >Get Tickets for "Accommodation at NITK's Tech Fest Engineer 23 " only on Yapsody</a> */}
          </Stack>


          <Button startIcon={<FiHome/>} variant="contained" component='a' href="https://engineer.yapsody.com/event/index/785135?ref=ebtn" target='_blank'>BOOK ACCOMMODATION</Button>

          {isMobile ? (
            <FormControl
              fullWidth
              sx={{ marginBottom: "20px", marginTop: "34px", width: "100%" }}
            >
              <Select
                labelId="tab-select-label"
                id="tab-select"
                value={selectedTab}
                onChange={handleTabChange}
                label="Select Tab"
                sx={{
                  color: "white",
                  //style the dropdown text color
                  "& .MuiSelect-icon": {
                    color: "white",
                  },
                }}
              >
                {tabOptions.map((option, index) => (
                  <MenuItem key={option} value={option} sx={{ color: "black" }}>
                    {option}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          ) : (
            <Tabs
              value={value}
              onChange={handleTabChangeOnLaptop}
              aria-label="icon label tabs example"
              sx={{
                paddingX: "45px",
                paddingY: "10px",
              }}
            >
              {tabOptions.map((option, index) => (
                <Tab
                  key={option}
                  label={option}
                  value={index}
                  onChange={renderTabContent}
                />
              ))}
            </Tabs>
          )}
          {console.log(selectedTab)}
          {renderTabContent()}
        </Box>{" "}
        <Spacer size="sm" />
        {/* <Box className="pin-brochure">
          <Box height="5vh">
            <Grid container>
              <Grid item xs={12} md={7}>
                <Box position="relative"> </Box>{" "}
              </Grid>{" "}
              <Grid
                item
                xs={12}
                md={5}
                sx={{
                  display: {
                    md: "block",
                    xs: "none",
                  },
                }}
              >

              </Grid>{" "}
            </Grid>{" "}
          </Box>{" "}
        </Box>{" "} */}
      </Container>{" "}
      <Footer />
    </Box>
  );
};

export default Accomodation;
