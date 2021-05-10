import React, { useState } from "react";
import { Button, makeStyles, Menu } from "@material-ui/core";
import DashboardSelect from "../components/DashboardSelect";
import ViewDashboardGrid from "../components/ViewDashboardGrid";

const useStyles = makeStyles((theme) => ({
  viewContainer: {
    position: "fixed",
    left: "10vw",
    display: "flex",
    flexFlow: "column wrap",
    width: "90vw",
    height: "100vh",
  },
  select: {
    width: "25%",
    position: "absolute",
    right: 0,
  },
  grid: {
    border: "2px solid red",
    width: "90vw",
    height: "100vh",
  },
}));

export default function ViewDashboard({
  dashboards,
  currentDashboard,
  handleDashboardSelect,
}) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const handleMenuClick = (e) => {
    setAnchorEl(e.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.viewContainer}>
      <div className={classes.select}>
        <Button
          onClick={handleMenuClick}
          aria-haspopup="true"
          color="primary"
          aria-controls="menu"
        >
          Dashboard Select
        </Button>
        <Menu
          id="menu"
          anchorEl={anchorEl}
          onClose={handleClose}
          keepMounted
          open={Boolean(anchorEl)}
          anchorOrigin={{ vertical: "bottom", horizontal: "" }}
        >
          <DashboardSelect
            dashboards={dashboards}
            handleDashboardSelect={handleDashboardSelect}
            currentDashboard={currentDashboard}
          />
        </Menu>
      </div>

      <div className={classes.grid}>
        <ViewDashboardGrid currentDashboard={currentDashboard} />
      </div>
    </div>
  );
}
