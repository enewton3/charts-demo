import { makeStyles, MenuItem, MenuList } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  menu: {
    // boxShadow: "0 0 5px grey",
    width: "100%",
  },
}));

export default function DashboardSelect(props) {
  const classes = useStyles();
  const { dashboards, handleDashboardSelect, currentDashboard } = props;
  return (
    <MenuList className={classes.menu}>
      {dashboards.map((item) => {
        const isSelected = item.name === currentDashboard?.name ? true : false;
        return (
          <MenuItem
            key={item.name}
            value={item.name}
            onClick={(e) => handleDashboardSelect(item.name)}
            selected={isSelected}
          >
            {item.name}
          </MenuItem>
        );
      })}
    </MenuList>
  );
}
