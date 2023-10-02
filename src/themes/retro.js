import { createTheme } from "@mui/material/styles";
import { blue, grey, amber } from "@mui/material/colors";
const primaryColor = "#c8f704"; // #3F51B5 (Royal Blue)
const secondaryColor = "#9E9E9E"; // #9E9E9E (Gray)
const accentColor = "#f681e6"; // #FFC107 (Amber)
const neutralColor1 = "#F5F5F5"; // #F5F5F5 (Light Gray)
const neutralColor2 = "#FFFFFF"; // #FFFFFF (White)

export default (mode) =>
  createTheme({
    palette: {
      mode: "dark",
      primary: {
        main: primaryColor,
      },
      secondary: {
        main: accentColor,
      },
      background: {
        default: neutralColor1,
        paper: neutralColor2,
      },
    },
    typography: {
      fontFamily: ["Barlow", "Raleway", "Lato", "Arial", "sans-serif"].join(
        ","
      ),
      h1: {
        fontWeight: 500,
        fontSize: "4.5rem",
        lineHeight: 1.2,
        letterSpacing: "-2px",
        wordSpacing: "10px",
      },
      h2: {
        fontWeight: 500,
        fontSize: "2rem",
        lineHeight: 1.2,
      },
      h3: {
        fontWeight: 500,
        fontSize: "1.8rem",
        lineHeight: 1.2,
      },
      body1: {
        fontFamily: "Barlow, Arial, sans-serif",
        fontSize: "1rem",
        lineHeight: 1.6,
      },
      body2: {
        fontFamily: "Barlow, Arial, sans-serif",
        fontSize: "0.9rem",
        lineHeight: 1.6,
      },
    },
    gutter: {
      appbar: "48px",
      section: "32px",
    },
    components: {
      MuiLink: {
        styleOverrides: {
          root: {
            textDecoration: "none",
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            borderRadius: "8px", // Adjust the border radius as needed
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            height: "100%",
            transition: "transform 0.2s ease-in-out",
            "&:hover": {
              transform: "scale(1.05)",
            },
          },
        },
      },
      MuiCardMedia: {
        styleOverrides: {
          root: {
            height: 0,
            paddingTop: "56.25%",
            position: "relative",
          },
        },
      },
      MuiCardContent: {
        styleOverrides: {
          root: {},
        },
      },
      MuiTypography: {
        styleOverrides: {
          h6: {
            fontWeight: "bold",
            color: "black",
          },
          body2: {
            color: "rgba(0, 0, 0, 0.5)",
          },
        },
      },
      MuiIconButton: {
        styleOverrides: {
          root: {
            backgroundColor: 'white', // Set the background color to dark
            color: 'black', // Set the text/icon color to white
            '&:hover': {
              backgroundColor: 'black', // On hover, set the background color to white
              color: 'white', // On hover, set the text/icon color to dark
            },
          },
        },
      },
      MuiButton: {
        variants: [
          {
            props: { variant: "bigButton" },
            style: {
              // Your custom styles here
              backgroundColor: primaryColor,
              color: "#000",
              borderRadius: "50px",
              padding: "10px 20px",
              textTransform: "none",
              fontSize: "1rem",
              fontWeight: 500,
              "&:hover": {
                // backgroundColor: theme.palette.primary.dark,
              },
              "& .MuiButton-startIcon": {
                marginRight: "8px",
              },
            },
          },
        ],
      },
      MuiAppBar: {
        styleOverrides: {
          root: {
            transition: "box-shadow 0.3s ease",
            backgroundColor: "transparent",
          },
        },
      },
      MuiToolbar: {
        styleOverrides: {
          root: {
            backgroundColor: "transparent",
            color: "black",
            padding: "12px 0px",
            // '&::before': {
            //     content: '""',
            //     position: 'absolute',
            //     top: 0,
            //     left: 0,
            //     width: '100%',
            //     height: '100%',
            //     backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0), ${primaryColor})`, // Add the gradient
            //     zIndex: 0, // Set the z-index to place it behind the AppBar content
            // },
          },
        },
      },
    },
  });
