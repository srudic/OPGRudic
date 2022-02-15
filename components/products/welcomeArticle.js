import Image from "next/image";
import styles from "../../styles/ProductsPage/Products.module.css";

const WelcomeArticle = (props) => {
  return (
    <div
      className={styles.welcomeContainer}
      style={{ marginBottom: props.info ? "0em" : null }}
    >
      {props.src && (
        <div className={styles.welcomeImageContainer}>
          <Image src={props.src} alt={props.alt} draggable={false} />
        </div>
      )}
      <h1>{props.title}</h1>
      <h2>{props.subtitle}</h2>
    </div>
  );
};

export default WelcomeArticle;
