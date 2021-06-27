import useSWR from "swr";

import Average from "./Average";
import BarChart from "./BarChart";

import styles from "./Temperature.module.css";

const fetcher = (url) => fetch(url).then((r) => r.json());
const swrOptions = { refreshInterval: 30 * 1000 };

const Temperature = function Temperature({ children }) {
  const { data, error } = useSWR("/api/temperature", fetcher, swrOptions);

  return (
    <div className={styles.temperature}>
      {data && (
        <>
          <Average
            average={data.average}
            title="Average temperature"
            unit="°"
          />
          <BarChart entries={data.entries} />
        </>
      )}
      {!data && (
        <>
          {error && <h2>Error loading temperatures</h2>}
          {!error && <h2>Loading temperatures</h2>}
        </>
      )}
    </div>
  );
};

export default Temperature;
