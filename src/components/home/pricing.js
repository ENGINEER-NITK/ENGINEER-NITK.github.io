import React, { useEffect, useRef, useState } from "react";
import {
  Button,
  Container,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import GradientText from "../common/gradienttext";
import Box from "@mui/material/Box";
import GradientBox from "../common/gradientbox";
import { Heading } from "../common/typography";
import Spacer from "../Spacer";
import {
  FiArrowDownCircle,
  FiArrowUpCircle,
  FiCheckCircle,
  FiGift,
} from "react-icons/fi";
import useGsap, { animateOnScroll } from "../../hooks/useGsap";
import gsap from "gsap";

const PlanCard = ({ title, description, plan, planIndex }) => {
  const rootRef = useRef();
  const [tier, setTier] = useState(0);
  const { features, price, name } = plan.tiers[tier];
  const planRef = useRef();
  const tierNameRef = useRef();
  const tierCostRef = useRef();

  const handleUpgradePlan = () => {
    if (tier < 2) {
      // Fade out the plan card
      gsap.to([planRef.current, tierNameRef.current, tierCostRef.current], {
        duration: 0.3,
        opacity: 0,
        y: -10,
        onComplete: () => {
          // Update the tier and price
          setTier((tier) => tier + 1);
          // Fade in the updated plan card
          gsap.fromTo(
            [planRef.current, tierNameRef.current, tierCostRef.current],
            {
              y: 10,
            },
            {
              duration: 0.3,
              opacity: 1,
              y: 0,
            }
          );
        },
      });
    }
  };

  const handleDowngradePlan = () => {
    if (tier > 0) {
      // Fade out the plan card
      gsap.to([planRef.current, tierNameRef.current, tierCostRef.current], {
        duration: 0.3,
        opacity: 0,
        y: 10,
        onComplete: () => {
          // Update the tier and price
          setTier((tier) => tier - 1);
          // Fade in the updated plan card
          gsap.fromTo(
            [planRef.current, tierNameRef.current, tierCostRef.current],
            {
              y: -10,
            },
            {
              duration: 0.3,
              opacity: 1,
              y: 0,
            }
          );
        },
      });
    }
  };

  return (
    <GradientBox height="100%" position="relative">
      <Box ref={rootRef} color="text.secondary">
        <Box
          sx={{
            position: "absolute",
            top: "0",
            left: "0",
            backgroundColor: "secondary.main",
            color: "black",
            px: "8px",
            py: "4px",
            borderBottomRightRadius: "8px",
            zIndex: 1,
            display: "flex",
            alignItems: "center",
            gap: 1,
          }}
        >
          <Typography fontWeight={600} variant="body2">
            Free Consultancy
          </Typography>
          <FiGift />
        </Box>
        <Heading gutterBottom>{title}</Heading>
        <Typography variant="body1" gutterBottom>
          {description}
        </Typography>
        <List ref={planRef} sx={{ pt: 2, pb: 10, minHeight: "280px" }}>
          {features.map((feature, index) => (
            <ListItem disableGutters divider key={index}>
              <ListItemIcon>
                <span role="img" aria-label="checkmark">
                  <FiCheckCircle />
                </span>
              </ListItemIcon>
              <ListItemText primary={feature} />
            </ListItem>
          ))}
        </List>
        <Box
          sx={{
            position: "absolute",
            display: "flex",
            justifyContent: "space-between",
            left: "0px",
            bottom: "16px",
            gap: 1,
            width: "100%",
            p: "32px",
            boxSizing: "border-box",
            alignItems: "flex-end",
          }}
        >
          <Box>
            <Typography ref={tierNameRef} variant="h6" color="textSecondary">
              {name} Tier
            </Typography>
            <Typography
              fontWeight={700}
              ref={tierCostRef}
              variant="h5"
              color="secondary"
            >
              {price}
            </Typography>
          </Box>
          <Typography variant="body1" color="textSecondary">
            {description}
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 2,
              flexDirection: "column",
            }}
          >
            <IconButton
              disabled={tier === 2}
              sx={{ color: "secondary.light" }}
              onClick={handleUpgradePlan}
            >
              <FiArrowUpCircle />
            </IconButton>
            <IconButton disabled={tier === 0} onClick={handleDowngradePlan}>
              <FiArrowDownCircle />
            </IconButton>
          </Box>
        </Box>
      </Box>
    </GradientBox>
  );
};

const services = [
  {
    title: "Full Stack Development",
    tiers: [
      {
        name: "Basic",
        description:
          "Includes: Responsive website design, frontend development, backend integration, basic SEO setup.",
        price: "₹30,000",
        features: [
          "Responsive website design",
          "Frontend development",
          "Backend integration",
          "Basic SEO setup",
        ],
      },
      {
        name: "Standard",
        description:
          "Includes: Advanced website features, custom frontend and backend development, SEO optimization, user testing.",
        price: "₹60,000",
        features: [
          "Advanced website features",
          "Custom frontend and backend development",
          "SEO optimization",
          "User testing",
        ],
      },
      {
        name: "Premium",
        description:
          "Includes: Custom web application development, e-commerce functionality, performance optimization, security audit.",
        price: "₹1,00,000",
        features: [
          "Custom web application development",
          "E-commerce functionality",
          "Performance optimization",
          "Security audit",
        ],
      },
    ],
  },
  {
    title: "Website Maintenance and Support",
    tiers: [
      {
        name: "Basic",
        description:
          "Includes: Regular backups, software updates, uptime monitoring, 1-hour support per month.",
        price: "₹2,000/month",
        features: [
          "Regular backups",
          "Software updates",
          "Uptime monitoring",
          "1-hour support per month",
        ],
      },
      {
        name: "Standard",
        description:
          "Includes: Weekly backups, software and security updates, 3-hour support per month, performance optimization.",
        price: "₹4,000/month",
        features: [
          "Weekly backups",
          "Software and security updates",
          "3-hour support per month",
          "Performance optimization",
        ],
      },
      {
        name: "Premium",
        description:
          "Includes: Daily backups, real-time monitoring, 5-hour support per month, security scanning, content updates.",
        price: "₹8,000/month",
        features: [
          "Daily backups",
          "Real-time monitoring",
          "5-hour support per month",
          "Security scanning",
          "Content updates",
        ],
      },
    ],
  },
  {
    title: "Server Deployment and Management",
    tiers: [
      {
        name: "Basic",
        description:
          "Includes: Server configuration, domain setup, SSL certificate installation.",
        price: "₹5,000",
        features: [
          "Server configuration",
          "Domain setup",
          "SSL certificate installation",
        ],
      },
      {
        name: "Standard",
        description:
          "Includes: Advanced server setup, database management, performance optimization.",
        price: "₹10,000",
        features: [
          "Advanced server setup",
          "Database management",
          "Performance optimization",
        ],
      },
      {
        name: "Premium",
        description:
          "Includes: Load balancing, automated backups, security hardening, scalability planning.",
        price: "₹20,000",
        features: [
          "Load balancing",
          "Automated backups",
          "Security hardening",
          "Scalability planning",
        ],
      },
    ],
  },
];

const PlanCardList = () => {
  return (
    <Box py={4}>
      <Grid container spacing={2} alignItems="stretch">
        {services.map((plan, index) => (
          <Grid item xs={12} lg={4}>
            <PlanCard
              key={index}
              title={plan.title}
              description={plan.description}
              plan={plan}
              planIndex={index}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

const Pricing = () => {
  useGsap("#pricing-root", () => {
    animateOnScroll(".title", ".gradient-box");
  });
  return (
    <Container id="pricing-root" maxWidth="lg">
      <GradientText className="title" primary="Pricing" secondary="Plans." />
      <PlanCardList />
    </Container>
  );
};

export default Pricing;
