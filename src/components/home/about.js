import { Container, Grid, Stack, Typography } from '@mui/material';
import GradientText from '../common/gradienttext';
import Spacer from '../Spacer';
import GradientBox from '../common/gradientbox';
import Iphone12 from '../../assets/png/iPhone 12 _ 12 Pro.png';
import BoxContent from '../common/boxcontent';
import Samsung from '../../assets/png/Samsung Galaxy Note20 Ultra 5G.png';
import React, { useRef } from 'react';
import styled from 'styled-components';
import Box from '@mui/material/Box';
import Home from '../../assets/svg/Dayflow Party Time.svg';
import { Description, Heading } from '../common/typography';
import useGsap, { animateOnScroll } from '../../hooks/useGsap';
import gsap from 'gsap';
import EmblaCarousel from '../common/carousel';
import dots from '../../assets/png/dots-2.png'
import Patternbg from '../common/patternbg';

const UserBoxContainer = styled(Box)`
  display: flex;
  align-items: center;
`;

const UserImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin-right: 20px;
`;

const UserInfo = styled(Box)`
  display: flex;
  flex-direction: column;
`;

const UserName = styled(Typography)`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 8px;
`;

const UserDescription = styled(Typography)`
  font-size: 16px;
  color: #555;
  margin-bottom: 16px;
`;

const SocialMediaLink = styled(Typography)`
  display: inline-block;
  margin-right: 12px;
  font-size: 20px;
  color: #333;
  text-decoration: none;

  &:hover {
    color: #007bff;
  }
`;

const About = () => {
  const eventsRef = useRef(null);

  useGsap('#about-root', () => {
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: '.trigger',
        start: 'top top',
        end: '+=500', //this was 2000 intially, changed to get it right for 1 card
        pin: '.trigger',
        pinSpacing: true,
        scrub: 1,
        immediateRender: false,
      },
    });

    // Calculate the height difference (scroll distance) for the left section
    const scrollDistance = eventsRef.current.scrollHeight - window.innerHeight;

    // Create a new timeline to scroll the left section
    timeline.to(eventsRef.current, {
      y: -scrollDistance,
    });
    animateOnScroll('.title', '.gradient-box');
  });
  return (
<Patternbg>
    <Container id="about-root" maxWidth="lg">
      <GradientText className="title" primary="Timeline" secondary="Live Events." />
      <Spacer size="sm" />
      <Box className="trigger">
        <Grid container spacing={1.5}>
          <Grid item xs={14} md={5}>
            <Box ref={eventsRef}>
              <Box sx={{ height: '100vh' }}>
                <PairOfEvents key={true} /> <DummyPairOfEvents />
                <DummyPairOfEvents />
              </Box>{' '}
            </Box>{' '}
          </Grid>{' '}
          <Grid item xs={12} md={7} sx={{
            height: {
              md: 'auto',
              xs: '400px'
            }
          }}>
              <iframe
                style={{
                  borderRadius: '18px',
                  boxShadow: '0px 0px 15px rgba(0,0,0,0.2)', // optional shadow for a bit of depth
                  border: '1px solid #ccc', // a light border
                }}
                src="https://map.proxi.co/r/2HgoqtF9Ep_1pZvrvUW7"
                allow="geolocation; clipboard-write"
                width="100%"
                height="100%"
                allowFullScreen
              >
                {' '}
              </iframe>{' '}
          </Grid>{' '}
        </Grid>{' '}
      </Box>{' '}
    </Container>
</Patternbg>
  );
};

const PairOfEvents = (key) => {
  return (
    <Box my={1}>
      <Stack direction="column">
        <GradientBox img="https://res.cloudinary.com/det9aw4gh/image/upload/v1694977732/FlashMob.jpg">
          <BoxContent
            key={key}
            width="65%"
            title="Flash Mob"
            description="Date: 19th October 2023"
            description2="Venue: CIDS 3.45 PM Onwards"
          />
        </GradientBox>{' '}
      </Stack>{' '}
    </Box>
  );
};
const DummyPairOfEvents = () => {
  return (
    <Box my={1}>
      <Stack direction="column">
        <GradientBox img="">
          <BoxContent
            width="65%"
            title="Coming Soon"
            description="SCHEDULE FOR ALL EVENTS WILL BE UPDATED SOON"
            key={false}
          />{' '}
        </GradientBox>{' '}
      </Stack>{' '}
    </Box>
  );
};

export default About;
