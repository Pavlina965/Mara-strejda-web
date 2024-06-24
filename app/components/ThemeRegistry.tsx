// components/ThemeRegistry.js
"use client";

import * as React from "react";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const theme = createTheme({
  palette: {
    primary: {
      main: "#9a8a78",
    },
    secondary: {
      main: "#fff",
    },
    error: {
      main: "#ff0000",
    },
    background: {
      default: "#fff",
    },
  },
  // components: {
  components: {
    MuiToggleButton: {
      styleOverrides: {
        root: {
          backgroundColor: "#1976d2", // Primary main color
          color: "white",
          "&.Mui-selected": {
            backgroundColor: "#dc004e", // Secondary main color
            color: "white",
          },
          "&:hover": {
            backgroundColor: "#115293", // Primary dark color
          },
        },
      },
    },
  },
});

const cache = createCache({ key: "css", prepend: true });

export default function ThemeRegistry({ children }) {
  return (
    <CacheProvider value={cache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </CacheProvider>
  );
}
