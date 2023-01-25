import * as React from "react";
import * as ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { CssBaseline, ThemeOptions } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { QueryClientProvider } from "@tanstack/react-query";
import "react-toastify/dist/ReactToastify.css";

import { ThemeProvider as AppThemeProvider } from "./services/theme/ThemeProvider";
import { useThemeContext } from "./services/theme/useThemeContext";
import Routes from "./navigation/Routes";
import { queryClient } from "./config/react-query";

const darkTheme = {
  palette: {
    mode: "dark",
    background: { default: "#151515", paper: "#212121" },
  },
} as ThemeOptions;

const lightTheme = {
  palette: {
    mode: "light",
    background: { default: "#f2f2f2" },
  },
} as ThemeOptions;

const App = () => {
  const appTheme = useThemeContext();
  const muiTheme = createTheme(appTheme.isDarkMode ? darkTheme : lightTheme);

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={muiTheme}>
        <CssBaseline />
        <Routes />
        <ToastContainer
          theme={appTheme.isDarkMode ? "dark" : "light"}
          position="bottom-right"
        />
      </ThemeProvider>
    </QueryClientProvider>
  );
};

function render() {
  ReactDOM.render(
    <React.StrictMode>
      <HashRouter>
        <AppThemeProvider>
          <App />
        </AppThemeProvider>
      </HashRouter>
    </React.StrictMode>,
    document.getElementById("root")
  );
}

render();
