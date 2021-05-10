import React from "react";
import { makeStyles } from "@material-ui/core";
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
  },
}));

export default function ViewDashboard({
  dashboards,
  currentDashboard,
  handleDashboardSelect,
}) {
  const classes = useStyles();

  return (
    <div className={classes.viewContainer}>
      <div className={classes.select}>
        <DashboardSelect
          dashboards={dashboards}
          handleDashboardSelect={handleDashboardSelect}
          currentDashboard={currentDashboard}
        />
      </div>

      <div>
        <ViewDashboardGrid currentDashboard={currentDashboard} />
      </div>
    </div>
  );
}
