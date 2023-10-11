import React, { useRef,useState,useEffect } from 'react';
import { Box, Button, Chip, Container, IconButton, Skeleton, Stack, Typography } from '@mui/material';
import Appbar from '../../components/Appbar';
import Footer from '../../components/common/footer';
import Spacer from '../../components/Spacer';
import { Description, Heading } from '../../components/common/typography';
import EmblaCarousel from '../../components/common/carousel';
import GradientBox from '../../components/common/gradientbox';
import { FiArrowRight, FiCalendar, FiClock, FiMapPin, FiUser } from 'react-icons/fi';
import GradientText from '../../components/common/gradienttext';
import { useEventData } from '../../hooks/useEvents';
import CustomizedDialogs from './CustomizedDialogs';
import { AiFillTrophy } from 'react-icons/ai';
import easyMeshGradient from "easy-mesh-gradient";
import Patternbg from '../../components/common/patternbg';
import { CgScrollV } from 'react-icons/cg';
import {  GiTicket } from 'react-icons/gi';

const HeadCarousel = () => {
  const { data, isLoading } = useEventData();
  return (
    isLoading ? <Skeleton height='450px' />  :  <EmblaCarousel flex="0 0 100%" gap="20px">

      {data.map((event, index) => (
        <HeadEvent event={event} key={index} />
      ))}

    </EmblaCarousel>
  );
};

const HeadEvent = ({ subtitle, firstCta, secondCta, description, event }) => {
  const background = event.image;
  const title = event.title;
  const needRegister = event.needRegister;
  const rule = event.rule;
  const poc = event.POC;
  const poc_contact = event.POC_Contact;
  const date = event.Date;
  const venue = event.Venue
  const isCompetition = event.isCompetition
  const prize = event.Prize
  const registrationLink = event.registrationLink

  return (
    <GradientBox size='small' height="100%" color="white">
      <img
        style={{
          display: 'block',
          position: 'absolute',
          height: '100%',
          right: 0,
          bottom: 0,
          zIndex: -1,
          opacity: 0.4,
        }}
        src={background}
      />
      <Container maxWidth="lg">
        {/* <Typography fontFamily="Lato" variant="body1" gutterBottom>
          {title}
        </Typography> */}
        <Box sx={{ width: { xs: '100%', md: '45%' } }}>
          <Typography
            variant="h1"
            pt={8}
            sx={{
              fontSize: {
                xs: '48px',
                md: '72px',
              },
            }}
          >
            {title}
          </Typography>
          {/* <Typography fontWeight={700} variant="body1">
            Small Title{" "}
          </Typography> */}
          <Spacer size='xs'/>
          {/*{needRegister ? <Spacer size='xs'/> : <Typography variant='body1' pb={2}>*/}
          {/*  {des}*/}
          {/*</Typography>}*/}
        </Box>
        <Stack direction="row" flexWrap='wrap' alignItems="center" gap={1} mb={1}>
          {needRegister && <a target='_blank' href={registrationLink}><Chip color='primary' label="Registration"  icon={<GiTicket />} /></a>}
          {needRegister && <a target='_blank' href={rule}><Chip color='secondary' label="Rule book"  icon={<CgScrollV />} /></a> }
        </Stack>
        <Stack direction="row" flexWrap='wrap' alignItems="center" gap={1} mb={1}>
          {isCompetition && <>
            <Chip label={`₹${prize} Pool`} icon={<AiFillTrophy />} />
            <Chip label={`${poc} ${poc_contact}`} icon={<FiUser />}/>
          </>
          }
          <Chip label={date} icon={<FiCalendar />} />
        </Stack>
        <Chip label={venue} icon={<FiMapPin />} />
      </Container>
    </GradientBox>
  );
};

const Event = ({ name, description, img }) => {
  const { data, isLoading } = useEventData();
  // console.log(data);


  return (
    <GradientBox
      height="200px"
      size="small"
      background="linear-gradient(135deg, #f7f7f7, #cfcfcf)"
      img={img}
      action={true}
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
          <span style={{ backgroundColor: 'rgba(233,255,50, 0.7)' }}>{name}</span>
        </Typography>
        {/*<Description color="black">{description}</Description>*/}

        <Box position="absolute" right={'25px'} bottom="15px">
          <IconButton>
            <FiArrowRight />
          </IconButton>
        </Box>
      </Box>
    </GradientBox>
  );
};

const Events = () => {
  const { data, isLoading } = useEventData();
  const rootRef = useRef();
  // const [data, setData] = useState([]);
  // const binId = '650b2bb0205af66dd4a23cb4';
  // const apiKey = '$2a$10$ALWgRdFMPxMOF8WhLWbVmuC1Q.mfj6P/O1CvmwCXLT9LRC4HM6Woq';
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch(`https://api.jsonbin.io/v3/b/${binId}/latest`, {
  //         headers: {
  //           'X-Master-Key': apiKey,
  //         },
  //       });


  //       if (response.ok) {
  //         const jsonData = await response.json();
  //         setData(jsonData.record.events);
  //         console.log(data)
  //         // console.log(data.record.events)
  //       } else {
  //         console.error(`Failed to fetch data. Status code: ${response.status}`);
  //       }
  //     } catch (error) {
  //       console.error('Error:', error);
  //     }
  //   };

  //   fetchData();
  // },[]);

  return (
    <Box ref={rootRef} sx={{ backgroundColor: 'black' }}>
      <Patternbg>

      <Appbar />
      <Container maxWidth="lg" color="white" sx={{ pt: 15 }}>
        <HeadCarousel />
        <Spacer size="md" />
        <GradientText primary="Major" secondary="Events" />
        <Spacer size="xs" />
        {
          isLoading ?  <Skeleton width='100%' height='200px'/>  :     <EmblaCarousel gap="20px">
            {data.map((_, index) => (
              <Event name={`${_.title}`} description={`${_.description}`} img={`${_.image}`} />
            ))}
          </EmblaCarousel>

        }
        <Spacer size="lg" />



        {/*<Heading>Talks</Heading>*/}
        {/*<Spacer size="xs" />*/}
        {/*<EmblaCarousel gap="20px">*/}
        {/*{talks.map((_, index) => (*/}

        {/*    <Event name={`${_.title}`} description={`${_.description}`}  />*/}
        {/*    ))}*/}
        {/*</EmblaCarousel>*/}

        {/*<Spacer size="lg" />*/}
        {/*<Heading>CSR</Heading>*/}
        {/*<Spacer size="xs" />*/}
        {/*<EmblaCarousel gap="20px">*/}
        {/*{csr.map((_, index) => (*/}

        {/*    <Event name={`${_.title}`} description={`${_.description}`}  />*/}
        {/*    ))}*/}
        {/*</EmblaCarousel>*/}
        {/*<Spacer size="lg" />*/}

        {/*<Heading>Workshops</Heading>*/}
        {/*<Spacer size="xs" />*/}
        {/*<EmblaCarousel gap="20px">*/}
        {/*{workshops.map((_, index) => (*/}

        {/*    <Event name={`${_.title}`} description={`${_.description}`}  />*/}
        {/*    ))}*/}
        {/*</EmblaCarousel>*/}
        {/*<Spacer size="lg" />*/}

        {/*<Heading>Tech Conflux</Heading>*/}
        {/*<Spacer size="xs" />*/}
        {/*<EmblaCarousel gap="20px">*/}
        {/*{conflux.map((_, index) => (*/}

        {/*    <Event name={`${_.title}`} description={`${_.description}`}  />*/}
        {/*    ))}*/}
        {/*  /!* <Event name="Clubs" description="Bruh" /> *!/*/}
        {/*</EmblaCarousel>*/}
        {/*<Spacer size="lg" />*/}

        {/*<Heading>Department Events</Heading>*/}
        {/*<Spacer size="xs" />*/}
        {/*<EmblaCarousel gap="20px">*/}
        {/*  <Event name="Open House of Labs" description="Bruh" />*/}
        {/*  <Event name="Research Paper Presentation" description="Bruh" />*/}
        {/*  <Event name="Quizes" description="Bruh" />*/}
        {/*</EmblaCarousel>*/}
        {/*<Spacer size="lg" />*/}

        {/*<Heading>Gala</Heading>*/}
        {/*<Spacer size="xs" />*/}
        {/*<EmblaCarousel gap="20px">*/}
        {/*  <Event name="Bizwaves" description="Bruh" />*/}
        {/*  /!* <Event name="M.U.N" description="Bruh" /> *!/*/}
        {/*  <Event name="Tech Quizes" description="Bruh" />*/}
        {/*</EmblaCarousel>*/}
        {/*<Spacer size="lg" />*/}

        {/*<Heading>Gaming Events</Heading>*/}
        {/*<Spacer size="xs" />*/}
        {/*<EmblaCarousel gap="20px">*/}
        {/*  <Event name="B.G.M.I" description="Bruh" />*/}
        {/*  <Event name="FIFA" description="Bruh" />*/}
        {/*  <Event name="Valorant" description="Bruh" />*/}
        {/*</EmblaCarousel>*/}
        {/*<Spacer size="lg" />*/}

        {/*<Heading>Proshows</Heading>*/}
        {/*<Spacer size="xs" />*/}
        {/*<EmblaCarousel gap="20px">*/}
        {/*  <Event name="Comedy Night" description="Bruh" />*/}
        {/*  /!* <Event name="Star Eve" description="Bruh" /> *!/*/}
        {/*  /!* <Event name="Bike Stunt-Show" description="Bruh" /> *!/*/}
        {/*  <Event name="DJ / Band" description="Bruh" />*/}
        {/*</EmblaCarousel>*/}
        {/*<Spacer size="lg" />*/}

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
      </Patternbg>

    </Box>
  );
};

export default Events;
