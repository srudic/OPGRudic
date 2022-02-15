import Image from "next/image";
import styles from "../../styles/ProductsPage/Products.module.css";

///////////////
//Add button option

const WelcomeArticle = (props) => {
  return (
    <div className={styles.welcomeContainer}>
      {props.src && (
        <div className={styles.welcomeImageContainer}>
          <Image
            src={props.src}
            alt={props.alt}
            draggable={false}
            // width="100%"
            // height="100%"
            //   layout="responsive"
            //   objectFit="cover"
          />
        </div>
      )}
      <h1>{props.title}</h1>
      <h2>{props.subtitle}</h2>
    </div>
  );
};

export default WelcomeArticle;
