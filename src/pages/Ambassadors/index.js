import React from "react";
import { Box, Container } from "@mui/material";
import Appbar from "../../components/Appbar";
import Spacer from "../../components/Spacer";
import GradientText from "../../components/common/gradienttext";
import Footer from "../../components/common/footer";
import Leaderboard from "../../components/ambassadors/leaderboard";
import { useLeaderboardData } from "../../hooks/useQuery";

// const leaderboardData = [
//   {
//     id: 1,
//     promoCode: "DEL123",
//     name: "Aarav Sharma",
//     collegeName: "Delhi University",
//     score: 92,
//   },
//   {
//     id: 2,
//     promoCode: "MUM456",
//     name: "Priya Patel",
//     collegeName: "IIT Bombay",
//     score: 95,
//   },
//   {
//     id: 3,
//     promoCode: "BAN789",
//     name: "Vivek Singh",
//     collegeName: "IISc Bangalore",
//     score: 89,
//   },
//   {
//     id: 4,
//     promoCode: "CHE101",
//     name: "Ananya Reddy",
//     collegeName: "Anna University",
//     score: 87,
//   },
//   {
//     id: 5,
//     promoCode: "KOL102",
//     name: "Rohan Das",
//     collegeName: "Jadavpur University",
//     score: 90,
//   },
//   {
//     id: 6,
//     promoCode: "HYD103",
//     name: "Sai Krishnan",
//     collegeName: "Osmania University",
//     score: 93,
//   },
//   {
//     id: 7,
//     promoCode: "PUN104",
//     name: "Isha Deshmukh",
//     collegeName: "Pune University",
//     score: 91,
//   },
//   {
//     id: 8,
//     promoCode: "KER105",
//     name: "Fathima Nair",
//     collegeName: "Kerala University",
//     score: 94,
//   },
//   {
//     id: 9,
//     promoCode: "RAJ106",
//     name: "Lakshman Choudhary",
//     collegeName: "Rajasthan University",
//     score: 88,
//   },
//   {
//     id: 10,
//     promoCode: "GUJ107",
//     name: "Neha Patel",
//     collegeName: "Gujarat University",
//     score: 96,
//   },
// ];

const Ambassador = () => {
  const { data, isLoading } = useLeaderboardData();
  console.log(data);
  return (
    <Box sx={{ backgroundColor: "common.black" }}>
      <Appbar />
      <Container sx={{ minHeight: "100vh" }} maxWidth="lg" color="white">
        <Box py={10} />
        <GradientText primary="Campus" secondary="Ambassadors" />
        <Spacer size="sm" />

        {isLoading ? <p>Loading</p> : <Leaderboard data={data} />}

        <Spacer size="md" />
      </Container>
      <Footer />
    </Box>
  );
};

export default Ambassador;
