import styles from "./ButtonBar.module.css";

const ButtonBar = function ButtonBar({ children }) {
  return <section className={styles.buttonBar}>{children}</section>;
};

export default ButtonBar;
