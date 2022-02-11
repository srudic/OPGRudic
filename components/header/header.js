import style from "../../styles/Header.module.css";
import { FaBars } from "react-icons/fa";
import NavigationBar from "../navigationBar/navigationBar";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

//MISSING
//Add tab Name into header
//Add "Izbornik" if menu is open

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [tabName, setTabName] = useState("");
  const router = useRouter();

  const openMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenuHandler = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    if (isMenuOpen) {
      setTabName("Izbornik");
    } else if (router.pathname === "/") {
      setTabName("Naslovnica");
    } else {
      const test = router.pathname.toString();
      const testArray = test.replace("_", " ").split("/");
      if (testArray[2] === undefined) {
        setTabName(testArray[1]);
      } else {
        setTabName(testArray[2]);
      }
    }
  }, [router.pathname, isMenuOpen]);

  return (
    <div className={style.header}>
      <div className={style.menu} onClick={openMenu}>
        <FaBars size={40} color="#3f7253" />
        <div className={style.line}></div>
        <h3 className={style.tabName}>{tabName}</h3>
      </div>
      <div className={style.title}>OPG Rudić</div>
      <div
        className={style.menu}
        style={{ backgroundColor: "transparent" }}
      ></div>
      {isMenuOpen ? (
        <div className={style.dropdown}>
          <NavigationBar menu closeMenuHandler={closeMenuHandler} />
        </div>
      ) : null}
    </div>
  );
};

export default Header;
