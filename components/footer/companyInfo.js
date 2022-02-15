import style from "../../styles/CompanyInfo.module.css";
import { FaChevronCircleUp } from "react-icons/fa";

const info = {
  title: "OPG Rudić",
  info: ["MIBPG: 0152081", "Dragan Rudić", "opg.rudic@gmail.com"],
};

const CompanyInfo = () => {
  const goToTopHandler = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className={style.companyInfoContainter}>
      <div className={style.companyInfo}>
        <h1>{info.title}</h1>
        {info.info.map((item) => (
          <p key={item + 1}>{item}</p>
        ))}
      </div>
      <div className={style.goToTopContainer} onClick={goToTopHandler}>
        <FaChevronCircleUp size={40} />
        {/*  MISSING: Add event for going to top of the page */}
      </div>
    </div>
  );
};

export default CompanyInfo;
