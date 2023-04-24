import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RecoveryPassword from "./containers/RecoveryPassword";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SendEmail from "./pages/SendEmail";
import NewPassword from "./pages/NewPassword";
import MyAccount from "./pages/MyAccount";
import CreateAccount from "./pages/CreateAccount";
import Layout from "./containers/Layout";
import Checkout from "./pages/Checkout";
import Orders from "./pages/Orders";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/Login" element={<Login />} />
          <Route
            exact
            path="/recovery-password"
            element={<RecoveryPassword />}
          />
          <Route exact path="/send-email" element={SendEmail} />
          <Route exact path="/new-password" element={NewPassword} />
          <Route exact path="/account" element={MyAccount} />
          <Route exact path="/signup" element={CreateAccount} />
          <Route exact path="/checkout" element={Checkout} />
          <Route exact path="/orders" element={Orders} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
