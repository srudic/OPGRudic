import Button from "../UI/button";
import Input from "../UI/input";
import styles from "../../styles/ContactPage/Contact.module.css";

const ContactForm = () => {
  return (
    <>
      <div className={styles.contactForm}>
        <Input title={"Ime"} type={"text"} name={"input-name"} />
        <Input title={"Prezime"} type={"text"} name={"input-surname"} />
        <Input title={"E-mail"} type={"email"} name={"input-email"} />
        <Input title={"Telefon"} type={"text"} name={"input-telephone"} />
        <div className={styles.messageContainer}>
          <label htmlFor={"msg-input"}>Poruka</label>
          <textarea rows="4" cols="34" name={"msg-input"} id={"msg-input"} />
        </div>
        <div className={styles.btnContainer}>
          <Button title={"Pošalji"} />
        </div>
      </div>
    </>
  );
};

export default ContactForm;
