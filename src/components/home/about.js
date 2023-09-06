import { Container, Grid, Stack, Typography } from "@mui/material";
import GradientText from "../common/gradienttext";
import Spacer from "../Spacer";
import GradientBox from "../common/gradientbox";
import Iphone12 from "../../assets/png/iPhone 12 _ 12 Pro.png";
import BoxContent from "../common/boxcontent";
import Samsung from "../../assets/png/Samsung Galaxy Note20 Ultra 5G.png";
import React from "react";
import styled from "styled-components";
import Box from "@mui/material/Box";
import Home from "../../assets/svg/Dayflow Party Time.svg";
import { Description, Heading } from "../common/typography";
import useGsap, { animateOnScroll } from "../../hooks/useGsap";

const UserBoxContainer = styled(Box)`
  display: flex;
  align-items: center;
`;

const UserImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin-right: 20px;
`;

const UserInfo = styled(Box)`
  display: flex;
  flex-direction: column;
`;

const UserName = styled(Typography)`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 8px;
`;

const UserDescription = styled(Typography)`
  font-size: 16px;
  color: #555;
  margin-bottom: 16px;
`;

const SocialMediaLink = styled(Typography)`
  display: inline-block;
  margin-right: 12px;
  font-size: 20px;
  color: #333;
  text-decoration: none;

  &:hover {
    color: #007bff;
  }
`;

const UserBox = () => {
  // Replace the imageURL with the actual image URL of the user
  const imageURL = Home;

  return (
    <UserBoxContainer>
      <UserInfo>
        <Heading>Brotherly Trust: Startup Journey</Heading>
        <Description>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vehicula
          neque sed justo ultrices, vel scelerisque dui laoreet.
        </Description>
        <div>
          {/* Replace the social media URLs with the actual links */}
          <SocialMediaLink href="https://example.com/facebook" target="_blank">
            <i className="fab fa-facebook"></i>
          </SocialMediaLink>
          <SocialMediaLink href="https://example.com/twitter" target="_blank">
            <i className="fab fa-twitter"></i>
          </SocialMediaLink>
          <SocialMediaLink href="https://example.com/instagram" target="_blank">
            <i className="fab fa-instagram"></i>
          </SocialMediaLink>
        </div>
      </UserInfo>
    </UserBoxContainer>
  );
};

const About = () => {
  useGsap("#about-root", () => {
    animateOnScroll(".title", ".gradient-box");
  });
  return (
    <Container id="about-root" maxWidth="lg">
      <GradientText
        className="title"
        primary="Timeline"
        secondary="Our Story."
      />
      <Spacer size="sm" />
      <Grid container spacing={1.5}>
        <Grid item xs={12} md={5}>
          <Stack direction="column" spacing={1.5}>
            <GradientBox img={Iphone12}>
              <BoxContent
                width="65%"
                title="Elevate your online Presence"
                description="We blend visionary web design with boundless creativity, empowering your brand to leave an indelible mark in the digital landscape"
              />
            </GradientBox>
            <GradientBox rotate="10deg" img={Samsung}>
              <BoxContent
                width="65%"
                title="Mobile First Website Design"
                description="Our team crafts responsive web solutions, ensuring seamless user experiences on any device with skillful design and development."
              />
            </GradientBox>
          </Stack>
        </Grid>
        <Grid item xs={12} md={7}>
          <GradientBox alignItems="flex-start" height="100%">
            <BoxContent
              width="100%"
              title="Meet Our Stellar Team of Experts"
              description={`Our exceptional journey began when a group of extraordinary individuals joined forces, each bringing their unparalleled expertise to the table. Modassir, a mastermind of social media and marketing, crafts strategies that amplify our brand"s reach. Anas, our frontend and devops expert, shapes captivating user experiences and ensures seamless website operations. Pervez, a brilliant mind in web3 contracts and backend development, empowers us with cutting-edge technological solutions. Srinivas, our seasoned frontend and backend expert, adds finesse to every aspect of our digital creations. Together, their collective brilliance forms the backbone of our agency, propelling us towards new heights of success and innovation.`}
            />
          </GradientBox>
        </Grid>
      </Grid>
    </Container>
  );
};

export default About;
