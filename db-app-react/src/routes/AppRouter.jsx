import React from "react";
import { Routes, Route } from "react-router-dom";
import ManScreen from "../pages/ManScreen";
import SearchScreen from "../pages/SearchScreen";
import WomanScreen from "../pages/WomanScreen";

const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/mans" element={<ManScreen />} />
        <Route path="/womans" element={<WomanScreen />} />
        <Route path="/search" element={<SearchScreen />} />
      </Routes>
    </>
  );
};

export default AppRouter;
