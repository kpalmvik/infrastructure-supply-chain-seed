import { useState } from "react";

import Button from "./Button";
import ButtonBar from "./ButtonBar";
import Card from "./Card";
import Cards from "./Cards";
import Consumption from "./Consumption";
import Content from "./Content";
import Header from "./Header";
import MainText from "./MainText";
import Temperature from "./Temperature";

import shot12 from "./images/shot12.png";
import teslaCat from "./images/tesla-cat.png";
import yard from "./images/yard.png";

function App() {
  const [trick, setTrick] = useState(false);
  return (
    <>
      <Header />
      <Content>
        {trick ? <Consumption /> : <Temperature />}
        <ButtonBar>
          <Button onClick={() => setTrick(true)}>Show me a Trick</Button>
          <Button secondary type="reset" onClick={() => setTrick(false)}>
            Reset
          </Button>
        </ButtonBar>
        <MainText title="Infrastructure supply chain seed lean startup technology">
          <p>
            Assets traction angel investor user experience social media leverage
            value proposition startup success founders creative. Equity value
            proposition launch party business-to-consumer research &amp;
            development freemium bandwidth stock scrum project analytics.
          </p>
          <p>
            Agile development backing business-to-consumer analytics burn rate
            leverage business-to-business market creative responsive web design
            graphical user interface
          </p>
        </MainText>
        <Cards>
          <Card large imgSrc={shot12} />
          <Card
            title="Direct mailing strategy buzz social proof"
            imgSrc={teslaCat}
          />
          <Card title="Hypotheses value proposition" imgSrc={yard} />
        </Cards>
      </Content>
    </>
  );
}

export default App;
