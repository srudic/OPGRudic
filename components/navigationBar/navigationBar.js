import Link from "next/link";
import style from "../../styles/Navigation.module.css";

const NavigationBar = () => {
  return (
    <div className={style.navigation}>
      <div className={style.navigation_subcontainer}>
        <li className={style.topPage}>
          <Link href={"/"}>Naslovnica</Link>
        </li>
      </div>
      <div className={style.navigation_subcontainer}>
        <li className={style.topPage}>
          <Link href={"/products"}>Proizvodi</Link>
        </li>
        <li className={style.subPage}>
          <Link href={"/products/oliveoil"}>Maslinovo ulje</Link>
        </li>
        <li className={style.subPage}>
          <Link href={"/products/almonds"}>Bademi</Link>
        </li>
      </div>
      <div className={style.navigation_subcontainer}>
        <li className={style.topPage}>
          <Link href={"/aboutUs"}>O nama</Link>
        </li>
        <li className={style.subPage}>
          <Link href={"/aboutUs/fromFirstHand"}>Saznajte iz prve ruke</Link>
        </li>
        <li className={style.subPage}>
          <Link href={"/aboutUs/landLocation"}>Lokacije nasada</Link>
        </li>
        <li className={style.subPage}>
          <Link href={"/aboutUs/contact"}>Kontakt</Link>
        </li>
      </div>
    </div>
  );
};

export default NavigationBar;
