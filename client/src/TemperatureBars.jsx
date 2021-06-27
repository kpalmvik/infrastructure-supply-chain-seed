import styles from "./TemperatureBars.module.css";

const normalize = (entry, entries) => {
  const min = Math.min(...entries);
  const max = Math.max(...entries);

  return (entry - min) / (max - min);
};

const TemperatureBars = function TemperatureBars({ entries }) {
  return (
    <ul className={styles.temperatureBars}>
      {entries?.map((entry, i) => (
        <li
          key={`${i}${entry}`}
          className={styles.temperatureBar}
          style={{ "--barValue": normalize(entry, entries) }}
        >
          <div className={styles.bar}></div>
        </li>
      ))}
    </ul>
  );
};

export default TemperatureBars;
