import styles from "./ContactList.module.css";
import Contact from "../Contact/Contact";

export default function ContactList({ allPeople, onDelete }) {
  return (
    <div className={styles.listBox}>
      <ul className={styles.listElement}>
        {allPeople.map((person) => (
          <li className={styles.listItem} key={person.id}>
            <Contact contact={person} onDelete={onDelete} />
          </li>
        ))}
      </ul>
    </div>
  );
}