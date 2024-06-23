"use client";
import * as React from "react";
import { useState } from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import StandardImageList from "./Pictures";

const theme = createTheme({
  components: {
    MuiToggleButton: {
      styleOverrides: {
        root: {
          backgroundColor: "#262626", // Primary main color
          color: "white",
          "&.Mui-selected": {
            backgroundColor: "#9a8a78", // Secondary main color
            color: "white",
          },
          "&:hover": {
            backgroundColor: "#9a8a7880 ", // Primary dark color
          },
          "&.Mui-selected:hover": {
            backgroundColor: "#9a8a78", // Secondary dark color
          },
        },
      },
    },
  },
});
export default function ToggleButtons() {
  const [alignment, setAlignment] = useState<string | null>("Kuchyně");

  const handleAlignment = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string | null
  ) => {
    setAlignment(newAlignment);
  };

  return (
    <ThemeProvider theme={theme}>
      <ToggleButtonGroup
        value={alignment}
        exclusive
        onChange={handleAlignment}
        aria-label="Místnost"
        defaultValue={"Kuchyně"}
      >
        <ToggleButton value="Kuchyně">Kuchyně</ToggleButton>
        <ToggleButton value="Pokoje">Pokoje</ToggleButton>
        <ToggleButton value="Koupelny">Koupelny</ToggleButton>
        <ToggleButton value="Předsíně">Předsíně</ToggleButton>
      </ToggleButtonGroup>
      {alignment === "Kuchyně" && <StandardImageList />}
      {/* {alignment === "Pokoje" && <StandardImageList alignment={alignment} />}
      {alignment === "Koupelny" && <StandardImageList alignment={alignment} />}
      {alignment === "Předsíně" && <StandardImageList alignment={alignment} />} */}
    </ThemeProvider>
  );
}
