import React from "react";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { NavigationContext } from "../contexts/NavigationContext";

const Navigation = () => {
  const cart = useContext(NavigationContext);

  return (
    <div className="navigation">
      <NavLink to="/">Products</NavLink>
      <NavLink to="/cart">
        Cart <span>{cart.length}</span>
      </NavLink>
    </div>
  );
};

export default Navigation;
