import Link from "next/link";
import style from "../../styles/Navigation.module.css";
import { useRouter } from "next/router";

const NavigationBar = (props) => {
  const router = useRouter();

  let classesNavigation = style.navigation;
  let classesTopPages = style.topPage;

  if (props.menu) {
    classesNavigation = style.navigationMenu;
    classesTopPages = style.topPagesMenu;
  }

  return (
    <div className={classesNavigation}>
      <div className={style.navigation_subcontainer}>
        <li className={classesTopPages}>
          <Link href={"/"}>
            <span className={router.pathname === "/" ? `${style.active}` : ""}>
              Naslovnica
            </span>
          </Link>
        </li>
      </div>
      <div className={style.navigation_subcontainer}>
        <li className={classesTopPages}>
          <Link href={"/Proizvodi"}>
            <span
              className={
                router.pathname === "/Proizvodi" ? `${style.active}` : ""
              }
            >
              Proizvodi
            </span>
          </Link>
        </li>

        <li className={style.subPage}>
          <Link href={"/Proizvodi/Maslinovo_ulje"}>
            <span
              className={
                router.pathname === "/Proizvodi/Maslinovo_ulje"
                  ? `${style.active}`
                  : ""
              }
            >
              Maslinovo ulje
            </span>
          </Link>
        </li>
        <li className={style.subPage}>
          <Link href={"/Proizvodi/Bademi"}>
            <span
              className={
                router.pathname === "/Proizvodi/Bademi" ? `${style.active}` : ""
              }
            >
              Bademi
            </span>
          </Link>
        </li>
      </div>
      <div className={style.navigation_subcontainer}>
        <li className={classesTopPages}>
          <Link href={"/O_nama"}>
            <span
              className={router.pathname === "/O_nama" ? `${style.active}` : ""}
            >
              O nama
            </span>
          </Link>
        </li>
        <li className={style.subPage}>
          <Link href={"/O_nama/Saznajte_iz_prve_ruke"}>
            <span
              className={
                router.pathname === "/O_nama/Saznajte_iz_prve_ruke"
                  ? `${style.active}`
                  : ""
              }
            >
              Saznajte iz prve ruke
            </span>
          </Link>
        </li>
        <li className={style.subPage}>
          <Link href={"/O_nama/Lokacije_nasada"}>
            <span
              className={
                router.pathname === "/O_nama/Lokacije_nasada"
                  ? `${style.active}`
                  : ""
              }
            >
              Lokacije nasada
            </span>
          </Link>
        </li>
        <li className={style.subPage}>
          <Link href={"/O_nama/Kontakt"}>
            <span
              className={
                router.pathname === "/O_nama/Kontakt" ? `${style.active}` : ""
              }
            >
              Kontakt
            </span>
          </Link>
        </li>
      </div>
    </div>
  );
};

export default NavigationBar;
