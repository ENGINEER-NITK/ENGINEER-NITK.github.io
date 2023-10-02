import React from 'react';
import dots from '../../assets/png/dots-2.png';
import { Box } from '@mui/material';

const Patternbg = ({children}) => {
  return (
    <Box sx={{
      backgroundImage: `url(${dots})`
    }}>
      {children}
    </Box>
  );
};

export default Patternbg;
