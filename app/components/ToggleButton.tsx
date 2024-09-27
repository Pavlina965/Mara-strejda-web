"use client";
import * as React from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { createTheme, ThemeProvider } from "@mui/material/styles";

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
          // backgroundColor: "#9a8a78",
          backgroundColor: "#f6f6f6",
          color: "#333",
          border: "none",
          "&.Mui-selected": {
            backgroundColor: "#C0A98B",
            color: "white",
            border: "none",
          },
          "&:hover": {
            backgroundColor: "#9a8a7880 ",
            border: "none",
          },
          "&.Mui-selected:hover": {
            backgroundColor: "#C0A98B",
            border: "none",
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
        sx={{ marginBottom: "20px" }}
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
