import styles from "./Contact.module.css";
import { MdPerson } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";

export default function Contact({ contact, onDelete }) {
  return (
    <>
      <div>
        <p className={styles.firstTextElement}>
          <MdPerson size={24} /> {contact.name}
        </p>
        <p className={styles.textElement}>
          <FaPhoneAlt className={styles.iconItem} /> {contact.number}
        </p>
      </div>
      <button
        onClick={() => onDelete(contact.id)}
        className={styles.buttonElement}
        type="button"
      >
        Delete
      </button>
    </>
  );
}