import styles from "./MainText.module.css";

const MainText = function MainText({ title, children }) {
  return (
    <section className={styles.mainText}>
      <h1>{title}</h1>
      {children}
    </section>
  );
};

export default MainText;
