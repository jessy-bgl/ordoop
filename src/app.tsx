import * as React from "react";
import * as ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";
import { CssBaseline, ThemeOptions } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import { ThemeProvider as AppThemeProvider } from "./services/theme/ThemeProvider";
import { useThemeContext } from "./services/theme/useThemeContext";
import Routes from "./navigation/Routes";

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
    <ThemeProvider theme={muiTheme}>
      <CssBaseline />
      <Routes />
    </ThemeProvider>
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
