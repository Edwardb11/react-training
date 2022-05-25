import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg  bg-info ">
      <div className="container-fluid">
        <h2 className="navbar-brand">
          DB-APP
        </h2>
        <button
          classNameName="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Mans
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Womans
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Search
              </a>
            </li>
            
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
