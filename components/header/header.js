import style from "../../styles/Header.module.css";
import { FaBars } from "react-icons/fa";
import NavigationBar from "../navigationBar/navigationBar";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

const NAVIGATION = [
  {
    to: "/",
    title: "Naslovnica",
  },
  {
    to: "/Proizvodi",
    title: "Proizvodi",
  },

  {
    to: "/Proizvodi/Maslinovo_ulje",
    title: "Maslinovo ulje",
  },
  {
    to: "/Proizvodi/Bademi",
    title: "Bademi",
  },
  {
    to: "/O_nama",
    title: "O nama",
  },
  {
    to: "/O_nama/Saznajte_iz_prve_ruke",
    title: "Saznajte iz prve ruke",
  },
  {
    to: "/O_nama/Lokacije_nasada",
    title: "Lokacije nasada",
  },
  {
    to: "/O_nama/Kontakt",
    title: "Kontakt",
  },
];

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
    } else {
      let currentPath = "";
      NAVIGATION.some((tab) => {
        if (router.pathname === tab.to) {
          currentPath = tab.title;
          return true;
        }
        return false;
      });
      setTabName(currentPath);
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
