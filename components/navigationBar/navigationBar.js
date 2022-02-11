import Link from "next/link";
import style from "../../styles/Navigation.module.css";
import { useRouter } from "next/router";

const NAVIGATION = [
  {
    to: "/",
    title: "Naslovnica",
    submenu: [],
  },
  {
    to: "/Proizvodi",
    title: "Proizvodi",
    submenu: [
      {
        to: "/Proizvodi/Maslinovo_ulje",
        title: "Maslinovo ulje",
      },
      {
        to: "/Proizvodi/Bademi",
        title: "Bademi",
      },
    ],
  },
  {
    to: "/O_nama",
    title: "O nama",
    submenu: [
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
    ],
  },
];

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
      {NAVIGATION.map((menu) => (
        <div className={style.navigation_subcontainer}>
          <li className={classesTopPages}>
            <Link href={menu.to}>
              <span
                className={router.pathname === menu.to ? `${style.active}` : ""}
                onClick={props.closeMenuHandler}
              >
                {menu.title}
              </span>
            </Link>
          </li>

          {menu.submenu.map((submenu) => (
            <li className={style.subPage}>
              <Link href={submenu.to}>
                <span
                  className={
                    router.pathname === submenu.to ? `${style.active}` : ""
                  }
                  onClick={props.closeMenuHandler}
                >
                  {submenu.title}
                </span>
              </Link>
            </li>
          ))}
        </div>
      ))}
    </div>
  );
};

export default NavigationBar;
