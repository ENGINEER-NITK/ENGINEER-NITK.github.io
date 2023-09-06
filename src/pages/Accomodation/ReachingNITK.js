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
        <Typography variant="body1" paragraph style={{ color: "white" }}>
          Travelling in Mumbai is very easy and systematic. The modes of
          travelling in Mumbai are taxis, auto rickshaws, local train, and BEST
          Buses. IIT Bombay is located at Powai, which is an eastern suburb in
          the North-Eastern part (Central Railway Line) of Mumbai.
        </Typography>
        <Typography variant="body1" paragraph style={{ color: "white" }}>
          The following link may provide you a rough estimate of the auto fares
          between two stations Taxi Auto fare.
        </Typography>
        <Typography variant="body1" paragraph style={{ color: "white" }}>
          Mumbai is in the form of a long narrow island, almost a peninsula,
          thrusting southwards into the Arabian Sea. In Mumbai, local trains run
          through the following routes:
        </Typography>
        <Typography variant="body1" style={{ color: "white" }}>
          <Box component="span">&#8226; </Box>
          Western Railway: Churchgate to Borivali/Virar and return.
        </Typography>
        <Typography variant="body1" style={{ color: "white" }}>
          <Box component="span">&#8226; </Box>
          Central Railway: Mumbai CST to Karjat/Kasara and return.
        </Typography>
        <Typography variant="body1" style={{ color: "white" }}>
          <Box component="span">&#8226; </Box>
          Harbour Route: Mumbai CST to Andheri and return.
        </Typography>
        <Typography variant="body1" style={{ color: "white" }}>
          <Box component="span">&#8226; </Box>
          New Bombay Route: Mumbai CST to Vashi/Panvel and return.
        </Typography>
        <Typography variant="body1" paragraph style={{ color: "white" }}>
          Kanjur Marg, a Local Train Station is the closest local train stop to
          IIT Bombay. It is located on the Central Railway line. An auto
          rickshaw from Kanjur-Marg station to IIT Bombay Main Gate costs Rs.45
          approx.
        </Typography>
        <Typography variant="body1" paragraph style={{ color: "white" }}>
          Important railway stations where you can get down are (also refer map):
        </Typography>
        <Typography variant="body1" style={{ color: "white" }}>
          <Box component="span">&#8226; </Box>
          Chhatrapati Shivaji Terminal (CST)
        </Typography>
        <Typography variant="body1" style={{ color: "white" }}>
          <Box component="span">&#8226; </Box>
          Churchgate
        </Typography>
        <Typography variant="body1" style={{ color: "white" }}>
          <Box component="span">&#8226; </Box>
          Mumbai Central
        </Typography>
        <Typography variant="body1" style={{ color: "white" }}>
          <Box component="span">&#8226; </Box>
          Dadar
        </Typography>
        <Typography variant="body1" style={{ color: "white" }}>
          <Box component="span">&#8226; </Box>
          Lokmanya Tilak Terminus
        </Typography>
        <Typography variant="body1" style={{ color: "white" }}>
          <Box component="span">&#8226; </Box>
          Thane
        </Typography>
        <Typography variant="body1" style={{ color: "white" }}>
          <Box component="span">&#8226; </Box>
          Borivali
        </Typography>
        <Typography variant="body1" style={{ color: "white" }}>
          <Box component="span">&#8226; </Box>
          Andheri
        </Typography>
        <Typography variant="body1" style={{ color: "white" }}>
          <Box component="span">&#8226; </Box>
          Bandra
        </Typography>
        <Typography variant="body1" style={{ color: "white" }}>
          <Box component="span">&#8226; </Box>
          Kalyan
        </Typography>
        <Typography variant="body1" paragraph style={{ color: "white" }}>
          Thane is the nearest station to IIT Bombay. Next is Lokmanya Tilak
          Terminus (LTT) (near Kurla) and Dadar is third in this regard.
        </Typography>
        <Typography variant="body1" paragraph style={{ color: "white" }}>
          The taxis ply through all of Mumbai. Auto rickshaws ply between
          Bandra-Borivali and Sion-Mulund and should be preferred if you have
          some heavy luggage, which may otherwise cause you inconvenience while
          travelling by local trains and buses. In taxis, you also have an option
          of AC Taxis-Cool Cabs, which is a more comfortable way of travel.
        </Typography>
        <Typography variant="body1" paragraph style={{ color: "white" }}>
          Trains/buses should be preferred if you carry less baggage with you,
          say a small bag per person. Please beware of pickpockets in locals and
          BEST buses.
        </Typography>
        <Typography variant="body1" paragraph style={{ color: "white" }}>
          Southbound trains on all the Local train lines are more crowded in the
          morning and thus should be avoided if the passenger is carrying
          baggage. Similarly, the northbound trains in the evening are more
          crowded.
        </Typography>
        <Typography variant="body1" paragraph style={{ color: "white" }}>
          With respect to mornings at Kanjurmarg station, travelling from Mumbai
          CST, Dadar or Kurla would be less crowded that travelling from Kalyan
          or Thane.
        </Typography>
        <Typography variant="body1" paragraph style={{ color: "white" }}>
          For buses/autorickshaws, the destination should be stated as "IIT Main
          Gate, Powai".
        </Typography>
        <Typography variant="body1" style={{ color: "white" }}>
          Please download m-indicator mobile application for hands-on maps &
          routes of Mumbai.
        </Typography>
        <Typography variant="h4" gutterBottom style={{ color: "#c8f704", marginTop: "20px" }}>
          Registration Instructions
        </Typography>
        <Typography variant="body1" style={{ color: "white" }}>
          Every team has to register online on the official Techfest website for
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
          No responsibility will be held by Techfest, IIT Bombay for any late,
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
