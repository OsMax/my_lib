import { NavLink } from "react-router-dom";
import { useState } from "react";
import css from "./Header.module.css";

const setAtive = ({ isActive }) => (isActive ? css.active : css.navLink);
const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className={css.header}>
      <div className={css.headerContainer}></div>
    </header>
  );
};

export default Header;
