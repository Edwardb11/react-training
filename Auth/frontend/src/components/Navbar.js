import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav
      className="navbar is-light"
      role="navigation"
      aria-label="main navigation">
      <div className="container">
        <div className="navbar-brand">
          <div
            role="button"
            className="navbar-burger burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </div>
        </div>

        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start">
            <Link className="navbar-item" to="/dashboard">
              Home
            </Link>
          </div>
        </div>

        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              <button className="button is-light">Log Out</button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
