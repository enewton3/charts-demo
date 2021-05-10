import { makeStyles, MenuItem, MenuList } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  menu: {
    boxShadow: "0 0 5px grey",
    width: "100%",
  },
}));

export default function DashboardSelect({ dashboards }) {
  const classes = useStyles();
  return (
    <MenuList className={classes.menu}>
      {dashboards.map((item) => (
        <MenuItem key={item}>{item}</MenuItem>
      ))}
    </MenuList>
  );
}
