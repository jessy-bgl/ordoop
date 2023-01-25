import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  Box,
  List,
  Drawer,
  SvgIcon,
  Grid,
  Typography,
  Divider,
} from "@mui/material";

import DashboardIcon from "@mui/icons-material/Dashboard";
import ModelsIcon from "@mui/icons-material/Topic";
import InvoicesIcon from "@mui/icons-material/RequestQuote";
import PrescriptionsIcon from "@mui/icons-material/Medication";
import SettingsIcon from "@mui/icons-material/Settings";

import ListItemWithIcon from "./components/ListItemTextIcon";
// import { ReactComponent as Logo } from "../../assets/logo.svg";

interface Props {
  drawerWidth: number;
  mobileOpen: boolean;
  handleDrawerToggle: () => void;
}

export default function NavigationDrawer(props: Props) {
  const navigate = useNavigate();

  const [selectedItem, setSelectedItem] = useState(
    window.location.pathname || "/"
  );

  const handleClickItem = (linkToNavigate?) => {
    if (linkToNavigate) {
      setSelectedItem(linkToNavigate);
      props.handleDrawerToggle();
      navigate(linkToNavigate);
    }
  };

  const drawer = (
    <div>
      <div style={{ height: "64px", textAlign: "center" }}>
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          sx={{ height: "100%" }}
        >
          <Grid item sx={{ marginTop: 0.7, marginRight: 1 }}>
            {/* <SvgIcon component={Logo} inheritViewBox fontSize={"large"} /> */}
          </Grid>
          <Grid item>
            <Typography variant="h6">Ordoop</Typography>
          </Grid>
        </Grid>
      </div>
      <List>
        <ListItemWithIcon
          name="Tableau de bord"
          muiIcon={<DashboardIcon />}
          onClick={() => handleClickItem("/")}
          selected={selectedItem === "/" || selectedItem === "/main_window"}
        />
        <ListItemWithIcon
          disabled
          name="Ordonnances"
          muiIcon={<PrescriptionsIcon />}
          onClick={() => handleClickItem("/")}
          // selected={selectedItem === "/"}
        />
        <ListItemWithIcon
          disabled
          name="Factures"
          muiIcon={<InvoicesIcon />}
          onClick={() => handleClickItem("/")}
          // selected={selectedItem === "/"}
        />
        <Divider />
        <ListItemWithIcon
          disabled
          name="Prescriptions"
          muiIcon={<PrescriptionsIcon />}
          onClick={() => handleClickItem("/")}
        />
        <ListItemWithIcon
          name="Modèles"
          muiIcon={<ModelsIcon />}
          onClick={() => handleClickItem("/models")}
          selected={selectedItem === "/models"}
        />
        <ListItemWithIcon
          disabled
          name="Paramètres"
          muiIcon={<SettingsIcon />}
          onClick={() => handleClickItem("/")}
          // selected={selectedItem === "/"}
        />
      </List>
    </div>
  );

  return (
    <Box
      component="nav"
      sx={{ width: { lg: props.drawerWidth }, flexShrink: { lg: 0 } }}
    >
      <Drawer
        variant="temporary"
        open={props.mobileOpen}
        onClose={props.handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: "block", lg: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: props.drawerWidth,
          },
        }}
      >
        {drawer}
      </Drawer>
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: "none", lg: "block" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: props.drawerWidth,
          },
        }}
        open
      >
        {drawer}
      </Drawer>
    </Box>
  );
}
