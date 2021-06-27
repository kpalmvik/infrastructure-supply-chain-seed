import styles from "./Average.module.css";

const Average = function Average({ average, title, unit = "" }) {
  return (
    <div className={styles.average}>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.averageNumber}>
        {average}
        {unit}
      </p>
    </div>
  );
};

export default Average;
