import { useState, useEffect } from "react";
import Content from "./Content";
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
      <Content>
        <div>
          Response from <code>/api/hello</code>:
          <pre>{JSON.stringify(hello)}</pre>
        </div>
      </Content>
    </>
  );
}

export default App;
