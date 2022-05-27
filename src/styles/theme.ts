import type { BreakpointsOptions, PaletteOptions } from "@mui/material";
import { createTheme } from "@mui/material";
import type { TypographyOptions } from "@mui/material/styles/createTypography";

export type ColorVariants =
  | "primary"
  | "secondary"
  | "error"
  | "warning"
  | "info"
  | "success";

// Breakpoints
const breakpoints: BreakpointsOptions = {
  values: {
    xs: 0,
    sm: 600,
    md: 800,
    lg: 1100,
    xl: 1536,
  },
};

// Palette
const palette: PaletteOptions = {
  primary: {
    main: "#2f74c0",
    light: "#388ae2",
  },
  secondary: {
    main: "#32c3cd",
  },
  error: {
    main: "#eb6750",
  },
  background: {
    default: "#2f74c0",
  },
};

// Typography
const typography: TypographyOptions = {
  fontFamily: ["Neucha", "cursive"].join(),
  h1: {
    textTransform: "uppercase",
    color: "white",
    fontSize: "40px",
    margin: "30px 0",
    lineHeight: "normal",
    "@media (max-width:800px)": {
      fontSize: "35px",
      margin: "1.5rem 0",
    },
  },
  h2: {
    color: "white",
    fontSize: "30px",
  },
};

export const theme = createTheme({
  breakpoints,
  palette,
  typography,
});
