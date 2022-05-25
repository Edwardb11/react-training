import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LoginScreen from "../pages/LoginScreen";
const LoginRouter = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/login" element={<LoginScreen />} />
      </Routes>
    </Router>
  );
};

export default LoginRouter;
