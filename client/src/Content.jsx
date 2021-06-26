import styles from "./Content.module.css";

const Content = function Content({ children }) {
  return <main className={styles.content}>{children}</main>;
};

export default Content;
