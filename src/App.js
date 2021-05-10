import "./App.css";
import EditDashboard from "./screens/EditDashboard";
import ViewDashboard from "./screens/ViewDashboard";
import Layout from "./components/Layout";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Layout>
        <Switch>
          <Route path="/edit">
            <EditDashboard />
          </Route>
          <Route path="/view">
            <ViewDashboard />
          </Route>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
