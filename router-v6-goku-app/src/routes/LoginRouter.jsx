import React, { useContext } from "react";
import { BrowserRouter as Router, Routes } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

import LoginScreen from "../pages/LoginScreen";
import AppRouter from "./AppRouter";
import PrivateRouter from "./PrivateRouter";
import PublicRouter from "./PublicRouter";

const LoginRouter = () => {
  // Access to know if I am authentic or not.
  const { log } = useContext(AuthContext);
  return (
    <Router>
      <Routes>
        <PublicRouter path="/login" auth={log} component={LoginScreen} />
        <PrivateRouter path="/" auth={log} component={AppRouter} />
      </Routes>
    </Router>
  );
};

export default LoginRouter;
