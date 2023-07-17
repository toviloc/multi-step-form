"use client";
import { createTheme } from "@mui/material/styles";

const breakpoints = {
  keys: ["xs", "sm", "md", "lg", "xl"],
  values: {
    xs: 0,
    sm: 600,
    md: 840,
    lg: 1024,
    xl: 1200,
  },
};

const palette = {
  primary: {
    main: "#041E42",
    contrastText: "rgba(255, 255, 255, 0.87)",
    contrastTextActive: "rgb(255, 255, 255)",
  },
  secondary: {
    main: "#0033A0",
    contrastText: "rgba(255, 255, 255, 0.87)",
    contrastTextActive: "rgb(255, 255, 255)",
  },
  tertiary: {
    main: "#D8291C",
    contrastText: "#FFF",
  },
  text: {
    primary: "rgba(28, 32, 35, 0.87)",
    secondary: "rgba(28, 32, 35, 0.62)",
    disabled: "rgba(28, 32, 35, 0.38)",
  },
  linkBlue: {
    main: "#0056F4",
  },
  info: {
    main: "#0056F4",
  },
  success: {
    main: "#008744",
  },
  error: {
    main: "#C7352E",
    dark: "#A70305",
  },
  warning: {
    main: "#ED8100",
  },
  surface: {
    main: "#FFFFFF",
  },
  surfaceHighEmphasis: {
    main: "#1C2023DD",
  },
  surfaceMediumEmphasis: {
    main: "#1C20239E",
  },
  surfaceDisabled: {
    main: "#1C202360",
  },
  surfaceBackground: {
    main: "#3A3C3F",
  },
};

const typography = {
  htmlFontSize: 16,
  h1: {
    fontFamily: "Ubuntu",
    fontSize: "4.25rem",
    fontWeight: "700",
    letterSpacing: "-0.06625em",
    lineHeight: "5.5rem",
  },
  h2: {
    fontFamily: "Ubuntu",
    fontSize: "3.25rem",
    fontWeight: "700",
    letterSpacing: "-0.026875rem",
    lineHeight: "4rem",
  },
  h3: {
    fontFamily: "Ubuntu",
    fontSize: "2.5rem",
    fontWeight: "700",
    letterSpacing: "0px",
    lineHeight: "3rem",
  },
  h4: {
    fontFamily: "Ubuntu",
    fontSize: "2rem",
    fontWeight: "700",
    letterSpacing: "0.015rem",
    lineHeight: "2.5rem",
    color: "#022959",
  },
  h5: {
    fontFamily: "Ubuntu",
    fontSize: "1.5rem",
    fontWeight: "500",
    letterSpacing: "0px",
    lineHeight: "2rem",
  },
  h6: {
    fontFamily: "Ubuntu",
    fontSize: "1.25rem",
    fontWeight: "700",
    letterSpacing: "0.009375rem",
    lineHeight: "2rem",
    color: "#483EFF",
  },
  subtitle1: {
    fontFamily: "Ubuntu",
    fontSize: "1rem",
    fontWeight: "500",
    letterSpacing: "0.009375rem",
    lineHeight: "1.25rem",
    color: "#022959",
  },
  subtitle2: {
    fontFamily: "Ubuntu",
    fontSize: "0.875rem",
    fontWeight: "400",
    letterSpacing: "0.00625rem",
    lineHeight: "1.25rem",
    color: "#022959",
  },
  body1: {
    fontFamily: "Ubuntu",
    fontSize: "1rem",
    fontWeight: "400",
    letterSpacing: "0.0275rem",
    lineHeight: "1.5rem",
    color: "#9699AA",
  },
  link1: {
    fontFamily: "Ubuntu",
    fontSize: "1rem",
    fontWeight: "400",
    letterSpacing: "0.0275rem",
    lineHeight: "1.5rem",
    textDecoration: "underline",
  },
  body2: {
    fontFamily: "Ubuntu",
    fontSize: "0.875rem",
    fontWeight: "400",
    letterSpacing: "0.015625rem",
    lineHeight: "1.25rem",
    color: "#9699AA",
  },
  caption: {
    fontFamily: "Ubuntu",
    fontSize: "0.75rem",
    fontWeight: "400",
    letterSpacing: "0.025rem",
    lineHeight: "1rem",
  },
  button: {
    fontFamily: "Ubuntu",
    fontSize: "1rem",
    fontWeight: "500",
    letterSpacing: "0.0275rem",
    lineHeight: 1,
    textTransform: "none",
  },
  overline: {
    fontFamily: "Ubuntu",
    fontSize: "0.625rem",
    fontWeight: "700",
    letterSpacing: "0.09375rem",
    lineHeight: "1rem",
  },
};

const initialTheme = createTheme({
  breakpoints,
  palette,
  typography,
  spacing: 16,
  components: {
    MuiStepIcon: {
      styleOverrides: {
        root: {
          color: "rgba(0,0,0,0)",
          border: "1px solid #fff",
          borderRadius: "50%",
          "&.Mui-active": {
            color: "#BEE2FD",
          },
          "&.Mui-complete": {
            color: "#BEE2FD",
          },
        },
      },
    },
  },
});

const appTheme = {
  ...initialTheme,
  overrides: {
    MuiTypography: {
      subtitle1: {
        [initialTheme.breakpoints.down("md")]: {
          fontSize: "0.875rem",
          fontWeight: "500",
          letterSpacing: "0.00625rem",
        },
      },
      body1: {
        [initialTheme.breakpoints.down("md")]: {
          fontSize: "0.875rem",
          letterSpacing: "0.00625rem",
          lineHeight: "1.25rem",
        },
      },
      h3: {
        [initialTheme.breakpoints.down("md")]: {
          fontSize: "2rem",
          letterSpacing: "0.00625rem",
          lineHeight: "2.25rem",
        },
      },
      link1: {
        [initialTheme.breakpoints.down("md")]: {
          fontSize: "0.875rem",
          letterSpacing: "0.00625rem",
          lineHeight: "1.25rem",
          textDecoration: "underline",
        },
      },
      button: {
        [initialTheme.breakpoints.down("md")]: {
          fontSize: "0.875rem",
          letterSpacing: "0.015625rem",
          lineHeight: "1rem",
        },
      },
    },
  },
};

export default appTheme;
