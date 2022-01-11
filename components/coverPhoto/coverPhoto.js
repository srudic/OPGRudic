import Image from "next/image";
import style from "../../styles/CoverPhoto.module.css";

//MISSING
//Add button to the center, now I think it is not in the center
//Destructure compontent --> button in the another
//Add heart #kupujmohrvatsko

const CoverPhoto = () => {
  return (
    <div className={style.coverPhotoContainer}>
      <Image src="/viber_image_2020-12-09_23-30-47.jpg" layout="fill" />
      <div className={style.botun}>Saznajte više</div>
    </div>
  );
};

export default CoverPhoto;
