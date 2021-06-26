import styles from "./Temperature.module.css";
import { useState, useEffect } from "react";

const Temperature = function Temperature({ children }) {
  const [hello, setHello] = useState();
  useEffect(() => {
    fetch("/api/hello")
      .then((response) => response.json())
      .then((data) => setHello(data));
  }, []);

  return (
    <div className={styles.temperature}>
      Response from <code>/api/hello</code>:<pre>{JSON.stringify(hello)}</pre>
    </div>
  );
};

export default Temperature;
