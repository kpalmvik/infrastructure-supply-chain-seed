import Button from "./Button";
import ButtonBar from "./ButtonBar";
import Content from "./Content";
import Header from "./Header";
import MainText from "./MainText";
import Temperature from "./Temperature";

function App() {
  return (
    <>
      <Header />
      <Content>
        <Temperature />
        <ButtonBar>
          <Button>Show me a Trick</Button>
          <Button secondary type="reset">
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
        <section>
          <ul>
            <li>
              <strong>Shot12 image</strong>
            </li>
            <li>
              <strong>Yard 1 image</strong>
              <h2>Direct mailing strategy buzz social proof</h2>
            </li>
            <li>
              <strong>Tesla cat image</strong>
              <h2>Hypotheses value proposition</h2>
            </li>
          </ul>
        </section>
      </Content>
    </>
  );
}

export default App;
