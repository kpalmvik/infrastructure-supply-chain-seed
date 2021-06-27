import useSWR from "swr";

import Average from "./Average";
import BarChart from "./BarChart";

import styles from "./Consumption.module.css";

const fetcher = (url) => fetch(url).then((r) => r.json());
const swrOptions = { refreshInterval: 30 * 1000 };

const Consumption = function Consumption({ children }) {
  const { data, error } = useSWR("/api/consumption", fetcher, swrOptions);

  return (
    <div className={styles.consumption}>
      {data && (
        <>
          <Average
            average={data.average}
            title="Average monthly consumption"
            unit=""
          />
          <BarChart entries={data.items} />
        </>
      )}
      {!data && (
        <>
          {error && <h2>Error loading consumption</h2>}
          {!error && <h2>Loading consumption</h2>}
        </>
      )}
    </div>
  );
};

export default Consumption;
