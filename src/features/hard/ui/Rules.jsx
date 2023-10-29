import { useDispatch } from "react-redux";
import { hideRules } from "../hardSlice";
import { StyledRules } from "../../easy/ui/Rules";

const Rules = () => {
  const dispatch = useDispatch();
  return (
    <StyledRules>
      <h1>rules</h1>
      <div className="rules">
        <img src="/images/image-rules-bonus.svg" alt="rules" />
      </div>
      <button className="btn close" onClick={() => dispatch(hideRules())}>
        <img src="/images/icon-close.svg" alt="close" />
      </button>
    </StyledRules>
  );
};
export default Rules;
