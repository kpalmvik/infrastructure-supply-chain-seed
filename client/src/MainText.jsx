import styles from "./MainText.module.css";

const MainText = function MainText({ children }) {
  return <section className={styles.mainText}>{children}</section>;
};

export default MainText;
