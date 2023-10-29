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
      <StyledButton>
        <button className="btn rules" onClick={() => dispatch(showRules())}>
          rules
        </button>
      </StyledButton>
      <StyledButton>
        <button className="btn rules">
          <Link to={"hard"}>play hard</Link>
        </button>
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
`;
