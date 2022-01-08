import style from "../styles/HomePage.module.css";
import NavigationBar from "../components/navigationBar/navigationBar";
const HomePage = () => {
  return (
    <>
      <div className={style.header}>Header</div>
      <div>Main</div>
      <div>
        Footer
        <NavigationBar />
      </div>
    </>
  );
};

export default HomePage;
