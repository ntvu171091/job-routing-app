import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import App from "./App";
import { AuthProvider } from "./contexts/AuthContext";
import { ThemeProvider, useTheme } from "./contexts/ThemeContext";
import { getMuiTheme } from "./theme/muiTheme";

function MuiWrapper({ children }) {
  const { isDark } = useTheme();
  return (
    <MuiThemeProvider theme={getMuiTheme(isDark)}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AuthProvider>
      <ThemeProvider>
        <MuiWrapper>
          <App />
        </MuiWrapper>
      </ThemeProvider>
    </AuthProvider>
  </BrowserRouter>
);
