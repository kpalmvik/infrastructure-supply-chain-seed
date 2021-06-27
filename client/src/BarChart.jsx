import styles from "./BarChart.module.css";

const normalize = (entry, entries) => {
  const min = Math.min(...entries);
  const max = Math.max(...entries);

  return (entry - min) / (max - min);
};

const BarChart = function BarChart({ entries }) {
  return (
    <ul className={styles.barChart}>
      {entries?.map((entry, i) => (
        <li
          key={`${i}${entry}`}
          className={styles.item}
          style={{ "--barValue": normalize(entry, entries) }}
        >
          <div className={styles.bar}></div>
        </li>
      ))}
    </ul>
  );
};

export default BarChart;
