import "../styles/Header.scss";
import logo from "@/assets/icon_menu.svg";
import shopping_cart from "@/assets/icon_shopping_cart.svg";
import React, { useState } from "react";
import Menu from "./Menu";

const Header = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <nav>
      <img src={logo} alt="menu" className="menu" />
      <div className="navbar-left">
        <img src={logo} alt="logo" className="logo" />
        <ul>
          <li>
            <a href="/">All</a>
          </li>
          <li>
            <a href="/">Clothes</a>
          </li>
          <li>
            <a href="/">Electronics</a>
          </li>
          <li>
            <a href="/">Furnitures</a>
          </li>
          <li>
            <a href="/">Toys</a>
          </li>
          <li>
            <a href="/">Others</a>
          </li>
        </ul>
      </div>
      <div className="navbar-right">
        <ul>
          <li className="navbar-email" onClick={handleToggle}>
            platzi@example.com
          </li>
          <li className="navbar-shopping-cart">
            <img src={shopping_cart} alt="shopping cart" />
            <div>2</div>
          </li>
        </ul>
      </div>
      {toggle && <Menu />}
    </nav>
  );
};

export default Header;
