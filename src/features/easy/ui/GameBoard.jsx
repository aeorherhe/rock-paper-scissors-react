import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { showRules } from "../easySlice";
import { Steps } from "../utils";
import { Link } from "react-router-dom";
import { StyledButton } from "../../../styles/GlobalStyles";
import { Winner } from "../utils/Winner";

const GameBoard = () => {
  const { currentStep } = useSelector((state) => state.easy);
  const dispatch = useDispatch();

  return (
    <StyledGameBoard type={currentStep}>
      <Steps />
      <Winner type={"mobile"} />
      <StyledButton className="btn rules" onClick={() => dispatch(showRules())}>
        rules
      </StyledButton>
      <StyledButton className="btn hard">
        <Link to={"hard"}>play hard</Link>
      </StyledButton>
    </StyledGameBoard>
  );
};
export default GameBoard;

/****************** styled component ***************/
/****************** styled component ***************/

export const StyledGameBoard = styled.section`
  border-radius: var(--border-radius);
  margin: 2rem 0;
  text-transform: uppercase;
  letter-spacing: 0.125rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (min-width: 55rem) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-content: center;
    align-items: flex-start;
    place-content: center;
    gap: 2rem;

    .rules {
      grid-column: 3;
    }

    .hard {
      grid-column: 1;
      grid-row: 1;
    }
  }
`;
