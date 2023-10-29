import { useSelector, useDispatch } from "react-redux";
import { showRules } from "../hardSlice";
import { Steps } from "../utils";
import { Link } from "react-router-dom";
import { StyledGameBoard } from "../../easy/ui/GameBoard";
import { StyledButton } from "../../../styles/GlobalStyles";
import { Winner } from "../../hard/utils/Winner";

const GameBoard = () => {
  const { currentStep } = useSelector((state) => state.hard);
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
          <Link to={"/"}>play easy</Link>
        </button>
      </StyledButton>
    </StyledGameBoard>
  );
};
export default GameBoard;
