import style from "../../styles/Header.module.css";
import { FaBars } from "react-icons/fa";
import NavigationBar from "../navigationBar/navigationBar";
import { useState } from "react";
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

  // if (isMenuOpen) {
  //   setTabName("Izbornik");
  // } else {
  //   setTabName(router.pathname);
  // }

  // const test = router.pathname.toString();
  // const testArray = test.replace("_", " ").split("/");
  // U SLJEDEĆOJ LINIJI JE PROBLEM AKO JE testArray[2] ===undefined jer ispise undefined
  // console.log(testArray[1] + " - " + testArray[2]);

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
