import Image from "next/image";
import Button from "../UI/button";
import style from "../../styles/CoverPhoto.module.css";

//MISSING
//Add heart #kupujmohrvatsko

const CoverPhoto = () => {
  const scrollToComponenthandler = () => {
    var element = document.querySelector("#blogSuggestions");
    element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className={style.coverPhotoContainer}>
      <Image
        src="/viber_image_2020-12-09_23-30-47.jpg"
        layout="fill"
        priority
        objectFit="cover"
      />
      <div className={style.buttonContainer}>
        <Button title={"Saznajte više"} clicked={scrollToComponenthandler} />
      </div>
    </div>
  );
};

export default CoverPhoto;
