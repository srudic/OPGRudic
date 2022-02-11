import Image from "next/image";
import styles from "../../styles/ArticleItem.module.css";

const ArticleItem = (props) => {
  let currentClass = [styles.itemContainer];
  if (props.img) {
    currentClass.push(styles.center);
  }
  return (
    <div className={currentClass.join(" ")}>
      <div className={styles.subtitle}>{props.subtitle}</div>
      <div className={styles.title}>{props.title}</div>
      {props.img && (
        <div className={styles.imageContainer}>
          <Image
            src={props.src}
            alt={props.src}
            draggable={false}
            width="100%"
            height="100%"
            layout="responsive"
            objectFit="cover"
          />
        </div>
      )}
    </div>
  );
};

export default ArticleItem;
