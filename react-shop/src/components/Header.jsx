import "../styles/Header.scss";
import logo from "@/assets/icon_menu.svg";
import shopping_cart from "@/assets/icon_shopping_cart.svg";
import React, { useContext, useState } from "react";
import Menu from "./Menu";
import AppContext from "../context/AppContext";
import MyOrder from "../containers/MyOrder";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const { state } = useContext(AppContext);
  const [toggleOrders, setToggleOrders] = useState(false);

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
          <li
            className="navbar-shopping-cart "
            onClick={() => setToggleOrders(!toggleOrders)}>
            <img src={shopping_cart} alt="shopping cart" />
            {state.cart.length > 0 ? <div>{state.cart.length}</div> : null}
          </li>
        </ul>
      </div>
      {toggle && <Menu />}
      {toggleOrders && <MyOrder />}
    </nav>
  );
};

export default Header;
