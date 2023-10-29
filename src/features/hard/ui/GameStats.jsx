import { useSelector, useDispatch } from "react-redux";
import { resetGame } from "../hardSlice";
import { getLocalStorage } from "../../../services/localStorage";
import { StyledGameStats } from "../../easy/ui/GameStats";
import { StyledButton } from "../../../styles/GlobalStyles";

const GameStats = () => {
  const {
    stats: { totalWins, totalLoses, totalTies },
    showStats,
  } = useSelector((state) => state.hard);
  const sessionScore = JSON.parse(getLocalStorage("score"));
  const dispatch = useDispatch();

  return (
    <StyledGameStats type={showStats.toString()}>
      <div className="stats">
        <div className="wins">
          <p>Wins</p>
          <h1>{sessionScore?.totalWins || totalWins}</h1>
        </div>
        <div className="ties">
          <p>ties</p>
          <h1>{sessionScore?.totalTies || totalTies}</h1>
        </div>
        <div className="loses">
          <p>Loses</p>
          <h1>{sessionScore?.totalLoses || totalLoses}</h1>
        </div>
      </div>
      <StyledButton>
        <button className="btn reset" onClick={() => dispatch(resetGame())}>
          reset game
        </button>
      </StyledButton>
    </StyledGameStats>
  );
};
export default GameStats;
