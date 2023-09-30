import React from "react";
import {
  Container,
  Typography,
  useMediaQuery,
  useTheme,
  Paper,
  Box,
} from "@mui/material";

const Instructions = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const pointStyle = {
    color: "white",
    marginBottom: "10px",
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
        <Typography variant="h4" gutterBottom style={{ color: "#c8f704" }}>
          Instructions{" "}
        </Typography>{" "}
        <Typography variant="body1" paragraph style={pointStyle}>
          <Box component="span"> 1.  </Box>
          All visitors carrying electronic devices or any similar items must declare them at the main gate of NITK Surathkal by obtaining a 'Gate Pass.' Additionally, upon departure from NITK Surathkal, security personnel will conduct checks of both the belongings and the 'Gate Pass.' Failure to comply with this procedure may result in the confiscation of the belongings.
        </Typography>
        <Typography variant="body1" paragraph style={pointStyle}>
          <Box component="span"> 2.  </Box>
          All guests will be provided with a mattress. Engineer will not provide
          mattress covers, blankets, or pillows. The guests are encouraged to
          arrange them on their own (if required), since the weather might get
          cold during the night.
        </Typography>
        <Typography variant="body1" paragraph style={pointStyle}>
          <Box component="span"> 3.  </Box>
          Any commodities issued to the guests would have to be returned in
          sound condition to the organizers during check-out.
        </Typography>
        <Typography variant="body1" paragraph style={pointStyle}>
          <Box component="span"> 4.  </Box>
          Random checks would be made to avoid any illegal stay at the campus.
          Any team failing to produce their electronic/physical receipts of
          accommodation would be heavily fined and disqualified.
        </Typography>
        <Typography variant="body1" paragraph style={pointStyle}>
          <Box component="span"> 5.  </Box>
          Entry will be only through the 'Main Gate' of NITK. All other
          gates will be closed for entry.
        </Typography>
        <Typography variant="body1" paragraph style={pointStyle}>
          <Box component="span"> 6.  </Box>
          All guests are required to carry their valid government photo ID
          proofs at all times. In addition, the student participants are also
          required to carry their valid College photo ID card. Any guest failing
          to produce their ID card will not be permitted inside the campus
          during Engineer 2023.
        </Typography>
        <Typography variant="body1" paragraph style={pointStyle}>
          <Box component="span"> 7.  </Box>
          Alcohol, drugs, sharp objects, and explosives of any kind are strictly
          prohibited inside the campus. Any other item if deemed unsafe will be
          prohibited. The decision of Security and Engineer team will be final
          in case of any disputes.
        </Typography>
        <Typography variant="body1" paragraph style={pointStyle}>
          <Box component="span"> 8.  </Box>
          No outside vehicles will be allowed into the campus during the
          Engineer 2023.
        </Typography>
        <Typography variant="body1" paragraph style={pointStyle}>
          <Box component="span"> 9.  </Box>
          All guests are required to maintain the decorum and cleanliness of the
          campus and follow the rules of the campus at all times.
        </Typography>
        <Typography variant="body1" style={pointStyle}>
          <Box component="span"> 10.  </Box>
          NITK Surathkal and Engineer 2023 will not be held responsible for any incidents or mishaps that may occur during the duration of your stay at Engineer 2023.
        </Typography>
      </Container>
    </Paper>
  );
};

export default Instructions;
