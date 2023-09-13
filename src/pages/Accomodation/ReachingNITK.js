import React from 'react';
import {
  Container,
  Typography,
  useMediaQuery,
  useTheme,
  Paper,
  Box,
} from "@mui/material";

const ReachingNITK = () => {
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
          Reaching NITK
        </Typography>
        <Typography variant="h6" paragraph style={{ color: "white" }}>
        By Railway 
        </Typography>
        <Typography variant="h5" paragraph style={{ color: "white" }}> 
        From Surathkal Railway Station
        </Typography>
        

        <Typography variant="body1" paragraph style={{ color: "white" }}>
        From Surathkal Railway Station (Station Code: SL) is the closest railway station to NITK. It is well-connected to major cities like Bangalore, Mumbai, Chennai, and others.
        </Typography>
        <Typography variant="body1" style={{ color: "white" }}>
          <Box component="span">&#8226; </Box>
          Passengers alighting at Surathkal station can engage auto rickshaws that will take them to the college 2 kms from the Station for Rs.120/-.
        </Typography>
        <Typography variant="body1" style={{ color: "white" }}>
          <Box component="span">&#8226; </Box>
          Further, one can also reach Surathkal Bus Stand and board regular service buses that will drop you at NITK main gate for Rs.15/-.
        </Typography>
        <Typography variant="body1" paragraph style={{ color: "white" }}>
        </Typography>
        <Typography variant="h5" paragraph style={{ color: "white" }}> 
        From Mangalore Railway Station
        </Typography>
        <Typography variant="body1" style={{ color: "white" }}>
          <Box component="span">&#8226; </Box>
          All Express buses to Udupi, Manipal, Kundapur, Bhatkal or Karkala drop you at the College main gate for Rs.40/-. the destination should be stated as "NITK".
        </Typography>
        
        <Typography variant="body1" style={{ color: "white" }}>
          <Box component="span">&#8226; </Box>
          A number of Private Taxis also available at Mangalore. NITK is 21 Kms. from Mangalore on the northern side on National Highway No.66. it will cost you around Rs.500/- .the destination should be stated as "NITK, Surathkal".
        </Typography>
        <Typography variant="body1" paragraph style={{ color: "white" }}>
        </Typography>
        <Typography variant="h6" paragraph style={{ color: "white" }}>
        By flight 
        </Typography>
        <Typography variant="body1" paragraph style={{ color: "white" }}>
          After reaching Mangalore International Airport
        </Typography>
        <Typography variant="body1" style={{ color: "white" }}>
          <Box component="span">&#8226; </Box>
          The most convenient option is to hire a taxi directly from Mangalore Airport to NITK. Taxis are readily available at the airport, and it's a convenient and quick way to reach your destination. It will cost you around Rs.800/- and auto will cost you around Rs.550/-
        </Typography>
        
        <Typography variant="body1" style={{ color: "white" }}>
          <Box component="span">&#8226; </Box>
          You can aslo come with the bus but it is little hectic. First you need to take the bus from the airport which is going to drop you at manglore bus stand and from manglore bus stand All Express buses to Udupi, Manipal, Kundapur, Bhatkal or Karkala drop you at the College main gate for Rs.40/-. the destination should be stated as "NITK".
        </Typography>
        <Typography variant="body1" paragraph style={{ color: "white" }}>
        </Typography>
        <Typography variant="h6" paragraph style={{ color: "white" }}>
        If you are travling by BUS
        </Typography>
        <Typography variant="body1" style={{ color: "white" }}>
          <Box component="span">&#8226; </Box>
          If you arrived at manglore bus stand. All Express buses to Udupi, Manipal, Kundapur, Bhatkal or Karkala drop you at the College main gate for Rs.40/-. the destination should be stated as "NITK".

        </Typography>
        
        <Typography variant="body1" style={{ color: "white" }}>
          <Box component="span">&#8226; </Box>
          If the bus in which you are travling from home is going towards Udupi, Manipal than you can simply ask the conductor to droup you at NITK.
        </Typography>
       
        <Typography variant="h4" gutterBottom style={{ color: "#c8f704", marginTop: "20px" }}>
          Registration Instructions
        </Typography>
        <Typography variant="body1" style={{ color: "white" }}>
          Every team has to register online on the official ENGI website for
          the competition.
        </Typography>
        <Typography variant="body1" style={{ color: "white" }}>
          A Team ID will be allocated to the team on registration which shall be
          used for future references.
        </Typography>
        <Typography variant="body1" style={{ color: "white" }}>
          The decision of the organizers or judges shall be treated as final and
          binding on all.
        </Typography>
        <Typography variant="body1" style={{ color: "white" }}>
          No responsibility will be held by Techfest, NITK for any late,
          lost, or misdirected entries.
        </Typography>
        <Typography variant="body1" style={{ color: "white" }}>
          Note that at any point in time the latest information will be that
          which is on the website. However, registered participants will be
          informed through mail about any changes.
        </Typography>
        <Typography variant="body1" style={{ color: "white" }}>
          All modes of official communication will be through the Techfest
          e-mail. Participants are advised to keep track of all folders in their
          e-mail accounts.
        </Typography>
      <iframe
        title="NITK"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.3906402102584!2d74.79173407518007!3d13.010777587308253!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba35211b768ac8f%3A0x6b1144ac2d5dadf3!2sNational%20Institute%20of%20Technology%20Karnataka%20(NITK)%20Surathkal.!5e0!3m2!1sen!2sin!4v1693931195636!5m2!1sen!2sin"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowfullscreen=""
        loading="lazy"
      ></iframe>
      </Container>




    </Paper>
  );
};

export default ReachingNITK;
