import style from "../../styles/Header.module.css";
import { FaBars } from "react-icons/fa";
import NavigationBar from "../navigationBar/navigationBar";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const openMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={style.header}>
      <div className={style.menu} onClick={openMenu}>
        <FaBars size={40} color="#3f7253" />
        <div className={style.line}></div>
      </div>
      <div className={style.title}>OPG Rudić</div>
      <div
        className={style.menu}
        style={{ backgroundColor: "transparent" }}
      ></div>
      {isMenuOpen ? (
        <div className={style.dropdown}>
          <NavigationBar menu />
        </div>
      ) : null}
    </div>
  );
};

export default Header;
