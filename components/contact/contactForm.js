import { useRef } from "react";
import Button from "../UI/button";
import Input from "../UI/input";
import styles from "../../styles/ContactPage/Contact.module.css";

const ContactForm = () => {
  const nameRef = useRef();
  const surnameRef = useRef();
  const emailRef = useRef();
  const telephoneRef = useRef();
  const messageRef = useRef();

  return (
    <>
      <div className={styles.contactForm}>
        <Input title={"Ime"} type={"text"} name={"input-name"} ref={nameRef} />
        <Input
          title={"Prezime"}
          type={"text"}
          name={"input-surname"}
          ref={surnameRef}
        />
        <Input
          title={"E-mail"}
          type={"email"}
          name={"input-email"}
          ref={emailRef}
        />
        <Input
          title={"Telefon"}
          type={"text"}
          name={"input-telephone"}
          ref={telephoneRef}
        />
        <div className={styles.messageContainer}>
          <label htmlFor={"msg-input"}>Poruka</label>
          <textarea
            rows="4"
            cols="50"
            name="message"
            ref={messageRef}
            name={"msg-input"}
            id={"msg-input"}
          />
        </div>
        <div className={styles.btnContainer}>
          <Button title={"Pošalji"} />
        </div>
      </div>
    </>
  );
};

export default ContactForm;
