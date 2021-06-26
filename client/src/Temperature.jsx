import { useState, useEffect } from "react";

import Average from "./Average";

import styles from "./Temperature.module.css";

const Temperature = function Temperature({ children }) {
  const [temperatureData, setTemperatureData] = useState();
  useEffect(() => {
    fetch("/api/temperature")
      .then((response) => response.json())
      .then((data) => setTemperatureData(data));
  }, []);

  const { average } = temperatureData;
  return (
    <div className={styles.temperature}>
      <Average average={average} />
    </div>
  );
};

export default Temperature;
