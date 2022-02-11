import Image from "next/image";
import img1 from "../../assets/images/masline1.png";
import styles from "../../styles/FooterImage.module.css";

const FooterImage = () => {
  //Checkout on what site you are
  //Decide what image you will display
  const image = img1;

  return (
    <div className={styles.imageContainer}>
      <Image src={image} />
    </div>
  );
};

export default FooterImage;
