import { useSelector, useDispatch } from "react-redux";
import { playAgain } from "../hardSlice";
import { StyledWinner } from "../../easy/utils/Winner";
import { StyledButton } from "../../../styles/GlobalStyles";

/* eslint-disable react/prop-types */
export function Winner({ type }) {
  const { currentStep, winner } = useSelector((state) => state.hard);
  const dispatch = useDispatch();

  return (
    <StyledWinner type={currentStep} className={`winner ${type}`}>
      <h1>{winner}</h1>
      <StyledButton
        className="btn play-again"
        onClick={() => dispatch(playAgain())}
      >
        play again
      </StyledButton>
    </StyledWinner>
  );
}
