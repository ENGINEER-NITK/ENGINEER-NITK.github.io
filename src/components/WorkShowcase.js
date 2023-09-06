import React from 'react';
import {Box, Button, Chip, Grid, Typography, useTheme} from "@mui/material";
import projects from "../data/experience";
import Skill from "./Misc/Skill";
import classes from './WorkShowcase.module.css'
import {motion } from 'framer-motion'
import {blueGrey, indigo} from "@mui/material/colors";
import {Splide, SplideSlide} from "@splidejs/react-splide";

const WorkShowcase = ({progress}) => {
    const projects_data = projects
    const project_index = progress !== 1 ? Math.floor(projects_data.length * progress ) : projects.length - 1
    const project = projects_data[project_index]
    return (
        <Box>
            <Project
            key={project.name}
            name={project.name} title={project.title}
            stack={project.stack}
            image={project.image}
            achvmnts={project.acvmnts}
            progress={(progress / project_index)}
            project={project}
            />
        </Box>
    );
};


const Project = ({name, title, stack, image, achvmnts, progress, project}) => {
    const theme = useTheme()

    const getAnimationDelay = (index) => `${index*0.1}s`

    return (
        <Box>
            <Grid container spacing={3}>
                <Grid item xs={12} md>
                    <Box style={{
                        position: 'relative',
                        zIndex: 2
                    }} overflow='hidden' borderRadius='20px' my={1} p={4}
                         sx={{
                             minHeight: {
                              md: '300px',
                              xs: 'max-content'
                             }
                         }}
                         bgcolor={'#11315A'} className={classes.card}>
                        <Grid container>
                            <Grid item xs={12} md={5}>
                       <Box >
                           <Typography className={classes.appear}
                                       style={{
                                           animationDelay: getAnimationDelay(0)
                                       }}
                                       paragraph variant='h5' fontWeight='bold' color='white'>
                               {project.title}
                           </Typography>

                           <Typography className={classes.appear}
                                       style={{
                                           animationDelay: getAnimationDelay(1)
                                       }}
                                       paragraph lineHeight='1.5' variant='h4' fontWeight='bold' color='white'>
                               {project.subtitle}
                           </Typography>

                           <Button className={classes.appear} variant='contained' style={{
                               backgroundColor: 'white',
                               borderRadius: '100px',
                               animationDelay: getAnimationDelay(2)
                           }}>
                               View
                           </Button>

                           <Typography p={3} style={{
                               animationDelay: getAnimationDelay(4),
                               position: 'absolute',
                               bottom: 0,
                               left: 0
                           }} sx={{
                               display:{
                                   md: 'block',
                                   xs : 'none'
                               }
                           }} className={classes.appear}  variant='body2' color='black'>
                               {project.description}
                           </Typography>
                       </Box>
                            </Grid>
                            <Grid item xs={7} >
                                <Box className={classes.image_container} style={{
                                    position: 'absolute',
                                    zIndex: -1,
                                }}>
                                    <img style={{
                                        borderRadius: '20px '
                                    }} src={image} width='500px'/>
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                    </Grid>
                <Grid item xs={12} md={5}>

                    <Typography gutterBottom fontFamily={theme.typography.secondFontFamily} variant='h4'>
                        {name}
                    </Typography>



                    <Box display='flex' flexWrap='wrap' gap={0.5} pb={2}>
                        {
                            stack.map(tech => <Skill name={tech.name} icon={tech.icon} />)
                        }
                    </Box>
                    <ul className={classes.list}>
                        <Box sx={{
                            display: {
                                md: 'block',
                                xs: 'none'
                            }
                        }}>

                        {
                            (achvmnts || []).map(achvmnt => <li className={classes.list_item}>
                                <Typography variant='body2'>
                                    {achvmnt}
                                </Typography>
                            </li>)
                        }
                        </Box>

                        <Box sx={{
                            display: {
                                md: 'none',
                                xs: 'block'
                            }
                        }}>
                            <Splide options={{
                                arrows: false,
                                autoplay: true,
                                interval: 1000,
                                type: 'loop'
                            }}>
                                {
                                    (achvmnts || []).map(achvmnt => <SplideSlide className={classes.list_item}>
                                        <Typography variant='body2'>
                                            {achvmnt}
                                        </Typography>
                                    </SplideSlide>)
                                }
                            </Splide>
                        </Box>
                    </ul>

                </Grid>
            </Grid>
        </Box>
    )
}
export default WorkShowcase;
