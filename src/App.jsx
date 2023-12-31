import styled from "styled-components";
import Router from "./services/router";

function App() {
  return (
    <StyledApp>
      <Router />
    </StyledApp>
  );
}

export default App;

/****************** styled component ***************/
/****************** styled component ***************/

const StyledApp = styled.main`
  width: 90vw;
  max-width: 65rem;
  background-image: var(--Gradient);
  margin: 1rem auto;
`;
