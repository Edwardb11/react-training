import React, { useContext } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

import LoginScreen from "../pages/LoginScreen";
import PublicRouter from "./PublicRouter";

const LoginRouter = () => {
  // Access to know if I am authentic or not.
  const { log } = useContext(AuthContext);
  return (
    <Router>
      {/* <AppRouter /> */}
      <Switch>
        {/* <Route exact path="/login" component={LoginScreen} /> */}
        <PublicRouter path="/login" auth={log} component={LoginScreen} />
      </Switch>
    </Router>
  );
};

export default LoginRouter;
