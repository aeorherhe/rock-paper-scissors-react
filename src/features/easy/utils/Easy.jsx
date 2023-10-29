import { useSelector } from "react-redux";
import { GameBoard, Header, Rules } from "../ui";

const Easy = () => {
  const { showRules } = useSelector((state) => state.easy);

  return (
    <>
      <Header />
      {!showRules ? <GameBoard /> : <Rules />}
    </>
  );
};
export default Easy;
