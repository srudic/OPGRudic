import style from "../styles/CompanyInfo.module.css";

const info = {
  title: "OPG Rudić",
  info: ["MIBPG: 0152081", "Dragan Rudić", "opg.rudic@gmail.com"],
};

const CompanyInfo = () => {
  return (
    <div className={style.companyInfo}>
      <h1>{info.title}</h1>
      {info.info.map((item) => (
        <p>{item}</p>
      ))}
    </div>
  );
};

export default CompanyInfo;
