import styled from "styled-components";
import "./App.css";
import Form from "./components/Form";

function App() {
  const CenteredContainer = styled.div`
    display: flex;
    justify-content: center;
  `;

  return (
    <div className="App">
      <CenteredContainer>
        <Form />
      </CenteredContainer>
    </div>
  );
}

export default App;
