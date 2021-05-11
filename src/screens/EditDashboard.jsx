import { Button, makeStyles } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import ChartCreation from "../components/ChartCreation";
import DashboardEditor from "../components/DashboardEditor";
import DashboardSelect from "../components/DashboardSelect";
import { getData } from "../services/apiCalls";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "fixed",
    left: "10vw",
    display: "flex",
    flexFlow: "column wrap",
    width: "90vw",
    height: "100vh",
  },
  topSection: {
    display: "flex",
    height: "60%",
  },
  saved: {
    border: "2px solid black",
    width: "70%",
  },
  editHeader: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  select: {
    width: "30%",
    border: "2px solid hotpink",
    display: "flex",
    flexFlow: "column wrap",
    justifyContent: "space-between",
  },
  bottomSection: {
    width: "100%",
    height: "40%",
    display: "flex",
  },
}));

export default function EditDashboard(props) {
  const {
    dashboards,
    setDashboards,
    currentDashboard,
    setCurrentDashboard,
    handleDashboardSelect,
  } = props;
  const classes = useStyles();

  const [dashboardCharts, setDashboardCharts] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    if (currentDashboard.tiles) {
      setDashboardCharts(currentDashboard.tiles);
    }
  }, [currentDashboard]);

  const addChart = (newChart) => {
    setDashboardCharts((prev) => [...prev, newChart]);
    setCurrentDashboard((prev) => ({
      ...prev,
      tiles: [...prev.tiles, newChart],
    }));
  };

  const saveDashboard = (current, updated) => {
    //replace the currentDashboard with the updated currentDashboard in the dashboards Array
    const currentDashIndex = dashboards.findIndex(
      (el) => el.name === currentDashboard.name
    );
    const newDashboards = [...dashboards];
    newDashboards.splice(currentDashIndex, 1, currentDashboard);
    setDashboards(newDashboards);

    //put/patch request to api to update currentDashboard entry
  };

  return (
    <div className={classes.root}>
      <div className={classes.topSection}>
        <div className={classes.saved}>
          <div className={classes.editHeader}>
            {currentDashboard.name ? (
              <div>***{currentDashboard.name}***</div>
            ) : (
              <div></div>
            )}
            <Button onClick={() => saveDashboard()}>Save</Button>
          </div>
          <DashboardEditor
            charts={dashboardCharts}
            setCharts={setDashboardCharts}
            setCurrentDashboard={setCurrentDashboard}
          />
        </div>
        <div className={classes.select}>
          <DashboardSelect
            dashboards={dashboards}
            handleDashboardSelect={handleDashboardSelect}
            currentDashboard={currentDashboard}
          />
          <Button>Create New Dashboard</Button>
        </div>
      </div>
      <div className={classes.bottomSection}>
        <ChartCreation addChart={addChart} />
      </div>
    </div>
  );
}
