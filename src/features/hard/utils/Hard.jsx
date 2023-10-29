import { useSelector } from "react-redux";
import { GameBoard, Header, Rules } from "../ui";

const Hard = () => {
  const { showRules } = useSelector((state) => state.hard);

  return (
    <>
      <Header />
      {!showRules ? <GameBoard /> : <Rules />}
    </>
  );
};
export default Hard;
