import React from 'react';
import {
  Container,
  Typography,
  useMediaQuery,
  useTheme,
  Paper,
} from "@mui/material";

const ContactUs = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Paper
      elevation={3}
      sx={{
        padding: "20px",
        borderRadius: "10px",
        backgroundColor: "rgba(255, 255, 255, 0.1)",
        backdropFilter: "blur(10px)",
        border: "1px solid rgba(200, 247, 4, 0.2)",
        marginTop: "20px",
      }}
    >
      <Container maxWidth="md">
        <Typography variant="h4" gutterBottom style={{ color: "#c8f704" }}>
          Contact Us
        </Typography>
        <Typography variant="body1" paragraph style={{ color: "white" }}>
          • Himanshu ( 83089 88245 )
          <br/>
          Himan.201me122@nitk.edu.in
          <br/>
          • Gaurav Kumar (6397362215)
          <br/>
          gk9033170@gmail.com
          <br/>
          • Abhay Kumar (9798499056)
          <br/>
          kumarabhay1407@gmail.com
        </Typography>
        {/*<Typography variant="body1" paragraph style={{ color: "white" }}>*/}
        {/*  <br />*/}
        {/*  Hospitality and Marketing Manager*/}
        {/*  <br />*/}
        {/*  <a href="mailto:hospitality@techfest.org" style={{ color: "#c8f704" }}>*/}
        {/*    hospitality@techfest.org*/}
        {/*  </a>*/}
        {/*</Typography>*/}
        {/*<Typography variant="body1" style={{ color: "white" }}>*/}
        {/*  Kalpit Jain*/}
        {/*  <br />*/}
        {/*  Hospitality Coordinator*/}
        {/*  <br />*/}
        {/*  <a href="mailto:kalpitjain.techfest@gmail.com" style={{ color: "#c8f704" }}>*/}
        {/*    kalpitjain.techfest@gmail.com*/}
        {/*  </a>*/}
        {/*</Typography>*/}
      </Container>
    </Paper>
  );
};

export default ContactUs;
