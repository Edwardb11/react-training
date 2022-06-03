import React, { lazy, Suspense } from "react";
import { Redirect, Route, Routes } from "react-router-dom";

import Navbar from "../components/Navbar";
// import CharacterScreen from "../pages/CharacterScreen";
// import ManScreen from "../pages/ManScreen";
// import SearchScreen from "../pages/SearchScreen";
// import WomanScreen from "../pages/WomanScreen";

// const Navbar = lazy(() => import("../components/Navbar"));
const CharacterScreen = lazy(() => import("../pages/CharacterScreen"));
const ManScreen = lazy(() => import("../pages/ManScreen"));
const WomanScreen = lazy(() => import("../pages/WomanScreen"));
const SearchScreen = lazy(() => import("../pages/SearchScreen"));

const AppRouter = () => {
  return (
    <>
      <Navbar />
      <Suspense
        fallback={
          <>
            Loading
            <span className="text-center spinner-border" role="status"></span>
          </>
        }
      >
        <Routes>
          <Route path="/mans" component={ManScreen} />
          <Route path="/womans" component={WomanScreen} />
          <Route path="/search" component={SearchScreen} />
          <Route path="/character/:id" component={CharacterScreen} />
          {/* <Redirect to="mans" /> */}
        </Routes>
      </Suspense>
    </>
  );
};

export default AppRouter;
