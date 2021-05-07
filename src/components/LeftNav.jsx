import { makeStyles, MenuItem } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  leftNav: {
    position: "fixed",
    left: 0,
    height: "100vh",
    width: "10vw",
    backgroundColor: "#dbdbdb",
    // boxShadow: "0px 0px 5px black",
  },
  link: { textDecoration: "none", color: "black" },
}));

export default function LeftNav() {
  const classes = useStyles();

  return (
    <nav className={classes.leftNav}>
      <Link to="/view" className={classes.link}>
        <MenuItem>View</MenuItem>
      </Link>
      <Link to="/edit" className={classes.link}>
        <MenuItem>Design</MenuItem>
      </Link>
    </nav>
  );
}
