import { createTheme } from "@mui/material/styles";

export const getMuiTheme = (isDark) =>
  createTheme({
    palette: {
      mode: isDark ? "dark" : "light",
      primary: { main: "#1976d2" },
      secondary: { main: "#fbc02d" },
    },
    shape: { borderRadius: 10 },
  });
