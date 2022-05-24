import React from "react";
import { Route, Routes } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "../components/Header";
import About from "../pages/About";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";

const AppRouter = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
