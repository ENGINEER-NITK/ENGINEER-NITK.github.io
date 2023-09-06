import { Box, Container, Grid, Typography, useTheme } from "@mui/material";
import React from "react";
import GradientText from "../common/gradienttext";
import { Description, Heading } from "../common/typography";
import { Card } from "../common/containers";
import Time from "../../assets/svg/Dayflow Party Time.svg";
import Home from "../../assets/svg/Dayflow Work from Home.svg";
import Party from "../../assets/svg/Dayflow Park Life.svg";
import useGsap, { animateOnScroll } from "../../hooks/useGsap";

const Services = () => {
  useGsap("#services-root", () => {
    animateOnScroll(".title", ".gradient-box");
  });

  const servicesData = [
    {
      title: "Full-Stack Development",
      description:
        "Comprehensive web solutions from frontend to backend for a seamless user experience.",
      imageUrl: Home, // Replace with the actual image URL or import the image
    },
    {
      title: "Maintenance and Support",
      description:
        "Ensure smooth website operation with regular updates, backups, and technical assistance.",
      imageUrl: Party, // Replace with the actual image URL or import the image
    },
    {
      title: "Deployment and Server",
      description:
        "Efficiently configure and manage servers to ensure optimal performance and security.",
      imageUrl: Time, // Replace with the actual image URL or import the image
    },
    // Add more service objects as needed
  ];

  return (
    <Container id="services-root" maxWidth="lg">
      <Box className="title" pb={5}>
        <GradientText primary="Discover" secondary="Our Services." />
      </Box>

      <Grid container spacing={2}>
        {servicesData.map((service, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <ServiceCard {...service} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

const ServiceCard = ({ title, description, icon, imageUrl }) => {
  return (
    <Card backgroundImage={imageUrl}>
      <Heading pt={12} variant="h2">
        {title.split(" ")[0]} <br /> {title.split(" ").slice(1).join(" ")}
      </Heading>
      <Description variant="body1" color="textSecondary">
        {description}
      </Description>
    </Card>
  );
};

export default Services;
