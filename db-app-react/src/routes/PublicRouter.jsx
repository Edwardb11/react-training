import React from "react";
import { Route } from "react-router-dom";

const PublicRouter = ({ auth, component: Component, ...rest }) => {
  return <Route {...rest} component={() => <Component />} />;
};

export default PublicRouter;
