import { DefaultTheme } from "styled-components";

export const lightTheme = {
  colors: {
    primary: "#4F46E5",
    secondary: "#6366F1",
    tertiary: "#A54100",
    neutral: "#F8F9FA",
    success: "#68DB6B",
    warning: "#E09B35",
    error: "#E33F36",
    background: "#FAFAFA",
    bodyContainer: "#FFFFFF",
    headline: "#191C1D",
    body: "#454748",
    label: "#AAABAC",
  },
  sizes: {
    xsmall: "1rem",
    small: "1.2rem",
    normal: "1.6rem",
    medium: "2rem",
    large: "3rem",
    huge: "5rem",
  },
  fontWeight: {
    light: "300",
    normal: "500",
    bold: "700",
  },
  breakpoints: {
    mobile: "(max-width: 767px)",
    tablet: "(min-width: 768px) and (max-width: 1023px)",
    notebook: "(min-width: 1024px) and (max-width: 1919px)",
    desktop: "(min-width: 1920px)",
  },
};

export const darkTheme = {
  colors: {
    primary: "#4F46E5",
    secondary: "#6366F1",
    tertiary: "#A54100",
    neutral: "#F8F9FA",
    success: "#68DB6B",
    warning: "#E09B35",
    error: "#E33F36",
    background: "#2E3132",
  },
  sizes: {
    xsmall: "1.2rem",
    small: "1.6rem",
    medium: "2.4rem",
    large: "3.2rem",
    huge: "5.6rem",
  },
};
