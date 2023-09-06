import React from "react";
import {
  Container,
  Typography,
  useMediaQuery,
  useTheme,
  Paper,
  Box,
} from "@mui/material";

const AccommodationPolicies = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const headingStyle = {
    color: "#c8f704",
    display: "flex",
    // alignItems: "center",
  };

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
        <Box sx={headingStyle}>
          <Typography variant="h4" gutterBottom sx={
            {
              fontSize: isMobile ? "30px" : "36px"
            }
          }>
            Accommodation Charges
          </Typography>
        </Box>
        <Typography variant="body1" paragraph style={{ color: "white" }}>
          Accommodation charges are INR 3499 per candidate for 5 days. Maximum
          of 5 nights stay allowed (15th Dec 6 AM - 19th Dec 10 AM). It does not
          include food facility. Guests can purchase their meals from the food
          court, night cafeteria, private hostel canteens, or hostel messes at
          subsidized rates.
        </Typography>

        <Box sx={headingStyle}>
          <Typography variant="h4" gutterBottom sx={
            {
              fontSize: isMobile ? "30px" : "36px"
            }
          }>
            Timing
          </Typography>
        </Box>
        <Typography variant="body1" paragraph style={{ color: "white" }}>
          Check-in: 6:00 AM to 10:00 PM on your check-in date
          <br />
          Check-out: Anytime on or before your check-out date
        </Typography>

        <Box sx={headingStyle}>
          <Typography variant="h4" gutterBottom sx={
            {
              fontSize: isMobile ? "30px" : "36px"
            }
          }>
            Cancellation Policy
          </Typography>
        </Box>
        <Typography variant="body1" paragraph style={{ color: "white" }}>
          Confirmed Accommodation can be cancelled through email only. Send an
          e-mail having your Acco ID and the number of members for whom
          accommodation has to be cancelled, at hospitality@techfest.org. The
          subject of the email should be "Cancellation of Accommodation". For
          any cancellations before the deadline, 75% of the total amount shall
          be refunded within 10 working days after the festival. There shall be
          no refunds for cancellation after the deadline.
          <br />
          Deadline of cancellation: 1st December 2022.
        </Typography>
      </Container>
      </Paper>
  );
};

export default AccommodationPolicies;
