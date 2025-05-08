// import { NavLink } from "react-router-dom";
// import { useState } from "react";
import css from "./Header.module.css";
// import { ReactComponent as Burger } from "../../assets/svgImg/burger.svg";
// import { ReactComponent as Close } from "../../assets/svgImg/menu_close.svg";
// import { ReactComponent as Logo } from "../../assets/svgImg/logo.svg";

// const setAtive = ({ isActive }) => (isActive ? css.active : css.navLink);

const Header = () => {
  return (
    <header className={css.header}>
      <div className={css.headerContainer}>
        <a href="" className={css.logo}>
          <span className={css.logoSpan}>My</span>Lib
        </a>
      </div>
    </header>
  );
};

export default Header;
