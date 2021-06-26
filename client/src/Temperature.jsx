import styles from "./Temperature.module.css";
import { useState, useEffect } from "react";

const Temperature = function Temperature({ children }) {
  const [temperatureData, setTemperatureData] = useState();
  useEffect(() => {
    fetch("/api/temperature")
      .then((response) => response.json())
      .then((data) => setTemperatureData(data));
  }, []);

  return (
    <div className={styles.temperature}>{JSON.stringify(temperatureData)}</div>
  );
};

export default Temperature;
