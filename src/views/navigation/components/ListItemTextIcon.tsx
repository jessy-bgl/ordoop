import React from "react";
import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

interface ListItemWithIconProps {
  name: string;
  muiIcon: any;
  onClick: any;
  disabled?: boolean;
  selected?: boolean;
}

const ListItemTextIcon = (props: ListItemWithIconProps) => {
  return (
    <ListItemButton
      disabled={props.disabled}
      onClick={props.onClick}
      selected={props.selected}
    >
      <ListItemIcon>{props.muiIcon}</ListItemIcon>
      <ListItemText primary={props.name} />
    </ListItemButton>
  );
};

export default ListItemTextIcon;
