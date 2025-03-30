import styles from "./Display.module.css";
function Display({ calval }) {
  return <input value={calval} className={styles["display"]} type="numeric" />;
}
export default Display;
