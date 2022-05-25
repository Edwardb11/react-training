import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LoginScreen from "../pages/LoginScreen";
import AppRouter from "./AppRouter";
const LoginRouter = () => {
  return (
    <Router>
      <AppRouter />
      <Routes>
        <Route exact path="/login" element={<LoginScreen />} />
      </Routes>
    </Router>
  );
};

export default LoginRouter;
