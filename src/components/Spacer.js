import React from 'react';
import Box from '@mui/material/Box';

const Spacer = ({ size }) => {
    const getSize = (size) => {
        switch (size) {
            case 'xs':
                return 1;
            case 'sm':
                return 2;
            case 'md':
                return 3;
            case 'lg':
                return 4;
            case 'xl':
                return 5;
            default:
                return 0;
        }
    };

    const spacerSize = getSize(size);

    return <Box sx={{ p: `${spacerSize}rem` }} />;
};

export default Spacer;
