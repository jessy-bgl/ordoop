import React from "react";

import {
  AppBar,
  Box,
  IconButton,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import ThemeIcon from "@mui/icons-material/Brightness6";

import { useThemeContext } from "../../services/theme/useThemeContext";

interface Props {
  title: string;
  drawerWidth: number;
  handleDrawerToggle: () => void;
}

const NavigationToolbar = (props: Props) => {
  const appTheme = useThemeContext();

  return (
    <Box>
      <AppBar
        position="fixed"
        sx={{
          width: { lg: `calc(100% - ${props.drawerWidth}px)` },
          ml: { lg: `${props.drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={props.handleDrawerToggle}
            sx={{ mr: 2, display: { lg: "none" } }}
          >
            <MenuIcon />
          </IconButton>

          <Typography variant="h6" noWrap component="div">
            {props.title}
          </Typography>

          <Box sx={{ flexGrow: 1 }} />

          <Box sx={{ display: "flex" }}>
            <Tooltip title="Thème" arrow>
              <IconButton onClick={() => appTheme.toggleMode()}>
                <ThemeIcon />
              </IconButton>
            </Tooltip>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavigationToolbar;
