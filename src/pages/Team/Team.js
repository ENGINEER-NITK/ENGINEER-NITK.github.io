import React, { useRef, useState, useEffect } from 'react';
import useGsap from '../../hooks/useGsap';
import gsap from 'gsap';
// import styles from './Card.module.css';
import {
  Box,
  Container,
  Grid,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
  Link,
  IconButton,
  Select,
  MenuItem,
} from '@mui/material';
import Appbar from '../../components/Appbar';
import GradientText from '../../components/common/gradienttext';
import Spacer from '../../components/Spacer';
import Typeform from '../../components/Typeform';
import Footer from '../../components/common/footer';
import { el, tr } from 'date-fns/locale';
import { People, Category } from './constants';
import { FiLinkedin } from 'react-icons/fi';

const DynamicInfo = ({ selectedCategory }) => {
  const filteredPeople = People.filter((person) => person.position === selectedCategory);

  return (
    <Grid container spacing={3} sx={{ padding: '10px', justifyContent: 'center' }}>
      {filteredPeople.map((person, index) => (
        <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
          <Card
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              minHeight: '350px',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
              transition: 'transform 0.3s',
              '&:hover': {
                transform: 'scale(1.05)',
              },
            }}
          >
            <CardMedia
              height="200"
              image={person.imageUrl}
              alt={person.name}
              sx={{
                objectFit: 'cover',
                width: '100%',
                maxHeight: '200px',
                height: '100%',
              }}
            />
            <CardContent
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                flexGrow: 1,
              }}
            >
              <Typography variant="h6" sx={{ color: 'black', marginBottom: '10px' }}>
                {person.name}
              </Typography>
              <Typography variant="body2" sx={{ color: 'black', textAlign: 'center' }}>
                {person.description}
              </Typography>
              <div>
                <IconButton
                  sx={{
                    // ":hover": {
                    //   color: 'blue',
                    // },
                    marginRight: '10px',
                    transition: 'color 0.3s',


                    '&:focus': {
                      outline: 'none',
                    },
                  }}
                  component={Link}
                  href={person.linkedinUrl}
                  target="_blank"
                >
                  <FiLinkedin />
                </IconButton>

              </div>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};


const Team = () => {
  const [selectedCategory, setSelectedCategory] = useState('CONVENER');

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const rootRef = useRef();
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
    <Box ref={rootRef} sx={{ backgroundColor: 'common.black' }}>
      <Appbar />
      <Container maxWidth="lg" color="white">
        <Box pt={20}>
          <GradientText primary="Team" secondary="Meet us" />
          <Spacer size="xs" />
        </Box>
        <Box my={7} textAlign="center">
          <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
            {/* Dropdown for mobile screens */}
            {window.innerWidth <= 768 ? (
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  background: 'rgba(11, 255, 255, 0.1)',
                }}
              >
                <Select
                  value={selectedCategory}
                  onChange={handleCategoryChange}
                  sx={{
                    border: '2px solid rgba(11, 255, 255, 0.7)',
                    borderRadius: '5px',
                    color: 'rgba(11, 255, 255, 0.7)',
                    fontSize: '16px',
                    fontWeight: 'bold',
                    width: '100%',
                    position: 'sticky',
                    top: '0',
                    zIndex: '1',
                    background: 'rgba(11, 255, 255, 0.1)',
                  }}
                >
                  {Category.map((category) => (
                    <MenuItem key={category} value={category} sx={{ color: 'black' }}>
                      {category}
                    </MenuItem>
                  ))}
                </Select>
              </div>
            ) : (
              // Buttons for larger screens
              Category.map((category) => (
                <button
                  key={category}
                  style={{
                    background: 'rgba(11, 255, 255, 0.1)',
                    margin: '10px',
                    padding: '15px 30px',
                    border: '2px solid rgba(11, 255, 255, 0.7)',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    color: 'rgba(11, 255, 255, 0.7)',
                    fontSize: '16px',
                    fontWeight: 'bold',
                    transition: 'background-color 0.3s',
                  }}
                  onClick={() => handleCategoryChange({ target: { value: category } })}
                  onMouseOver={(e) => (e.target.style.backgroundColor = 'rgba(11, 255, 255, 0.2)')}
                  onMouseOut={(e) => (e.target.style.backgroundColor = 'rgba(11, 255, 255, 0.1)')}
                >
                  {category}
                </button>
              ))
            )}
          </div>
        </Box>
        {selectedCategory && <DynamicInfo selectedCategory={selectedCategory} />}
      </Container>
      <Footer />
    </Box>
  );
};

export default Team;
