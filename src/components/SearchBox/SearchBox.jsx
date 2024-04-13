import styles from "./SearchBox.module.css";

export default function SearchBox({ value, onFilter }) {
  return (
    <div className={styles.inputWrapper}>
      <label className={styles.labelElement} htmlFor="input-element">
        Find contacts by name
      </label>
      <input
        value={value}
        onChange={(e) => onFilter(e.target.value)}
        className={styles.inputElement}
        type="text"
        id="input-element"
      />
    </div>
  );
}