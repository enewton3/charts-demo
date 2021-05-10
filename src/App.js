import "./App.css";
import EditDashboard from "./screens/EditDashboard";
import ViewDashboard from "./screens/ViewDashboard";
import Layout from "./components/Layout";
import { Switch, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import dashboardsData from "./data/SampleDashboard.json";

function App() {
  const [dashboards, setDashboards] = useState([]);
  const [currentDashboard, setCurrentDashboard] = useState({});

  const handleDashboardSelect = (name) => {
    const dashboard = dashboards.filter((item) => item.name === name)[0];
    setCurrentDashboard(dashboard);
  };

  useEffect(() => {
    setDashboards(dashboardsData);
  }, []);

  return (
    <div className="App">
      <Layout>
        <Switch>
          <Route path="/edit">
            <EditDashboard
              dashboards={dashboards}
              setDashboards={setDashboards}
              handleDashboardSelect={handleDashboardSelect}
              currentDashboard={currentDashboard}
            />
          </Route>
          <Route path="/view">
            <ViewDashboard
              dashboards={dashboards}
              currentDashboard={currentDashboard}
              handleDashboardSelect={handleDashboardSelect}
            />
          </Route>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
