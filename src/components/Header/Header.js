import { NavLink } from "react-router-dom";
import { useState } from "react";
import css from "./Header.module.css";

const setAtive = ({ isActive }) => (isActive ? css.active : css.navLink);

const Header = () => {
  return (
    <header>
      <div></div>
    </header>
  );
};

export default Header;
