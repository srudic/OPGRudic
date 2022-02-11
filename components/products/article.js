import Image from "next/image";
import Button from "../UI/button";

import styles from "../../styles/ProductsPage/Products.module.css";

const Article = (props) => {
  let currentClass = [styles.articleContainer];

  if (props.reverse) {
    currentClass.push(styles.reverse);
  }

  return (
    <div className={currentClass.join(" ")}>
      <div className={styles.informationContainer}>
        <h4>{props.subtitle}</h4>
        <h3>{props.title}</h3>
        <p>{props.paragraph}</p>
      </div>
      <div className={styles.articleImageContainer}>
        <Image
          src={props.src}
          alt={props.alt}
          draggable={false}
          //   width="100%"
          //   height="100%"
          //   layout="responsive"
          //   objectFit="cover"
        />
        {props.button && (
          <div>
            <Button clicked={props.clicked} title={props.buttonTitle} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Article;
