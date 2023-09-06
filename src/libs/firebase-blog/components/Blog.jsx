import React from 'react';
import {Box, Grid, Typography} from "@mui/material";
import {DateTime} from "luxon";
import classes from '../module.css/Blog.module.css'

const Blog = ({
                  title,
                  subtitle,
                  blog,
                  created_at,
                  updated_at,
                  cover_image_url,
                  doc,
                  onChange}) => {

    const human_readable_created_at = DateTime.fromJSDate(created_at.toDate()).toLocaleString(DateTime.DATETIME_MED)

    const handleClick = () => {
        onChange(doc)
    }

    return (
        <Grid item xs={12} md={4} lg={3}>
        <Box onClick={handleClick} className={classes.root}>
            <img height={'300px'} src={cover_image_url} style={{objectFit:'cover'}} width={'100%'}/>
            <Box p={2}>
            <Typography color={'textPrimary'} noWrap={true} pt={1} variant={'h6'}>
                {title}
            </Typography>
            <Typography noWrap paragraph gutterBottom color={'textSecondary'} variant={'subtitle2'}>
                {subtitle}
            </Typography>
            <Typography  align='right' gutterBottom color={'textSecondary'} variant={'subtitle2'}>
                {human_readable_created_at}
            </Typography>
            </Box>
        </Box>
        </Grid>
    );
};

export default Blog;
