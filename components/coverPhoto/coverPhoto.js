import Image from "next/image";
import Button from "../UI/button";
import style from "../../styles/CoverPhoto.module.css";
import { useEffect } from "react";

//MISSING
//Add button to the center, now I think it is not in the center
//Destructure compontent --> button in the another
//Add heart #kupujmohrvatsko

const CoverPhoto = () => {
  const scrollToComponenthandler = () => {
    // console.log("Csroll");
    // if (document.readyState === "complete") {
    //   document.documentElement.scrollHeight = 500;
    // }
    // element which needs to be scrolled to
    var element = document.querySelector("#blogSuggestions");

    // scroll to element
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
