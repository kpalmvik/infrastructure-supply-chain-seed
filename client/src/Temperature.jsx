import { useState, useEffect } from "react";

import Average from "./Average";
import TemperatureBars from "./TemperatureBars";

import styles from "./Temperature.module.css";

const Temperature = function Temperature({ children }) {
  const [temperatureData, setTemperatureData] = useState();
  useEffect(() => {
    fetch("/api/temperature")
      .then((response) => response.json())
      .then((data) => setTemperatureData(data));
  }, []);

  return (
    <div className={styles.temperature}>
      <Average average={temperatureData?.average} />
      <TemperatureBars entries={temperatureData?.entries} />
    </div>
  );
};

export default Temperature;
