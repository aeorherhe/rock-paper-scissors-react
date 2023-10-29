import styled, { css } from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { resetGame } from "../easySlice";
import { getLocalStorage } from "../../../services/localStorage";
import { StyledButton } from "../../../styles/GlobalStyles";

const GameStats = () => {
  const {
    stats: { totalWins, totalLoses, totalTies },
    showStats,
  } = useSelector((state) => state.easy);
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

/****************** styled component ***************/
/****************** styled component ***************/

export const StyledGameStats = styled.article`
  grid-column: span 2;
  display: flex;
  flex-direction: column;
  height: 0;
  overflow: hidden;
  transition: var(--transition);

  ${(props) =>
    props.type === "true" &&
    css`
      height: 13rem;
    `}

  .stats {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    margin: 0.55rem 0;
  }

  .ties {
    h1 {
      color: var(--Neon-Green);
    }
  }

  .loses {
    h1 {
      color: var(--Orange);
    }
  }
`;
