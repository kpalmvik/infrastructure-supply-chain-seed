import styles from "./Average.module.css";

const Average = function Average({ average }) {
  return (
    <div className={styles.average}>
      <h2 className={styles.title}>Average temperature</h2>
      <p className={styles.averageNumber}>{average}°</p>
    </div>
  );
};

export default Average;
