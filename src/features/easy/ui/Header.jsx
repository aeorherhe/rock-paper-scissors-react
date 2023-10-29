import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { showStatsFunc } from "../easySlice";
import GameStats from "./GameStats";
import { getLocalStorage } from "../../../services/localStorage";

const Header = () => {
  const {
    stats: { score },
  } = useSelector((state) => state.easy);
  const sessionScore = JSON.parse(getLocalStorage("score"));
  const dispatch = useDispatch();

  return (
    <StyledHeader>
      <div className="logo">
        <img src="/images/logo.svg" alt="logo" />
      </div>
      <div className="score" onClick={() => dispatch(showStatsFunc())}>
        <p>Score</p>
        <h1>{sessionScore?.score || score}</h1>
        <button className="btn stats-btn">stats</button>
      </div>
      <GameStats />
    </StyledHeader>
  );
};
export default Header;

/****************** styled component ***************/
/****************** styled component ***************/

export const StyledHeader = styled.header`
  border: var(--line);
  border-radius: var(--border-radius);
  padding: 1rem;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 1rem;
  align-items: center;
  margin-bottom: 2rem;

  .logo img {
    width: 10rem;
    text-align: center;

    @media screen and (max-width: 25rem) {
      width: 8rem;
    }
    @media screen and (min-width: 45rem) {
      width: 12rem;
    }
  }

  .stats,
  .score {
    text-align: center;
    padding: 1.5rem 3rem;
    background-color: var(--White);
    border-radius: var(--border-radius);
    color: var(--Dark-Text);
    text-transform: uppercase;
  }

  h1 {
    color: var(--Score-Text);
    font-size: 3rem;
    font-weight: 700;
  }

  .score:hover {
    cursor: pointer;
  }

  .stats-btn {
    display: none;
  }

  @media screen and (min-width: 45rem) {
    .stats-btn {
      color: var(--Dark-Text);
      border: var(--line);
      padding: 0.5rem 1rem;
      display: block;
      margin-top: 1rem;
    }
  }
`;
