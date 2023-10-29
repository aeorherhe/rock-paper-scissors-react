import { useSelector, useDispatch } from "react-redux";
import { playAgain } from "../hardSlice";
import { StyledWinner } from "../../easy/utils/Winner";

/* eslint-disable react/prop-types */
export function Winner({ type }) {
  const { currentStep, winner } = useSelector((state) => state.hard);
  const dispatch = useDispatch();

  return (
    <StyledWinner type={currentStep} className={`winner ${type}`}>
      <h1>{winner}</h1>
      <button className="btn play-again" onClick={() => dispatch(playAgain())}>
        play again
      </button>
    </StyledWinner>
  );
}
