import Link from "next/link";

const NavigationBar = () => {
  return (
    <div>
      <ul>
        <li>
          <Link href={"/"}>Naslovnica</Link>
        </li>

        <li>
          <Link href={"/products"}>Proizvodi</Link>
        </li>
        <li>
          <Link href={"/products/oliveoil"}>Maslinovo ulje</Link>
        </li>
        <li>
          <Link href={"/products/almonds"}>Bademi</Link>
        </li>
        <li>
          <Link href={"/aboutUs"}>O nama</Link>
        </li>
        <li>
          <Link href={"/aboutUs/fromFirstHand"}>Saznajte iz prve ruke</Link>
        </li>
        <li>
          <Link href={"/aboutUs/landLocation"}>Lokacije nasada</Link>
        </li>
        <li>
          <Link href={"/aboutUs/contact"}>Kontakt</Link>
        </li>
      </ul>
    </div>
  );
};

export default NavigationBar;
