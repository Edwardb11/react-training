import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./containers/Layout";
import Login from "./containers/Login";
import RecoveryPassword from "./containers/RecoveryPassword";

function Home() {
  return <h1>Home Page</h1>;
}

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/recovery-password" element={<RecoveryPassword />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
