import styled from "styled-components";
import Background from "./Background/Background";
import Cube from "./Cube/Cube";

let Scene = styled.div`
  margin: 0;
  height: 100vh;
  perspective: 35em;
  font-size: 2em;
  overflow: hidden;
`;

function App() {
  return (
    <>
      <Background>
        <Scene>
          <Cube />
        </Scene>
      </Background>
    </>
  );
}

export default App;
