import { useState, useEffect } from "react";
import Header from "./Header";

function App() {
  const [hello, setHello] = useState();
  useEffect(() => {
    fetch("/api/hello")
      .then((response) => response.json())
      .then((data) => setHello(data));
  }, []);
  return (
    <>
      <Header />
      <div>
        Response from <code>/api/hello</code>:<pre>{JSON.stringify(hello)}</pre>
      </div>
    </>
  );
}

export default App;
