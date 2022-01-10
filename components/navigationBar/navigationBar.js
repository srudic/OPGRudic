import Link from "next/link";
import style from "../../styles/Navigation.module.css";
import { useRouter } from "next/router";

const NavigationBar = () => {
  const router = useRouter();

  return (
    <div className={style.navigation}>
      <div className={style.navigation_subcontainer}>
        <li className={style.topPage}>
          <Link href={"/"}>
            <span className={router.pathname === "/" ? `${style.active}` : ""}>
              Naslovnica
            </span>
          </Link>
        </li>
      </div>
      <div className={style.navigation_subcontainer}>
        <li className={style.topPage}>
          <Link href={"/products"}>
            <span
              className={
                router.pathname === "/products" ? `${style.active}` : ""
              }
            >
              Proizvodi
            </span>
          </Link>
        </li>

        <li className={style.subPage}>
          <Link href={"/products/oliveoil"}>
            <span
              className={
                router.pathname === "/products/oliveoil"
                  ? `${style.active}`
                  : ""
              }
            >
              Maslinovo ulje
            </span>
          </Link>
        </li>
        <li className={style.subPage}>
          <Link href={"/products/almonds"}>
            <span
              className={
                router.pathname === "/products/almonds" ? `${style.active}` : ""
              }
            >
              Bademi
            </span>
          </Link>
        </li>
      </div>
      <div className={style.navigation_subcontainer}>
        <li className={style.topPage}>
          <Link href={"/aboutUs"}>
            <span
              className={
                router.pathname === "/aboutUs" ? `${style.active}` : ""
              }
            >
              O nama
            </span>
          </Link>
        </li>
        <li className={style.subPage}>
          <Link href={"/aboutUs/fromFirstHand"}>
            <span
              className={
                router.pathname === "/aboutUs/fromFirstHand"
                  ? `${style.active}`
                  : ""
              }
            >
              Saznajte iz prve ruke
            </span>
          </Link>
        </li>
        <li className={style.subPage}>
          <Link href={"/aboutUs/landLocation"}>
            <span
              className={
                router.pathname === "/aboutUs/landLocation"
                  ? `${style.active}`
                  : ""
              }
            >
              Lokacije nasada
            </span>
          </Link>
        </li>
        <li className={style.subPage}>
          <Link href={"/aboutUs/contact"}>
            <span
              className={
                router.pathname === "/aboutUs/contact" ? `${style.active}` : ""
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
