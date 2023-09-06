import React, {useEffect} from 'react';
import {Box, Button, IconButton, Typography, useTheme} from "@mui/material";
import classes from '../../module.css/BottomSheet.module.css'

export const BottomSheet = ({children}) => {
    const theme = useTheme()
    useEffect(() => {
        document.body.classList.add('hidden')
        return () => document.body.classList.remove('hidden')
    }, [])
    return (
        <Box bgcolor={theme.palette.background.paper} py={theme.gutter.section} className={classes.root} width='100%' position='fixed' bottom={0} left={0}>
            <Box  sx={{
                px:{ xs:theme.gutter.appbar}
            }}>
                {children}
            </Box>
        </Box>
    );
};

export default BottomSheet;
