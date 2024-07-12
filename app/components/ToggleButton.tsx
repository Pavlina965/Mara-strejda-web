"use client";
import * as React from "react";
import { useState } from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import StandardImageList from "./ImageList";

type ToggleButtonProps = {
  alignment: string;
  onToggle: (
    event: React.MouseEvent<HTMLElement, MouseEvent>,
    newAlignment: string
  ) => void;
};

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
export default function ToggleButtons({
  alignment,
  onToggle,
}: ToggleButtonProps) {
  const handleToggle = (
    event: React.MouseEvent<HTMLElement, MouseEvent>,
    newAlignment: string
  ) => {
    if (newAlignment !== null) {
      onToggle(event, newAlignment);
    }
  };
  return (
    <ThemeProvider theme={theme}>
      <ToggleButtonGroup
        value={alignment}
        exclusive
        onChange={handleToggle}
        aria-label="Room"
        defaultValue={"Kitchens"}
      >
        <ToggleButton value="Kitchens">Kuchyně</ToggleButton>
        <ToggleButton value="Rooms">Pokoje</ToggleButton>
        <ToggleButton value="Bathrooms">Koupelny</ToggleButton>
        <ToggleButton value="Halls">Předsíně</ToggleButton>
      </ToggleButtonGroup>
      {/* {alignment === "Kuchyně" && <StandardImageList />} */}
      {/* {alignment === "Pokoje" && <StandardImageList alignment={alignment} />}
      {alignment === "Koupelny" && <StandardImageList alignment={alignment} />}
      {alignment === "Předsíně" && <StandardImageList alignment={alignment} />} */}
    </ThemeProvider>
  );
}
