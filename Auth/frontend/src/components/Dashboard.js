import axios from "axios";
import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [name, setName] = useState("");
  const [token, setToken] = useState("");
  useEffect(() => {
    refreshToken();
  }, []);

  const refreshToken = async () => {
    try {
      const response = await axios.get("http://localhost:5000/token");
      setToken(response.data.accessToken);
      console.log(response.data.accessToken);
      const decoded = jwt_decode(response.data.accessToken);
        console.log(decoded);
    } catch (error) {}
  };
  return (
    <>
      <Navbar />
      <h1 className="container mt-5"> welcome back: </h1>
    </>
  );
};

export default Dashboard;
