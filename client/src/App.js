import { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [hello, setHello] = useState();
  useEffect(() => {
    fetch("/api/hello")
      .then((response) => response.json())
      .then((data) => setHello(data));
  }, []);
  return (
    <div>
      Response from <code>/api/hello</code>:<pre>{JSON.stringify(hello)}</pre>
    </div>
  );
}

export default App;
