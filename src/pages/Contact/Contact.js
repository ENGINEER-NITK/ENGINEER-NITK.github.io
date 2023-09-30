import React, { useRef, useState } from 'react';
import { Box, Button, Container, Grid, Typography } from '@mui/material';
import Appbar from '../../components/Appbar';
import Footer from '../../components/common/footer';
import Spacer from '../../components/Spacer';
import useGsap from '../../hooks/useGsap';
import Typeform from '../../components/Typeform';
import gsap from 'gsap';
import bgBrouchure from '../../assets/jpg/bg-brochure.jpg';
import contactBG from '../../assets/jpg/contactBG.jpg';
import GradientText from '../../components/common/gradienttext';

const Contact = () => {
  const rootRef = useRef();
  const [selectedOption, setSelectedOption] = useState(null);

  const handleQueryOptionClick = (queryOption) => {
    setSelectedOption(queryOption);
  };

  const handleGoBack = (option) => {
    if (option === null) setSelectedOption(null);
    else {
      setSelectedOption(option);
    }
  };

  useGsap(rootRef.current, () => {
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: '.trigger',
        start: 'top 10%',
        end: '+=2000',
        pin: '.trigger',
        pinSpacing: true,
        scrub: 1,
        immediateRender: false,
      },
    });

    timeline.fromTo(
      '.slide-in-text',
      {
        y: 800,
      },
      {
        y: -200,
        duration: 1,
      },
      '>-=0.5',
    );
  });

  return (
    <Box
      ref={rootRef}
      sx={{
        backgroundColor: 'common.black',
        // padding: '20px',
        // paddingTop: '10px',
      }}
    >
      <Appbar />
      <Container maxWidth="lg" color="white">
        <Box pt={20} pb={10}>
          <GradientText primary="Contact Us" secondary="Reach out to us" />
          <Spacer size="xs" />
        </Box>
        <Grid
          container
          // p={9}
          mb={10}
          sx={{
            border: '2px solid rgba(11, 255, 255, 0.7)',
            borderRadius: '10px',
            backgroundColor: '#0e0e0e',
            padding: {
              xs: '20px',
            },
          }}
        >
          <Grid item xs={12} md={6}>
            {' '}
            {selectedOption === null ? (
              <Box mt={5} textAlign="left">
                <Typography variant="h6" sx={{ color: '#c8f704', marginBottom: '10px' }}>
                  1. What is your query related to ?
                </Typography>{' '}
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                  <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    sx={{
                      marginBottom: '10px',
                      borderRadius: '10px',
                      backgroundColor: 'rgba(11, 255, 255, 0.1)',
                      color: 'rgba(11, 255, 255, 0.7)',
                      textAlign: 'left',
                      border: '2px solid rgba(11, 255, 255, 0.7)',
                      ':hover': {
                        backgroundColor: 'rgba(11, 255, 255, 0.2)',
                      },
                    }}
                    onClick={() => handleQueryOptionClick('Our Team')}
                  >
                    A.Our Team{' '}
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    sx={{
                      marginBottom: '10px',
                      border: '2px solid rgba(11, 255, 255, 0.7)',
                      borderRadius: '10px',
                      backgroundColor: 'rgba(11, 255, 255, 0.1)',
                      color: 'rgba(11, 255, 255, 0.7)',
                      ':hover': {
                        backgroundColor: 'rgba(11, 255, 255, 0.2)',
                      },
                    }}
                    onClick={() => handleQueryOptionClick('Events')}
                  >
                    B.Events{' '}
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    sx={{
                      marginBottom: '10px',
                      border: '2px solid rgba(11, 255, 255, 0.7)',
                      borderRadius: '10px',
                      backgroundColor: 'rgba(11, 255, 255, 0.1)',
                      color: 'rgba(11, 255, 255, 0.7)',
                      ':hover': {
                        backgroundColor: 'rgba(11, 255, 255, 0.2)',
                      },
                    }}
                    onClick={() => handleQueryOptionClick('Lost and Found')}
                  >
                    C.Lost and Found{' '}
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    sx={{
                      marginBottom: '10px',
                      border: '2px solid rgba(11, 255, 255, 0.7)',
                      borderRadius: '10px',
                      backgroundColor: 'rgba(11, 255, 255, 0.1)',
                      color: 'rgba(11, 255, 255, 0.7)',
                      ':hover': {
                        backgroundColor: 'rgba(11, 255, 255, 0.2)',
                      },
                    }}
                    onClick={() => handleQueryOptionClick('Accomodation')}
                  >
                    D.Accomodation{' '}
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    sx={{
                      marginBottom: '10px',
                      border: '2px solid rgba(11, 255, 255, 0.7)',
                      borderRadius: '10px',
                      backgroundColor: 'rgba(11, 255, 255, 0.1)',
                      color: 'rgba(11, 255, 255, 0.7)',
                      ':hover': {
                        backgroundColor: 'rgba(11, 255, 255, 0.2)',
                      },
                    }}
                    onClick={() => handleQueryOptionClick('Help Desk')}
                  >
                    E.Help Desk{' '}
                  </Button>{' '}
                </Box>{' '}
              </Box>
            ) : selectedOption === 'Our Team' ? (
              <Box mt={5} textAlign="left">
                {' '}
                {/* Render the "Our Team" form here */}{' '}
                <Typography variant="h6" sx={{ color: '#c8f704', marginBottom: '10px' }}>
                  2. Which Team is your query related to ? *
                </Typography>
                {/* Add the form fields for "Our Team" here */}{' '}
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                  <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    sx={{
                      marginBottom: '10px',
                      border: '2px solid rgba(11, 255, 255, 0.7)',
                      borderRadius: '10px',
                      backgroundColor: 'rgba(11, 255, 255, 0.1)',
                      color: 'rgba(11, 255, 255, 0.7)',
                      ':hover': {
                        backgroundColor: 'rgba(11, 255, 255, 0.2)',
                      },
                    }}
                    onClick={() => handleQueryOptionClick('Convener')}
                  >
                    A.Convener{' '}
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    sx={{
                      marginBottom: '10px',
                      border: '2px solid rgba(11, 255, 255, 0.7)',
                      borderRadius: '10px',
                      backgroundColor: 'rgba(11, 255, 255, 0.1)',
                      color: 'rgba(11, 255, 255, 0.7)',
                      ':hover': {
                        backgroundColor: 'rgba(11, 255, 255, 0.2)',
                      },
                    }}
                    onClick={() => handleQueryOptionClick('Co-Convener')}
                  >
                    B.Co - Convener{' '}
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    sx={{
                      marginBottom: '10px',
                      border: '2px solid rgba(11, 255, 255, 0.7)',
                      borderRadius: '10px',
                      backgroundColor: 'rgba(11, 255, 255, 0.1)',
                      color: 'rgba(11, 255, 255, 0.7)',
                      ':hover': {
                        backgroundColor: 'rgba(11, 255, 255, 0.2)',
                      },
                    }}
                    onClick={() => handleQueryOptionClick('Chief Coordinators')}
                  >
                    C.Chief Coordinators{' '}
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    sx={{
                      marginBottom: '10px',
                      border: '2px solid rgba(11, 255, 255, 0.7)',
                      borderRadius: '10px',
                      backgroundColor: 'rgba(11, 255, 255, 0.1)',
                      color: 'rgba(11, 255, 255, 0.7)',
                      ':hover': {
                        backgroundColor: 'rgba(11, 255, 255, 0.2)',
                      },
                    }}
                    onClick={() => handleQueryOptionClick('Marketing')}
                  >
                    D.Marketing{' '}
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    sx={{
                      marginBottom: '10px',
                      border: '2px solid rgba(11, 255, 255, 0.7)',
                      borderRadius: '10px',
                      backgroundColor: 'rgba(11, 255, 255, 0.1)',
                      color: 'rgba(11, 255, 255, 0.7)',
                      ':hover': {
                        backgroundColor: 'rgba(11, 255, 255, 0.2)',
                      },
                    }}
                    onClick={() => handleQueryOptionClick('Hospitality')}
                  >
                    E.Hospitality{' '}
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    sx={{
                      marginBottom: '10px',
                      border: '2px solid rgba(11, 255, 255, 0.7)',
                      borderRadius: '10px',
                      backgroundColor: 'rgba(11, 255, 255, 0.1)',
                      color: 'rgba(11, 255, 255, 0.7)',
                      ':hover': {
                        backgroundColor: 'rgba(11, 255, 255, 0.2)',
                      },
                    }}
                    onClick={() => handleQueryOptionClick('Publicity & Outreach')}
                  >
                    F.Publicity & Outreach{' '}
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    sx={{
                      marginBottom: '10px',
                      borderRadius: '10%',
                      backgroundColor: '#c8f704',
                      color: 'black',
                      textAlign: 'left',
                      border: '2px solid rgba(11, 255, 255, 0.7)',
                      ':hover': {
                        backgroundColor: 'rgba(11, 255, 255, 0)',
                        color: 'white',
                      },
                    }}
                    onClick={() => handleGoBack(null)}
                  >
                    Go Back{' '}
                  </Button>{' '}
                </Box>{' '}
              </Box>
            ) : selectedOption === 'Events' ? (
              <Box mt={5} textAlign="left">
                {' '}
                {/* Render the "Our Team" form here */}{' '}
                <Typography variant="h6" sx={{ color: '#c8f704', marginBottom: '10px' }}>
                  2. Event Heads *
                </Typography>
                {/* Add the form fields for "Our Team" here */}{' '}
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                  <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    sx={{
                      marginBottom: '10px',
                      border: '2px solid rgba(11, 255, 255, 0.7)',
                      borderRadius: '10px',
                      backgroundColor: 'rgba(11, 255, 255, 0.1)',
                      color: 'rgba(11, 255, 255, 0.7)',
                      ':hover': {
                        backgroundColor: 'rgba(11, 255, 255, 0.2)',
                      },
                    }}
                    onClick={() => handleQueryOptionClick('Tech Events Head')}
                  >
                    A.Tech Events Head{' '}
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    sx={{
                      marginBottom: '10px',
                      border: '2px solid rgba(11, 255, 255, 0.7)',
                      borderRadius: '10px',
                      backgroundColor: 'rgba(11, 255, 255, 0.1)',
                      color: 'rgba(11, 255, 255, 0.7)',
                      ':hover': {
                        backgroundColor: 'rgba(11, 255, 255, 0.2)',
                      },
                    }}
                    onClick={() => handleQueryOptionClick('Mech Event Head')}
                  >
                    B.Mech Event Head{' '}
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    sx={{
                      marginBottom: '10px',
                      border: '2px solid rgba(11, 255, 255, 0.7)',
                      borderRadius: '10px',
                      backgroundColor: 'rgba(11, 255, 255, 0.1)',
                      color: 'rgba(11, 255, 255, 0.7)',
                      ':hover': {
                        backgroundColor: 'rgba(11, 255, 255, 0.2)',
                      },
                    }}
                    onClick={() => handleQueryOptionClick('Pro Shows Head')}
                  >
                    C.Pro Shows Head{' '}
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    sx={{
                      marginBottom: '10px',
                      border: '2px solid rgba(11, 255, 255, 0.7)',
                      borderRadius: '10px',
                      backgroundColor: 'rgba(11, 255, 255, 0.1)',
                      color: 'rgba(11, 255, 255, 0.7)',
                      ':hover': {
                        backgroundColor: 'rgba(11, 255, 255, 0.2)',
                      },
                    }}
                    onClick={() => handleQueryOptionClick('Academic Events Head')}
                  >
                    D.Acad Events Head{' '}
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    sx={{
                      marginBottom: '10px',
                      borderRadius: '10%',
                      backgroundColor: '#c8f704',
                      color: 'black',
                      textAlign: 'left',
                      border: '2px solid rgba(11, 255, 255, 0.7)',
                      ':hover': {
                        backgroundColor: 'rgba(11, 255, 255, 0)',
                        color: 'white',
                      },
                    }}
                    onClick={() => handleGoBack(null)}
                  >
                    Go Back{' '}
                  </Button>{' '}
                </Box>{' '}
              </Box>
            ) : selectedOption === 'Lost and Found' ? (
              <Box mt={5} textAlign="left">
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: '20px',

                    maxWidth: 'auto',

                    margin: '0 auto',
                  }}
                >
                  <Typography variant="h6" sx={{ color: '#c8f704', marginBottom: '10px' }}>
                    Hospitality Head{' '}
                  </Typography>
                  <Typography variant="h5" sx={{ color: '#c8f704', marginBottom: '5px' }}>
                    AYUSH RAUNIAR{' '}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{ color: 'rgba(11, 255, 255, 0.7)', marginBottom: '15px' }}
                  >
                    +91 91294 89002{' '}
                  </Typography>
                  <a
                    href="mailto:ayushrauniyar.201ch014@nitk.edu.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: 'underline', color: '#c8f704' }}
                  >
                    <Typography
                      variant="body1"
                      sx={{
                        color: '#c8f704',
                        '&:hover': {
                          color: 'white',
                        },
                      }}
                    >
                      Mail Id
                    </Typography>{' '}
                  </a>{' '}
                </Box>{' '}
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  sx={{
                    marginBottom: '10px',
                    borderRadius: '10%',
                    backgroundColor: '#c8f704',
                    color: 'black',
                    textAlign: 'left',
                    border: '2px solid rgba(11, 255, 255, 0.7)',
                    ':hover': {
                      backgroundColor: 'rgba(11, 255, 255, 0)',
                      color: 'white',
                    },
                  }}
                  onClick={() => handleGoBack(null)}
                >
                  Go Back{' '}
                </Button>{' '}
              </Box>
            ) : selectedOption === 'Accomodation' ? (
              <Box
                mt={5}
                textAlign="left"
                sx={{
                  marginBottom: '10px',
                }}
              >
                <Box
                  mt={5}
                  mb={10}
                  textAlign="left"
                  sx={{
                    marginBottom: '15px',
                  }}
                >
                  <Typography variant="h6" sx={{ color: '#c8f704', marginBottom: '10px' }}>
                    Visit our website 's accommodation section to register for accommodation and to
                    know our accommodation policy and instructions{' '}
                  </Typography>
                  <Typography variant="h7" sx={{ color: 'white', marginBottom: '15px' }}>
                    or Contact our hospitality team{' '}
                  </Typography>{' '}
                </Box>
                <Box
                  mt={5}
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: '20px',

                    maxWidth: 'auto',

                    margin: '0 auto',
                  }}
                >
                  <Typography variant="h6" sx={{ color: '#c8f704', marginBottom: '10px' }}>
                    Hospitality Head{' '}
                  </Typography>
                  <Typography variant="h5" sx={{ color: '#c8f704', marginBottom: '5px' }}>
                    AYUSH RAUNIAR{' '}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{ color: 'rgba(11, 255, 255, 0.7)', marginBottom: '15px' }}
                  >
                    +91 91294 89002{' '}
                  </Typography>
                  <a
                    href="mailto:ayushrauniyar.201ch014@nitk.edu.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: 'underline', color: '#c8f704' }}
                  >
                    <Typography
                      variant="body1"
                      sx={{
                        color: '#c8f704',
                        '&:hover': {
                          color: 'white',
                        },
                      }}
                    >
                      Mail Id
                    </Typography>{' '}
                  </a>{' '}
                </Box>{' '}
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  sx={{
                    marginBottom: '10px',
                    borderRadius: '10%',
                    backgroundColor: '#c8f704',
                    color: 'black',
                    textAlign: 'left',
                    border: '2px solid rgba(11, 255, 255, 0.7)',
                    ':hover': {
                      backgroundColor: 'rgba(11, 255, 255, 0)',
                      color: 'white',
                    },
                  }}
                  onClick={() => handleGoBack(null)}
                >
                  Go Back{' '}
                </Button>{' '}
              </Box>
            ) : selectedOption === 'Help Desk' ? (
              <Box mt={5} textAlign="left">
                {' '}
                {/* Render the "Our Team" form here */}{' '}
                <Typography variant="h6" sx={{ color: '#c8f704', marginBottom: '10px' }}>
                  2. Chief Co - Ordinators *
                </Typography>
                {/* Add the form fields for "Our Team" here */}{' '}
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                  <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    sx={{
                      marginBottom: '10px',
                      border: '2px solid rgba(11, 255, 255, 0.7)',
                      borderRadius: '10px',
                      backgroundColor: 'rgba(11, 255, 255, 0.1)',
                      color: 'rgba(11, 255, 255, 0.7)',
                      ':hover': {
                        backgroundColor: 'rgba(11, 255, 255, 0.2)',
                      },
                    }}
                    onClick={() => handleQueryOptionClick('Gaurav Yadav')}
                  >
                    A.Gaurav Yadav{' '}
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    sx={{
                      marginBottom: '10px',
                      border: '2px solid rgba(11, 255, 255, 0.7)',
                      borderRadius: '10px',
                      backgroundColor: 'rgba(11, 255, 255, 0.1)',
                      color: 'rgba(11, 255, 255, 0.7)',
                      ':hover': {
                        backgroundColor: 'rgba(11, 255, 255, 0.2)',
                      },
                    }}
                    onClick={() => handleQueryOptionClick('Abhay Kumar')}
                  >
                    B.Abhay Kumar{' '}
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    sx={{
                      marginBottom: '10px',
                      border: '2px solid rgba(11, 255, 255, 0.7)',
                      borderRadius: '10px',
                      backgroundColor: 'rgba(11, 255, 255, 0.1)',
                      color: 'rgba(11, 255, 255, 0.7)',
                      ':hover': {
                        backgroundColor: 'rgba(11, 255, 255, 0.2)',
                      },
                    }}
                    onClick={() => handleQueryOptionClick('Omkar Chitupe')}
                  >
                    C.Omkar Chitupe{' '}
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    sx={{
                      marginBottom: '10px',
                      border: '2px solid rgba(11, 255, 255, 0.7)',
                      borderRadius: '10px',
                      backgroundColor: 'rgba(11, 255, 255, 0.1)',
                      color: 'rgba(11, 255, 255, 0.7)',
                      ':hover': {
                        backgroundColor: 'rgba(11, 255, 255, 0.2)',
                      },
                    }}
                    onClick={() => handleQueryOptionClick('Aryan Rawate')}
                  >
                    D.Aryan Rawate{' '}
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    sx={{
                      marginBottom: '10px',
                      border: '2px solid rgba(11, 255, 255, 0.7)',
                      borderRadius: '10px',
                      backgroundColor: 'rgba(11, 255, 255, 0.1)',
                      color: 'rgba(11, 255, 255, 0.7)',
                      ':hover': {
                        backgroundColor: 'rgba(11, 255, 255, 0.2)',
                      },
                    }}
                    onClick={() => handleQueryOptionClick('Racheet Vatsa')}
                  >
                    E.Racheet Vatsa{' '}
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    sx={{
                      marginBottom: '10px',
                      borderRadius: '10%',
                      backgroundColor: '#c8f704',
                      color: 'black',
                      textAlign: 'left',
                      border: '2px solid rgba(11, 255, 255, 0.7)',
                      ':hover': {
                        backgroundColor: 'rgba(11, 255, 255, 0)',
                        color: 'white',
                      },
                    }}
                    onClick={() => handleGoBack(null)}
                  >
                    Go Back{' '}
                  </Button>{' '}
                </Box>{' '}
              </Box>
            ) : selectedOption === 'Convener' ? (
              <Box
                mt={5}
                textAlign="left"
                sx={{
                  marginBottom: '10px',
                }}
              >
                <Box
                  mt={5}
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: '20px',

                    maxWidth: 'auto',

                    margin: '0 auto',
                  }}
                >
                  <Typography variant="h6" sx={{ color: '#c8f704', marginBottom: '10px' }}>
                    CONVENER{' '}
                  </Typography>
                  <Typography variant="h5" sx={{ color: '#c8f704', marginBottom: '5px' }}>
                    ABHAY THORAT{' '}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{ color: 'rgba(11, 255, 255, 0.7)', marginBottom: '15px' }}
                  >
                    +91 9096642803{' '}
                  </Typography>
                  <a
                    href="mailto:engineerconvener@nitk.edu.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: 'underline', color: '#c8f704' }}
                  >
                    <Typography
                      variant="body1"
                      sx={{
                        color: '#c8f704',
                        '&:hover': {
                          color: 'white',
                        },
                      }}
                    >
                      Mail Id             </Typography>{' '}
                  </a>{' '}
                  <a
                    href="mailto:abhaysthorat.201mt058@nitk.edu.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: 'underline', color: '#c8f704' }}
                  >
                    <Typography
                      variant="body1"
                      sx={{
                        color: '#c8f704',
                        '&:hover': {
                          color: 'white',
                        },
                      }}
                    >
                      Mail Id                    </Typography>{' '}
                  </a>{' '}
                </Box>{' '}
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  sx={{
                    marginBottom: '10px',
                    borderRadius: '10%',
                    backgroundColor: '#c8f704',
                    color: 'black',
                    textAlign: 'left',
                    border: '2px solid rgba(11, 255, 255, 0.7)',
                    ':hover': {
                      backgroundColor: 'rgba(11, 255, 255, 0)',
                      color: 'white',
                    },
                  }}
                  onClick={() => handleGoBack('Our Team')}
                >
                  Go Back{' '}
                </Button>{' '}
              </Box>
            ) : selectedOption === 'Co-Convener' ? (
              <Box
                mt={5}
                textAlign="left"
                sx={{
                  marginBottom: '10px',
                }}
              >
                <Box
                  mt={5}
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: '20px',

                    maxWidth: 'auto',

                    margin: '0 auto',
                  }}
                >
                  <Typography variant="h6" sx={{ color: '#c8f704', marginBottom: '10px' }}>
                    CO - CONVENER{' '}
                  </Typography>
                  <Typography variant="h5" sx={{ color: '#c8f704', marginBottom: '5px' }}>
                    SHASHANK RANJAN{' '}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{ color: 'rgba(11, 255, 255, 0.7)', marginBottom: '15px' }}
                  >
                    +91 6200968914{' '}
                  </Typography>
                  <a
                    href="mailto:shashankranjan.201me152nitk.edu.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: 'underline', color: '#c8f704' }}
                  >
                    <Typography
                      variant="body1"
                      sx={{
                        color: '#c8f704',
                        '&:hover': {
                          color: 'white',
                        },
                      }}
                    >
                      Mail Id                    </Typography>{' '}
                  </a>{' '}
                </Box>{' '}
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  sx={{
                    marginBottom: '10px',
                    borderRadius: '10%',
                    backgroundColor: '#c8f704',
                    color: 'black',
                    textAlign: 'left',
                    border: '2px solid rgba(11, 255, 255, 0.7)',
                    ':hover': {
                      backgroundColor: 'rgba(11, 255, 255, 0)',
                      color: 'white',
                    },
                  }}
                  onClick={() => handleGoBack('Our Team')}
                >
                  Go Back{' '}
                </Button>{' '}
              </Box>
            ) : selectedOption === 'Chief Coordinators' ? (
              <Box
                mt={5}
                textAlign="left"
                sx={{
                  marginBottom: '10px',
                }}
              >
                <Typography variant="h6" sx={{ color: '#c8f704', marginBottom: '10px' }}>
                  3. Chief Co - Ordinators *
                </Typography>
                {/* Add the form fields for "Our Team" here */}{' '}
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                  <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    sx={{
                      marginBottom: '10px',
                      border: '2px solid rgba(11, 255, 255, 0.7)',
                      borderRadius: '10px',
                      backgroundColor: 'rgba(11, 255, 255, 0.1)',
                      color: 'rgba(11, 255, 255, 0.7)',
                      ':hover': {
                        backgroundColor: 'rgba(11, 255, 255, 0.2)',
                      },
                    }}
                    onClick={() => handleQueryOptionClick('Gaurav Yadav')}
                  >
                    A.Gaurav Yadav{' '}
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    sx={{
                      marginBottom: '10px',
                      border: '2px solid rgba(11, 255, 255, 0.7)',
                      borderRadius: '10px',
                      backgroundColor: 'rgba(11, 255, 255, 0.1)',
                      color: 'rgba(11, 255, 255, 0.7)',
                      ':hover': {
                        backgroundColor: 'rgba(11, 255, 255, 0.2)',
                      },
                    }}
                    onClick={() => handleQueryOptionClick('Abhay Kumar')}
                  >
                    B.Abhay Kumar{' '}
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    sx={{
                      marginBottom: '10px',
                      border: '2px solid rgba(11, 255, 255, 0.7)',
                      borderRadius: '10px',
                      backgroundColor: 'rgba(11, 255, 255, 0.1)',
                      color: 'rgba(11, 255, 255, 0.7)',
                      ':hover': {
                        backgroundColor: 'rgba(11, 255, 255, 0.2)',
                      },
                    }}
                    onClick={() => handleQueryOptionClick('Omkar Chitupe')}
                  >
                    C.Omkar Chitupe{' '}
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    sx={{
                      marginBottom: '10px',
                      border: '2px solid rgba(11, 255, 255, 0.7)',
                      borderRadius: '10px',
                      backgroundColor: 'rgba(11, 255, 255, 0.1)',
                      color: 'rgba(11, 255, 255, 0.7)',
                      ':hover': {
                        backgroundColor: 'rgba(11, 255, 255, 0.2)',
                      },
                    }}
                    onClick={() => handleQueryOptionClick('Aryan Rawate')}
                  >
                    D.Aryan Rawate{' '}
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    sx={{
                      marginBottom: '10px',
                      border: '2px solid rgba(11, 255, 255, 0.7)',
                      borderRadius: '10px',
                      backgroundColor: 'rgba(11, 255, 255, 0.1)',
                      color: 'rgba(11, 255, 255, 0.7)',
                      ':hover': {
                        backgroundColor: 'rgba(11, 255, 255, 0.2)',
                      },
                    }}
                    onClick={() => handleQueryOptionClick('Racheet Vatsa')}
                  >
                    E.Racheet Vatsa{' '}
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    sx={{
                      marginBottom: '10px',
                      borderRadius: '10%',
                      backgroundColor: '#c8f704',
                      color: 'black',
                      textAlign: 'left',
                      border: '2px solid rgba(11, 255, 255, 0.7)',
                      ':hover': {
                        backgroundColor: 'rgba(11, 255, 255, 0)',
                        color: 'white',
                      },
                    }}
                    onClick={() => handleGoBack('Our Team')}
                  >
                    Go Back{' '}
                  </Button>{' '}
                </Box>{' '}
              </Box>
            ) : selectedOption === 'Marketing' ? (
              <Box
                mt={5}
                textAlign="left"
                sx={{
                  marginBottom: '10px',
                }}
              >
                <Typography variant="h6" sx={{ color: '#c8f704', marginBottom: '10px' }}>
                  3. Marketing Heads *
                </Typography>
                {/* Add the form fields for "Our Team" here */}{' '}
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                  <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    sx={{
                      marginBottom: '10px',
                      border: '2px solid rgba(11, 255, 255, 0.7)',
                      borderRadius: '10px',
                      backgroundColor: 'rgba(11, 255, 255, 0.1)',
                      color: 'rgba(11, 255, 255, 0.7)',
                      ':hover': {
                        backgroundColor: 'rgba(11, 255, 255, 0.2)',
                      },
                    }}
                    onClick={() => handleQueryOptionClick('ARYAMAN MUKHERJEE')}
                  >
                    A.ARYAMAN MUKHERJEE{' '}
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    sx={{
                      marginBottom: '10px',
                      border: '2px solid rgba(11, 255, 255, 0.7)',
                      borderRadius: '10px',
                      backgroundColor: 'rgba(11, 255, 255, 0.1)',
                      color: 'rgba(11, 255, 255, 0.7)',
                      ':hover': {
                        backgroundColor: 'rgba(11, 255, 255, 0.2)',
                      },
                    }}
                    onClick={() => handleQueryOptionClick('VAISHNOVI PANDITH')}
                  >
                    B.VAISHNOVI PANDITH{' '}
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    sx={{
                      marginBottom: '10px',
                      borderRadius: '10%',
                      backgroundColor: '#c8f704',
                      color: 'black',
                      textAlign: 'left',
                      border: '2px solid rgba(11, 255, 255, 0.7)',
                      ':hover': {
                        backgroundColor: 'rgba(11, 255, 255, 0)',
                        color: 'white',
                      },
                    }}
                    onClick={() => handleGoBack('Our Team')}
                  >
                    Go Back{' '}
                  </Button>{' '}
                </Box>{' '}
              </Box>
            ) : selectedOption === 'Hospitality' ? (
              <Box mt={5} textAlign="left">
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: '20px',

                    maxWidth: 'auto',

                    margin: '0 auto',
                  }}
                >
                  <Typography variant="h6" sx={{ color: '#c8f704', marginBottom: '10px' }}>
                    Hospitality Head{' '}
                  </Typography>
                  <Typography variant="h5" sx={{ color: '#c8f704', marginBottom: '5px' }}>
                    AYUSH RAUNIAR{' '}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{ color: 'rgba(11, 255, 255, 0.7)', marginBottom: '15px' }}
                  >
                    +91 91294 89002{' '}
                  </Typography>
                  <a
                    href="mailto:ayushrauniyar.201ch014@nitk.edu.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: 'underline', color: '#c8f704' }}
                  >
                    <Typography
                      variant="body1"
                      sx={{
                        color: '#c8f704',
                        '&:hover': {
                          color: 'white',
                        },
                      }}
                    >
                      Mail Id
                    </Typography>{' '}
                  </a>{' '}
                </Box>{' '}
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  sx={{
                    marginBottom: '10px',
                    borderRadius: '10%',
                    backgroundColor: '#c8f704',
                    color: 'black',
                    textAlign: 'left',
                    border: '2px solid rgba(11, 255, 255, 0.7)',
                    ':hover': {
                      backgroundColor: 'rgba(11, 255, 255, 0)',
                      color: 'white',
                    },
                  }}
                  onClick={() => handleGoBack('Our Team')}
                >
                  Go Back{' '}
                </Button>{' '}
              </Box>
            ) : selectedOption === 'Publicity & Outreach' ? (
              <Box
                mt={5}
                textAlign="left"
                sx={{
                  marginBottom: '10px',
                }}
              >
                <Typography variant="h6" sx={{ color: '#c8f704', marginBottom: '10px' }}>
                  3. Pro Team *
                </Typography>
                <a
                  href="mailto:engineernitkpublicity@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: 'underline', color: '#c8f704', margin: '15px' }}
                >
                  <Typography
                    variant="body1"
                    sx={{
                      color: '#c8f704',
                      '&:hover': {
                        color: 'white',
                      },
                    }}
                  >
                    Mail Id              </Typography>{' '}
                </a>
                {/* Add the form fields for "Our Team" here */}{' '}
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                  <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    sx={{
                      marginBottom: '10px',
                      border: '2px solid rgba(11, 255, 255, 0.7)',
                      borderRadius: '10px',
                      backgroundColor: 'rgba(11, 255, 255, 0.1)',
                      color: 'rgba(11, 255, 255, 0.7)',
                      ':hover': {
                        backgroundColor: 'rgba(11, 255, 255, 0.2)',
                      },
                    }}
                    onClick={() => handleQueryOptionClick('PRANAV V BAGAL')}
                  >
                    A.PRANAV V BAGAL{' '}
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    sx={{
                      marginBottom: '10px',
                      border: '2px solid rgba(11, 255, 255, 0.7)',
                      borderRadius: '10px',
                      backgroundColor: 'rgba(11, 255, 255, 0.1)',
                      color: 'rgba(11, 255, 255, 0.7)',
                      ':hover': {
                        backgroundColor: 'rgba(11, 255, 255, 0.2)',
                      },
                    }}
                    onClick={() => handleQueryOptionClick('SHUBHANKAR KATIYAR')}
                  >
                    B.SHUBHANKAR KATIYAR{' '}
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    sx={{
                      marginBottom: '10px',
                      border: '2px solid rgba(11, 255, 255, 0.7)',
                      borderRadius: '10px',
                      backgroundColor: 'rgba(11, 255, 255, 0.1)',
                      color: 'rgba(11, 255, 255, 0.7)',
                      ':hover': {
                        backgroundColor: 'rgba(11, 255, 255, 0.2)',
                      },
                    }}
                    onClick={() => handleQueryOptionClick('SUMUKHA S SHETTY')}
                  >
                    C.SUMUKHA S SHETTY{' '}
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    sx={{
                      marginBottom: '10px',
                      borderRadius: '10%',
                      backgroundColor: '#c8f704',
                      color: 'black',
                      textAlign: 'left',
                      border: '2px solid rgba(11, 255, 255, 0.7)',
                      ':hover': {
                        backgroundColor: 'rgba(11, 255, 255, 0)',
                        color: 'white',
                      },
                    }}
                    onClick={() => handleGoBack('Our Team')}
                  >
                    Go Back{' '}
                  </Button>{' '}
                </Box>{' '}
              </Box>
            ) : selectedOption === 'Tech Events Head' ? (
              <Box mt={5} textAlign="left">
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: '20px',

                    maxWidth: 'auto',

                    margin: '0 auto',
                  }}
                >
                  <Typography variant="h6" sx={{ color: '#c8f704', marginBottom: '10px' }}>
                    Tech Events Head{' '}
                  </Typography>
                  <Typography variant="h5" sx={{ color: '#c8f704', marginBottom: '5px' }}>
                    Tupe Aniket Ankush{' '}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{ color: 'rgba(11, 255, 255, 0.7)', marginBottom: '15px' }}
                  >
                    +91 82864 01789{' '}
                  </Typography>
                  <a
                    href="mailto:tupeaniket.201me160@nitk.edu.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: 'underline', color: '#c8f704' }}
                  >
                    <Typography
                      variant="body1"
                      sx={{
                        color: '#c8f704',
                        '&:hover': {
                          color: 'white',
                        },
                      }}
                    >
                      Mail Id                  </Typography>{' '}
                  </a>{' '}
                </Box>{' '}
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  sx={{
                    marginBottom: '10px',
                    borderRadius: '10%',
                    backgroundColor: '#c8f704',
                    color: 'black',
                    textAlign: 'left',
                    border: '2px solid rgba(11, 255, 255, 0.7)',
                    ':hover': {
                      backgroundColor: 'rgba(11, 255, 255, 0)',
                      color: 'white',
                    },
                  }}
                  onClick={() => handleGoBack('Events')}
                >
                  Go Back{' '}
                </Button>{' '}
              </Box>
            ) : selectedOption === 'Mech Event Head' ? (
              <Box mt={5} textAlign="left">
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: '20px',

                    maxWidth: 'auto',

                    margin: '0 auto',
                  }}
                >
                  <Typography variant="h6" sx={{ color: '#c8f704', marginBottom: '10px' }}>
                    Mech Events Head{' '}
                  </Typography>
                  <Typography variant="h5" sx={{ color: '#c8f704', marginBottom: '5px' }}>
                    Amogh Nayak{' '}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{ color: 'rgba(11, 255, 255, 0.7)', marginBottom: '15px' }}
                  >
                    +91 90199 86824{' '}
                  </Typography>{' '}
                </Box>{' '}
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  sx={{
                    marginBottom: '10px',
                    borderRadius: '10%',
                    backgroundColor: '#c8f704',
                    color: 'black',
                    textAlign: 'left',
                    border: '2px solid rgba(11, 255, 255, 0.7)',
                    ':hover': {
                      backgroundColor: 'rgba(11, 255, 255, 0)',
                      color: 'white',
                    },
                  }}
                  onClick={() => handleGoBack('Events')}
                >
                  Go Back{' '}
                </Button>{' '}
              </Box>
            ) : selectedOption === 'Pro Shows Head' ? (
              <Box mt={5} textAlign="left">
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: '20px',

                    maxWidth: 'auto',

                    margin: '0 auto',
                  }}
                >
                  <Typography variant="h6" sx={{ color: '#c8f704', marginBottom: '10px' }}>
                    Pro Shows Head{' '}
                  </Typography>
                  <Typography variant="h5" sx={{ color: '#c8f704', marginBottom: '5px' }}>
                    Himan{' '}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{ color: 'rgba(11, 255, 255, 0.7)', marginBottom: '15px' }}
                  >
                    +91 83089 88245{' '}
                  </Typography>
                  <a
                    href="mailto:himan.201me122@nitk.edu.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: 'underline', color: '#c8f704' }}
                  >
                    <Typography
                      variant="body1"
                      sx={{
                        color: '#c8f704',
                        '&:hover': {
                          color: 'white',
                        },
                      }}
                    >
                      Mail Id             </Typography>{' '}
                  </a>{' '}
                </Box>{' '}
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  sx={{
                    marginBottom: '10px',
                    borderRadius: '10%',
                    backgroundColor: '#c8f704',
                    color: 'black',
                    textAlign: 'left',
                    border: '2px solid rgba(11, 255, 255, 0.7)',
                    ':hover': {
                      backgroundColor: 'rgba(11, 255, 255, 0)',
                      color: 'white',
                    },
                  }}
                  onClick={() => handleGoBack('Events')}
                >
                  Go Back{' '}
                </Button>{' '}
              </Box>
            ) : selectedOption === 'Academic Events Head' ? (
              <Box mt={5} textAlign="left">
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: '20px',

                    maxWidth: 'auto',

                    margin: '0 auto',
                  }}
                >
                  <Typography variant="h6" sx={{ color: '#c8f704', marginBottom: '10px' }}>
                    Academic Events Head{' '}
                  </Typography>
                  <Typography variant="h5" sx={{ color: '#c8f704', marginBottom: '5px' }}>
                    Tijin{' '}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{ color: 'rgba(11, 255, 255, 0.7)', marginBottom: '15px' }}
                  >
                    +91 97781 94887{' '}
                  </Typography>
                  <a
                    href="mailto:tijin.201cs262@nitk.edu.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: 'underline', color: '#c8f704' }}
                  >
                    <Typography
                      variant="body1"
                      sx={{
                        color: '#c8f704',
                        '&:hover': {
                          color: 'white',
                        },
                      }}
                    >
                      Mail Id             </Typography>{' '}
                  </a>{' '}
                </Box>{' '}
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  sx={{
                    marginBottom: '10px',
                    borderRadius: '10%',
                    backgroundColor: '#c8f704',
                    color: 'black',
                    textAlign: 'left',
                    border: '2px solid rgba(11, 255, 255, 0.7)',
                    ':hover': {
                      backgroundColor: 'rgba(11, 255, 255, 0)',
                      color: 'white',
                    },
                  }}
                  onClick={() => handleGoBack('Events')}
                >
                  Go Back{' '}
                </Button>{' '}
              </Box>
            ) : selectedOption === 'Gaurav Yadav' ? (
              <Box mt={5} textAlign="left">
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: '20px',

                    maxWidth: 'auto',

                    margin: '0 auto',
                  }}
                >
                  <Typography variant="h6" sx={{ color: '#c8f704', marginBottom: '10px' }}>
                    Chief Co - Ordinator{' '}
                  </Typography>
                  <Typography variant="h5" sx={{ color: '#c8f704', marginBottom: '5px' }}>
                    GAURAV YADAV{' '}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{ color: 'rgba(11, 255, 255, 0.7)', marginBottom: '15px' }}
                  >
                    +91 6397 362 215{' '}
                  </Typography>
                  <a
                    href="mailto:gauravkumaryadav.201it219@nitk.edu.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: 'underline', color: '#c8f704' }}
                  >
                    <Typography
                      variant="body1"
                      sx={{
                        color: '#c8f704',
                        '&:hover': {
                          color: 'white',
                        },
                      }}
                    >
                      Mail Id
                    </Typography>{' '}
                  </a>{' '}
                </Box>{' '}
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  sx={{
                    marginBottom: '10px',
                    borderRadius: '10%',
                    backgroundColor: '#c8f704',
                    color: 'black',
                    textAlign: 'left',
                    border: '2px solid rgba(11, 255, 255, 0.7)',
                    ':hover': {
                      backgroundColor: 'rgba(11, 255, 255, 0)',
                      color: 'white',
                    },
                  }}
                  onClick={() => handleGoBack('Help Desk')}
                >
                  Go Back{' '}
                </Button>{' '}
              </Box>
            ) : selectedOption === 'Abhay Kumar' ? (
              <Box mt={5} textAlign="left">
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: '20px',

                    maxWidth: 'auto',

                    margin: '0 auto',
                  }}
                >
                  <Typography variant="h6" sx={{ color: '#c8f704', marginBottom: '10px' }}>
                    Chief Co - Ordinator{' '}
                  </Typography>
                  <Typography variant="h5" sx={{ color: '#c8f704', marginBottom: '5px' }}>
                    ABHAY KUMAR{' '}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{ color: 'rgba(11, 255, 255, 0.7)', marginBottom: '15px' }}
                  >
                    +91 97984 99056{' '}
                  </Typography>
                  <a
                    href="mailto:abhaykumar.201mt001@nitk.edu.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: 'underline', color: '#c8f704' }}
                  >
                    <Typography
                      variant="body1"
                      sx={{
                        color: '#c8f704',
                        '&:hover': {
                          color: 'white',
                        },
                      }}
                    >
                      Mail Id                  </Typography>{' '}
                  </a>{' '}
                </Box>{' '}
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  sx={{
                    marginBottom: '10px',
                    borderRadius: '10%',
                    backgroundColor: '#c8f704',
                    color: 'black',
                    textAlign: 'left',
                    border: '2px solid rgba(11, 255, 255, 0.7)',
                    ':hover': {
                      backgroundColor: 'rgba(11, 255, 255, 0)',
                      color: 'white',
                    },
                  }}
                  onClick={() => handleGoBack('Help Desk')}
                >
                  Go Back{' '}
                </Button>{' '}
              </Box>
            ) : selectedOption === 'Omkar Chitupe' ? (
              <Box mt={5} textAlign="left">
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: '20px',

                    maxWidth: 'auto',

                    margin: '0 auto',
                  }}
                >
                  <Typography variant="h6" sx={{ color: '#c8f704', marginBottom: '10px' }}>
                    Chief Co - Ordinator{' '}
                  </Typography>
                  <Typography variant="h5" sx={{ color: '#c8f704', marginBottom: '5px' }}>
                    OMKAR CHITUPE{' '}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{ color: 'rgba(11, 255, 255, 0.7)', marginBottom: '15px' }}
                  >
                    +91 73878 41725{' '}
                  </Typography>
                  <a
                    href="mailto:chitupeonkar.201cv214@nitk.edu.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: 'underline', color: '#c8f704' }}
                  >
                    <Typography
                      variant="body1"
                      sx={{
                        color: '#c8f704',
                        '&:hover': {
                          color: 'white',
                        },
                      }}
                    >
                      Mail Id                    </Typography>{' '}
                  </a>{' '}
                </Box>{' '}
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  sx={{
                    marginBottom: '10px',
                    borderRadius: '10%',
                    backgroundColor: '#c8f704',
                    color: 'black',
                    textAlign: 'left',
                    border: '2px solid rgba(11, 255, 255, 0.7)',
                    ':hover': {
                      backgroundColor: 'rgba(11, 255, 255, 0)',
                      color: 'white',
                    },
                  }}
                  onClick={() => handleGoBack('Help Desk')}
                >
                  Go Back{' '}
                </Button>{' '}
              </Box>
            ) : selectedOption === 'Aryan Rawate' ? (
              <Box mt={5} textAlign="left">
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: '20px',

                    maxWidth: 'auto',

                    margin: '0 auto',
                  }}
                >
                  <Typography variant="h6" sx={{ color: '#c8f704', marginBottom: '10px' }}>
                    Chief Co - Ordinator{' '}
                  </Typography>
                  <Typography variant="h5" sx={{ color: '#c8f704', marginBottom: '5px' }}>
                    Aryan Rawate{' '}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{ color: 'rgba(11, 255, 255, 0.7)', marginBottom: '15px' }}
                  >
                    +91 95293 19352{' '}
                  </Typography>
                  <a
                    href="mailto:rawatearyanbalaji.201me246@nitk.edu.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: 'underline', color: '#c8f704' }}
                  >
                    <Typography
                      variant="body1"
                      sx={{
                        color: '#c8f704',
                        '&:hover': {
                          color: 'white',
                        },
                      }}
                    >
                      Mail Id
                    </Typography>{' '}
                  </a>{' '}
                </Box>{' '}
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  sx={{
                    marginBottom: '10px',
                    borderRadius: '10%',
                    backgroundColor: '#c8f704',
                    color: 'black',
                    textAlign: 'left',
                    border: '2px solid rgba(11, 255, 255, 0.7)',
                    ':hover': {
                      backgroundColor: 'rgba(11, 255, 255, 0)',
                      color: 'white',
                    },
                  }}
                  onClick={() => handleGoBack('Help Desk')}
                >
                  Go Back{' '}
                </Button>{' '}
              </Box>
            ) : selectedOption === 'Racheet Vatsa' ? (
              <Box mt={5} textAlign="left">
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: '20px',

                    maxWidth: 'auto',

                    margin: '0 auto',
                  }}
                >
                  <Typography variant="h6" sx={{ color: '#c8f704', marginBottom: '10px' }}>
                    Chief Co - Ordinator{' '}
                  </Typography>
                  <Typography variant="h5" sx={{ color: '#c8f704', marginBottom: '5px' }}>
                    Racheet Vatsa{' '}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{ color: 'rgba(11, 255, 255, 0.7)', marginBottom: '15px' }}
                  >
                    +91 6397 362 215{' '}
                  </Typography>
                  <a
                    href="mailto:racheetvatsa.201ec251@nitk.edu.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: 'underline', color: '#c8f704' }}
                  >
                    <Typography
                      variant="body1"
                      sx={{
                        color: '#c8f704',
                        '&:hover': {
                          color: 'white',
                        },
                      }}
                    >
                      Mail Id                    </Typography>{' '}
                  </a>{' '}
                </Box>{' '}
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  sx={{
                    marginBottom: '10px',
                    borderRadius: '10%',
                    backgroundColor: '#c8f704',
                    color: 'black',
                    textAlign: 'left',
                    border: '2px solid rgba(11, 255, 255, 0.7)',
                    ':hover': {
                      backgroundColor: 'rgba(11, 255, 255, 0)',
                      color: 'white',
                    },
                  }}
                  onClick={() => handleGoBack('Help Desk')}
                >
                  Go Back{' '}
                </Button>{' '}
              </Box>
            ) : selectedOption === 'ARYAMAN MUKHERJEE' ? (
              <Box mt={5} textAlign="left">
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: '20px',

                    maxWidth: 'auto',

                    margin: '0 auto',
                  }}
                >
                  <Typography variant="h6" sx={{ color: '#c8f704', marginBottom: '10px' }}>
                    Marketing Head{' '}
                  </Typography>
                  <Typography variant="h5" sx={{ color: '#c8f704', marginBottom: '5px' }}>
                    ARYAMAN MUKHERJEE{' '}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{ color: 'rgba(11, 255, 255, 0.7)', marginBottom: '15px' }}
                  >
                    +91 73496 41986{' '}
                  </Typography>
                  <a
                    href="mailto:aryaman.201mt009@nitk.edu.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: 'underline', color: '#c8f704' }}
                  >
                    <Typography
                      variant="body1"
                      sx={{
                        color: '#c8f704',
                        '&:hover': {
                          color: 'white',
                        },
                      }}
                    >
                      Mail Id               </Typography>{' '}
                  </a>{' '}
                </Box>{' '}
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  sx={{
                    marginBottom: '10px',
                    borderRadius: '10%',
                    backgroundColor: '#c8f704',
                    color: 'black',
                    textAlign: 'left',
                    border: '2px solid rgba(11, 255, 255, 0.7)',
                    ':hover': {
                      backgroundColor: 'rgba(11, 255, 255, 0)',
                      color: 'white',
                    },
                  }}
                  onClick={() => handleGoBack('Marketing')}
                >
                  Go Back{' '}
                </Button>{' '}
              </Box>
            ) : selectedOption === 'VAISHNOVI PANDITH' ? (
              <Box mt={5} textAlign="left">
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: '20px',

                    maxWidth: 'auto',

                    margin: '0 auto',
                  }}
                >
                  <Typography variant="h6" sx={{ color: '#c8f704', marginBottom: '10px' }}>
                    Marketing Head{' '}
                  </Typography>
                  <Typography variant="h5" sx={{ color: '#c8f704', marginBottom: '5px' }}>
                    VAISHNOVI PANDITH{' '}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{ color: 'rgba(11, 255, 255, 0.7)', marginBottom: '15px' }}
                  >
                    +91 97397 03000{' '}
                  </Typography>
                  <a
                    href="mailto:vaishnovipandith.201mn062@nitk.edu.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: 'underline', color: '#c8f704' }}
                  >
                    <Typography
                      variant="body1"
                      sx={{
                        color: '#c8f704',
                        '&:hover': {
                          color: 'white',
                        },
                      }}
                    >
                      Mail Id
                    </Typography>{' '}
                  </a>{' '}
                </Box>{' '}
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  sx={{
                    marginBottom: '10px',
                    borderRadius: '10%',
                    backgroundColor: '#c8f704',
                    color: 'black',
                    textAlign: 'left',
                    border: '2px solid rgba(11, 255, 255, 0.7)',
                    ':hover': {
                      backgroundColor: 'rgba(11, 255, 255, 0)',
                      color: 'white',
                    },
                  }}
                  onClick={() => handleGoBack('Marketing')}
                >
                  Go Back{' '}
                </Button>{' '}
              </Box>
            ) : selectedOption === 'PRANAV V BAGAL' ? (
              <Box mt={5} textAlign="left">
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: '20px',

                    maxWidth: 'auto',

                    margin: '0 auto',
                  }}
                >
                  <Typography variant="h6" sx={{ color: '#c8f704', marginBottom: '10px' }}>
                    Publicity Head{' '}
                  </Typography>
                  <Typography variant="h5" sx={{ color: '#c8f704', marginBottom: '5px' }}>
                    PRANAV V BAGAL{' '}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{ color: 'rgba(11, 255, 255, 0.7)', marginBottom: '15px' }}
                  >
                    +91 97422 59067{' '}
                  </Typography>
                  <a
                    href="mailto:pranavbagal.201mt037@nitk.edu.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: 'underline', color: '#c8f704' }}
                  >
                    <Typography
                      variant="body1"
                      sx={{
                        color: '#c8f704',
                        '&:hover': {
                          color: 'white',
                        },
                      }}
                    >
                      Mail Id                   </Typography>{' '}
                  </a>{' '}
                </Box>{' '}
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  sx={{
                    marginBottom: '10px',
                    borderRadius: '10%',
                    backgroundColor: '#c8f704',
                    color: 'black',
                    textAlign: 'left',
                    border: '2px solid rgba(11, 255, 255, 0.7)',
                    ':hover': {
                      backgroundColor: 'rgba(11, 255, 255, 0)',
                      color: 'white',
                    },
                  }}
                  onClick={() => handleGoBack('Publicity & Outreach')}
                >
                  Go Back{' '}
                </Button>{' '}
              </Box>
            ) : selectedOption === 'SHUBHANKAR KATIYAR' ? (
              <Box mt={5} textAlign="left">
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: '20px',

                    maxWidth: 'auto',

                    margin: '0 auto',
                  }}
                >
                  <Typography variant="h6" sx={{ color: '#c8f704', marginBottom: '10px' }}>
                    Publicity Executive{' '}
                  </Typography>
                  <Typography variant="h5" sx={{ color: '#c8f704', marginBottom: '5px' }}>
                    SHUBHANKAR KATIYAR{' '}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{ color: 'rgba(11, 255, 255, 0.7)', marginBottom: '15px' }}
                  >
                    +91 6392 569 224{' '}
                  </Typography>
                  <a
                    href="mailto:shubhankarkatiyar.221ee153@nitk.edu.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: 'underline', color: '#c8f704' }}
                  >
                    <Typography
                      variant="body1"
                      sx={{
                        color: '#c8f704',
                        '&:hover': {
                          color: 'white',
                        },
                      }}
                    >
                      Mail Id
                    </Typography>{' '}
                  </a>{' '}
                </Box>{' '}
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  sx={{
                    marginBottom: '10px',
                    borderRadius: '10%',
                    backgroundColor: '#c8f704',
                    color: 'black',
                    textAlign: 'left',
                    border: '2px solid rgba(11, 255, 255, 0.7)',
                    ':hover': {
                      backgroundColor: 'rgba(11, 255, 255, 0)',
                      color: 'white',
                    },
                  }}
                  onClick={() => handleGoBack('Publicity & Outreach')}
                >
                  Go Back{' '}
                </Button>{' '}
              </Box>
            ) : selectedOption === 'SUMUKHA S SHETTY' ? (
              <Box mt={5} textAlign="left">
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: '20px',

                    maxWidth: 'auto',

                    margin: '0 auto',
                  }}
                >
                  <Typography variant="h6" sx={{ color: '#c8f704', marginBottom: '10px' }}>
                    Publicity Executive{' '}
                  </Typography>
                  <Typography variant="h5" sx={{ color: '#c8f704', marginBottom: '5px' }}>
                    SUMUKHA S SHETTY{' '}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{ color: 'rgba(11, 255, 255, 0.7)', marginBottom: '15px' }}
                  >
                    +91 96328 40501{' '}
                  </Typography>
                  <a
                    href="mailto:sumukhasshetty.221ee155@nitk.edu.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: 'underline', color: '#c8f704' }}
                  >
                    <Typography
                      variant="body1"
                      sx={{
                        color: '#c8f704',
                        '&:hover': {
                          color: 'white',
                        },
                      }}
                    >
                      Mail Id
                    </Typography>{' '}
                  </a>{' '}
                </Box>{' '}
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  sx={{
                    marginBottom: '10px',
                    borderRadius: '10%',
                    backgroundColor: '#c8f704',
                    color: 'black',
                    textAlign: 'left',
                    border: '2px solid rgba(11, 255, 255, 0.7)',
                    ':hover': {
                      backgroundColor: 'rgba(11, 255, 255, 0)',
                      color: 'white',
                    },
                  }}
                  onClick={() => handleGoBack('Publicity & Outreach')}
                >
                  Go Back{' '}
                </Button>{' '}
              </Box>
            ) : null}{' '}
          </Grid>
          <Grid item xs={12} md={6}>
            {' '}
            {/* Right side image */}{' '}
            <Box
              mt={0}
              textAlign="center"
              sx={{
                display: { xs: 'none', md: 'block' },
              }}
            >
              <img
                src={contactBG}
                alt="Background"
                style={{
                  width: '100%',
                  height: 'auto',
                }}
              />{' '}
            </Box>{' '}
          </Grid>{' '}
        </Grid>{' '}
      </Container>{' '}
      <Footer />
    </Box>
  );
};

export default Contact;
