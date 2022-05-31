import React from "react";
import {  Redirect, Route, Switch } from "react-router-dom";
import Navbar from "../components/Navbar";
import CharacterScreen from "../pages/CharacterScreen";
import ManScreen from "../pages/ManScreen";
import SearchScreen from "../pages/SearchScreen";
import WomanScreen from "../pages/WomanScreen";

const AppRouter = () => {
  return (
    <>
    <Navbar/>
      <Switch>
        <Route path="/mans" component={ManScreen} />
        <Route path="/womans" component={WomanScreen } />
        <Route path="/search" component={SearchScreen} />
        <Route path="/character/:id" component={CharacterScreen}/>
        <Redirect to="mans" />
      </Switch>
    </>
  );
};

export default AppRouter;
