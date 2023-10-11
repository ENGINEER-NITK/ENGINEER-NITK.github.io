import React from 'react';
import dots from '../../assets/png/dots-2.png';
import { Box, Container, Typography } from '@mui/material';
import satelite from '../../assets/png/satelite.png'
import planet from '../../assets/png/planet.png'
import robot from '../../assets/png/ship.png'
import planet2 from '../../assets/png/planet-2.png'

const Patternbg = ({ children }) => {
  return (
    <Box overflow='hidden' component='section' className='section' position='relative' bgcolor='black'>

      {/* Left-side divs */}
      <Container maxWidth='lg' sx={{position: 'relative'}}>
        <div style={{ position: 'absolute', left: '-100px', top: '20%', zIndex: 0, filter: 'blur(8px)'}}>
          <img width='400px' src={satelite} alt="Random content 1" className="animateImage" data-speed=".1"/>
        </div>
        <div style={{ position: 'absolute', left: '-20px', top: '20%', zIndex: 1 }}>
        <img width='200px' src={satelite} alt="Random content 1" className="animateImage" data-speed=".4"/>
      </div>
      <div style={{ position: 'absolute', left: '-20px', bottom: '40%', zIndex: 1 }}>
        <img  width='144px' src={planet2} alt="Random content 2" className="animateImage" data-speed=".2"/>
      </div>

      {/* Right-side divs */}
      <div style={{ position: 'absolute', right: '-20px', top: '40%', zIndex: 1, transform: 'rotateZ(180deg)' }}>
        <img width='140px' src={robot} alt="Random content 3" className="animateImage" data-speed=".3"/>
      </div>
      <div style={{ position: 'absolute', right: '-20px', bottom: '20%', zIndex: 1 }}>
        <img  width='144px' src={planet} alt="Random content 4" className="animateImage" data-speed=".2"/>
      </div>

        <div style={{ position: 'absolute', right: '-100px', bottom: '20%', zIndex: 0, filter: 'blur(8px)' }}>
          <img  width='400px' src={planet} alt="Random content 4" className="animateImage" data-speed=".1"/>
        </div>

      {/* Main content */}
      <Box zIndex={0} position='relative'>
        {children}
      </Box>
      </Container>

    </Box>
  );
};

export default Patternbg;
