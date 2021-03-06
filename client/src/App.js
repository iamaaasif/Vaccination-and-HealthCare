import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Bvaccine from "./Component/Bvaccine/Bvaccine";
import Home from "./Component/Home/Home";
import Wvaccine from "./Component/Wvaccine/Wvaccine";
import Hospital from "./Component/Hospital/Hospital";
import Htips from "./Component/Htips/Htips";
import Contact from "./Component/Contact/Contact";
import Navbar from "./Component/Navbar/Navbar";
import Login from "./Component/Login/Login";
import Admin from "./Component/Admin/Admin";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import PrivateRoute from "./Component/PrivateRoute";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem("token") ? true : false
  );

  return (
    <Router>
      <Navbar
        isAuthenticated={isAuthenticated}
        setIsAuthenticated={setIsAuthenticated}
      />
      <Switch>
        <Route path="/login" component={Login} exact>
          <Login
            isAuthenticated={isAuthenticated}
            setIsAuthenticated={setIsAuthenticated}
          />{" "}
        </Route>
        <Route path="/admin" component={Admin} exact>
          <Admin />{" "}
        </Route>
        <Route path="/" component={Home} exact>
          {/* <Navbar></Navbar> */}
          <Home></Home>
        </Route>
        {/* <Route path="/Bvaccine" component={Bvaccine} exact>
          <Navbar></Navbar>
          <Bvaccine></Bvaccine>
        </Route> */}
        <PrivateRoute
          path="/BVaccine"
          component={Bvaccine}
          exact={true}
          isAuthenticated={isAuthenticated}
        />
        <Route path="/Wvaccine" component={Wvaccine} exact>
          {/* <Navbar></Navbar> */}
          <Wvaccine></Wvaccine>
        </Route>
        <Route path="/Hospital" component={Hospital} exact>
          {/* <Navbar></Navbar> */}
          <Hospital></Hospital>
        </Route>
        <Route path="/Htips" component={Htips} exact>
          {/* <Navbar></Navbar> */}
          <Htips></Htips>
        </Route>
        <Route path="/Contact" component={Contact} exact>
          {/* <Navbar></Navbar> */}
          <Contact></Contact>
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
