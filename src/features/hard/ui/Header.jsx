import { useSelector, useDispatch } from "react-redux";
import { showStatsFunc } from "../hardSlice";
import GameStats from "./GameStats";
import { getLocalStorage } from "../../../services/localStorage";
import { StyledHeader } from "../../easy/ui/Header";
import { StyledButton } from "../../../styles/GlobalStyles";

const Header = () => {
  const {
    stats: { score },
  } = useSelector((state) => state.hard);
  const sessionScore = JSON.parse(getLocalStorage("score"));
  const dispatch = useDispatch();

  return (
    <StyledHeader>
      <div className="logo">
        <img src="/images/logo-bonus.svg" alt="logo" />
      </div>
      <div className="score" onClick={() => dispatch(showStatsFunc())}>
        <p>Score</p>
        <h1>{sessionScore?.score || score}</h1>
        <StyledButton className="stats-btn">stats</StyledButton>
      </div>
      <GameStats />
    </StyledHeader>
  );
};
export default Header;
