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
          Basic (Tier 1)  : Economical dormitory-style rooms for a one-day stay with passes to open-door events of the respective day - Rs. 499/person

          <br/>
          Standard (Tier 2) : Affordable rooms for a 3-day stay with passes to open-door events like Robowars, Drone Race, High Octane, and Wright flight , Guest Talks, Project/Art Displays and more - Rs. 1499
          <br/>


          Executive (Tier 3): Spacious Shivalik rooms for a 3-day stay with passes to events of Tier-2 and also including Halloween Themed Salsa Night(day1), Dandiya Night and India-Pak WC Fan Park( day2 ), and  Beach Events( day3 ) - Rs. 2499
          <br/>


          Premium (Tier 4): Spacious Shivalik rooms for a 3-day stay with passes to events of Tier-3 and also including Pro Shows(day 3) including Live Band (Pineapple Express) and DJ Night (DJ Roan) - Rs. 3499
          <br/>
          <br/>

          ** All tickets are for a single-person booking. The tier 2-3-4 tickets can be converted to a multi-share ( max 2 extra people can be accommodated in one room booked ) booking by paying extra fees of-
          <br/>

          Multi Sharing ( Tier 2 & 3 ) - Rs. 299 / extra person
          <br/>

          Multi Sharing ( Tier 4 ) - Rs. 399 / extra person
          <br/>
          <br/>

          **Note- the multi-sharing option is just an add-on for your booking of the room . No claims regarding booking of room showing ticket of multi shared accommodation will be valid . To avail a room, a single accommodation booking has to be made and then for extra people, you need to buy the add-on tickets .
          <br/>

          **Also , once you buy a ticket of a particular tier from one account , you need to use a different account to buy tickets of the same tier again.
          <br/>
          <br/>

          POC- Himanshu ( 83089 88245 )
          <br/>

          E Mail- Himan.201me122@nitk.edu.in
        </Typography>

        <Box sx={headingStyle}>
          <Typography variant="h4" gutterBottom sx={
            {
              fontSize: isMobile ? "30px" : "36px"
            }
          }>
            How to avail Accommodation
          </Typography>
        </Box>

        <Typography variant="body1" paragraph style={{ color: "white" }}>
          1. *Payment Method 1 - Direct Credit Card Payment:*
          <br/>
          To initiate a booking and generate an online ticket for accommodation, you can opt for a direct payment using your credit card. Once the payment is successfully processed, an online ticket will be generated and promptly emailed to you for your reference.
          <br/>
          <br/>

          2. *Payment Method 2 - UPI Payment in 'Pay Later' Mode:*
          <br/>

          Alternatively, you can choose to make a payment using UPI (Unified Payments Interface) in a 'pay later' mode. Here are the steps to follow for this payment method:
          <br/>
          <br/>

          - Select the 'pay later' option for UPI Payment during the booking process.
          <br/>

          - Fill out the necessary details in the provided Google form in the Yapsody Paylater.
          <br/>

          - Ensure all required details are accurately filled in the form.
          <br/>

          - Once the form is submitted, proceed with the pay later page and an E-ticket for pay later will be generated and sent to your email, confirming your registration request.
          <br/>
          <br/>

          *Confirmation of Payment via UPI and Final E-Ticket:*
          Our dedicated team will promptly verify your payment. Within 24 hours of your form submission, a final E-ticket confirming your purchase and accommodation booking will be generated and emailed to you. We strive to provide a seamless booking experience, and we look forward to welcoming you.
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
          accommodation has to be cancelled, at           Himan.201me122@nitk.edu.in
          . The
          subject of the email should be "Cancellation of Accommodation". For
          any cancellations before the deadline, 75% of the total amount shall
          be refunded within 10 working days after the festival. There shall be
          no refunds for cancellation after the deadline.
          <br />
          {/*Deadline of cancellation: 1st December 2022.*/}
        </Typography>
      </Container>
      </Paper>
  );
};

export default AccommodationPolicies;
