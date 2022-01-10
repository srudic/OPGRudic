import style from "../../styles/Header.module.css";
import { FaBars } from "react-icons/fa";
import NavigationBar from "../navigationBar/navigationBar";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const openMenu = () => console.log("Kliknut");

  return (
    <div className={style.header}>
      <div className={style.menu}>
        <FaBars size={40} color="#3f7253" />
        <div className={style.line}></div>
      </div>
      <div className={style.title}>OPG Rudić</div>
      <div
        className={style.menu}
        style={{ backgroundColor: "transparent" }}
        onClick={openMenu}
      ></div>
      <div className={style.dropdown}>
        <NavigationBar menu />
      </div>
    </div>
  );
};

export default Header;
