import React, { useContext } from "react";
import { UserContext } from "../contexs/UserContext";
import { userData } from "../helpers/userData";

const Home = () => {
  const { user, setUser } = useContext(UserContext);

  const handleLogin = () => {
    setUser(userData);
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <div className="container text-center mt-5">
      <h1>Home Screen</h1>

      {!user ? (
        <button className="btn btn-primary" onClick={handleLogin}>
          Login
        </button>
      ) : (
        <>
          <h3>
            {" "}
            {user.data.first_name} {user.data.last_name}
          </h3>
          <button className="btn btn-danger" onClick={handleLogout}>
            Logout
          </button>
        </>
      )}
    </div>
  );
};

export default Home;
