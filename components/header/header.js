import style from "../../styles/Header.module.css";
import { FaBars } from "react-icons/fa";

const Header = () => {
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
      ></div>
    </div>
  );
};

export default Header;
