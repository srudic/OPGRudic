import style from "../styles/HomePage.module.css";
import NavigationBar from "../components/navigationBar/navigationBar";
import CompanyInfo from "../components/companyInfo";
const HomePage = () => {
  return (
    <>
      <div className={style.header}>Header</div>
      <div>Main</div>
      <div>
        <NavigationBar />
        <CompanyInfo />
      </div>
    </>
  );
};

export default HomePage;
