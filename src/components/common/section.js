import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import easyMeshGradient from 'easy-mesh-gradient';

const Section = ({children}) => {

  const [time, setTime] = useState(0);
  const [stateIndex, setStateIndex] = useState(0);

  // Predefined states
  const states = ['123', '231', '321']; // Add as many states as you want

  // Time interval for changing states (in milliseconds)
  const interval = 2000; // e.g., 2000ms or 2s

  useEffect(() => {
    // Start the timer
    const timer = setInterval(() => {
      // Update the time and state index
      setTime(prevTime => prevTime + interval);
      setStateIndex(prevIndex => (prevIndex + 1) % states.length);
    }, interval);

    // Clean up the timer
    return () => clearInterval(timer);
  }, [interval, states.length]);

  const gradientString = easyMeshGradient({
    seed: states[stateIndex],
  });



  const boxBackground = `${gradientString}`

  return (
    <Box sx={{
      backgroundImage: '#000'
    }}>
      <Box>
      {children}
      </Box>
    </Box>
  );
};

export default Section;
