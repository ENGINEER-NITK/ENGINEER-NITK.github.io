import React, { useRef } from "react";
import {
  Box,
  Button,
  Container,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import Appbar from "../../components/Appbar";
import Footer from "../../components/common/footer";
import Spacer from "../../components/Spacer";
import { Description, Heading } from "../../components/common/typography";
import EmblaCarousel from "../../components/common/carousel";
import GradientBox from "../../components/common/gradientbox";
import { FiArrowRight } from "react-icons/fi";
import events from "../../assets/data/events";
import carousal from "../../assets/data/carousal";
import { PopupButton } from '@typeform/embed-react';
import talks from "../../assets/data/talks";
import csr from "../../assets/data/csr";
import workshops from "../../assets/data/workshops"
import conflux from "../../assets/data/conflux"



const HeadCarousel = () => {
  return (
    <EmblaCarousel flex="0 0 100%" gap="20px">
      {events.map((_, index) => (
        <HeadEvent event={_} />
      ))}
    </EmblaCarousel>
  );
};

const HeadEvent = ({ subtitle, firstCta, secondCta, description, event }) => {
  const background = event.image;
  const title = event.title;
  const des = event.description;
  const needRegister = event.needRegister;
  const rule = event.rule;
  const needRule = event.needRule;
  return (
    <GradientBox color="white">
      <img
        style={{
          display: "block",
          position: "absolute",
          height: "400px",
          right: 0,
          bottom: 0,
          zIndex: -1,
        }}
        src={background}
      />
      <Container maxWidth="lg">
        {/* <Typography fontFamily="Lato" variant="body1" gutterBottom>
          {title}
        </Typography> */}
        <Box sx={{width:{xs:'100%', md: '45%'}}}>
          <Typography
            variant="h1"
            sx={{
              fontSize: {
                xs: "48px",
                md: "72px",
              },
            }}
          >
            {" "}
            {title}
          </Typography>
          {/* <Typography fontWeight={700} variant="body1">
            Small Title{" "}
          </Typography> */}
          <Typography variant="body1" pb={2}>
            {des}
          </Typography>
        </Box>
        <Stack direction="row" alignItems="center">
            {needRegister && <PopupButton id="R2TLZA3k" style = {{'margin-right': '20px',
                                                  'border-radius':' 8px',
                                                  'padding': '0',}} >
                                                  <Button variant="contained">Register</Button>
            </PopupButton>}
          {needRule && <Button href={rule} variant="outlined">Rulebook</Button>}
            




        </Stack>
      </Container>
    </GradientBox>
  );
};

const Event = ({ name, description,img }) => {
  return (
    <GradientBox
      height="100%"
      size="small"
      background="linear-gradient(135deg, #f7f7f7, #cfcfcf)"
      img = {img}
    >
      <Box>
        <Typography
          variant="h2"
          fontWeight="bold"
          fontFamily="typography.fontFamily"
          color="common.black"
          letterSpacing="-1px"
          fontSize="32px"
          lineHeight="1.2"
          gutterBottom
        >
          {name}
        </Typography>
        {/*{[...Array(rating)].map((_, index) => (*/}
        {/*  <AiFillStar key={index} />*/}
        {/*))}*/}
        <Description color="black">{description}</Description>

        <Box position="absolute" right={"25px"} bottom="15px">
        {/* <PopupButton id="R2TLZA3k" style = {{'margin-right': '20px',
                                                  'border-radius':' 8px',
                                                  'padding': '0',}} >
                                                  <FiArrowRight />
            </PopupButton> */}
          
        
          <IconButton sx={{ backgroundColor: "black", color: "white" }}>
            <FiArrowRight  />
           
            
          </IconButton>
        </Box>
      </Box>
    </GradientBox>
  );
};

const Events = () => {
  console.log(carousal);
  const rootRef = useRef();
  return (
    <Box ref={rootRef} sx={{ backgroundColor: "black" }}>
      <Appbar />
      <Container maxWidth="lg" color="white" sx={{ pt: 15 }}>
        <HeadCarousel />
        <Spacer size="md" />
        <Heading>Tech Committee</Heading>
        <Spacer size="xs" />
        <EmblaCarousel gap="20px">
        {events.map((_, index) => (
            
          <Event name={`${_.title}`} description={`${_.description}`} img={`${_.image}`}  />
          ))}
    
        </EmblaCarousel>

        <Spacer size="lg" />
        <Heading>Talks</Heading>
        <Spacer size="xs" />
        <EmblaCarousel gap="20px">
        {talks.map((_, index) => (
            
            <Event name={`${_.title}`} description={`${_.description}`}  />
            ))}
        </EmblaCarousel>

        <Spacer size="lg" />
        <Heading>CSR</Heading>
        <Spacer size="xs" />
        <EmblaCarousel gap="20px">
        {csr.map((_, index) => (
            
            <Event name={`${_.title}`} description={`${_.description}`}  />
            ))}
        </EmblaCarousel>
        <Spacer size="lg" />
        
        <Heading>Workshops</Heading>
        <Spacer size="xs" />
        <EmblaCarousel gap="20px">
        {workshops.map((_, index) => (
            
            <Event name={`${_.title}`} description={`${_.description}`}  />
            ))}
        </EmblaCarousel>
        <Spacer size="lg" />

        <Heading>Tech Conflux</Heading>
        <Spacer size="xs" />
        <EmblaCarousel gap="20px">
        {conflux.map((_, index) => (
            
            <Event name={`${_.title}`} description={`${_.description}`}  />
            ))}
          {/* <Event name="Clubs" description="Bruh" /> */}
        </EmblaCarousel>
        <Spacer size="lg" />

        <Heading>Department Events</Heading>
        <Spacer size="xs" />
        <EmblaCarousel gap="20px">
          <Event name="Open House of Labs" description="Bruh" />
          <Event name="Research Paper Presentation" description="Bruh" />
          <Event name="Quizes" description="Bruh" />
        </EmblaCarousel>
        <Spacer size="lg" />

        <Heading>Gala</Heading>
        <Spacer size="xs" />
        <EmblaCarousel gap="20px">
          <Event name="Bizwaves" description="Bruh" />
          {/* <Event name="M.U.N" description="Bruh" /> */}
          <Event name="Tech Quizes" description="Bruh" />
        </EmblaCarousel>
        <Spacer size="lg" />

        <Heading>Gaming Events</Heading>
        <Spacer size="xs" />
        <EmblaCarousel gap="20px">
          <Event name="B.G.M.I" description="Bruh" />
          <Event name="FIFA" description="Bruh" />
          <Event name="Valorant" description="Bruh" />
        </EmblaCarousel>
        <Spacer size="lg" />

        <Heading>Proshows</Heading>
        <Spacer size="xs" />
        <EmblaCarousel gap="20px">
          <Event name="Comedy Night" description="Bruh" />
          {/* <Event name="Star Eve" description="Bruh" /> */}
          {/* <Event name="Bike Stunt-Show" description="Bruh" /> */}
          <Event name="DJ / Band" description="Bruh" />
        </EmblaCarousel>
        <Spacer size="lg" />



        {/* {carousal.map((hello, index) => (
          <>
                <Heading>{hello.category}</Heading>
                <Spacer size="xs" />
                <EmblaCarousel gap="20px">
                {carousal.map((hull, index) => (
                <>
                    <Event name={hull.event} description="Bruh" />
                </>
                ))}{" "}
                </EmblaCarousel>
        
                <Spacer size="lg" />
              </>
            ))}{" "} */}

      </Container>
      <Footer />
    </Box>
  );
};

export default Events;
