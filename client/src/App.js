import Content from "./Content";
import Header from "./Header";
import Temperature from "./Temperature";

function App() {
  return (
    <>
      <Header />
      <Content>
        <Temperature />
      </Content>
    </>
  );
}

export default App;
