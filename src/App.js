import styled from "styled-components";
import Cube from "./Cube/Cube";

const Background = styled.div`
  background-color: #535f70;
  height: 100%;
  width: 100%;
`;

let Scene = styled.div`
  margin: 0;
  height: 100vh;
  perspective: 35em;
  font-size: 2em;
`;

function App() {
  return (
    <Background>
      <header className="App-header">
        <Scene>
          <Cube />
        </Scene>
      </header>
    </Background>
  );
}

export default App;
