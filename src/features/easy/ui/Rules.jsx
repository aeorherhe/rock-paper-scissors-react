import styled from "styled-components";
import { useDispatch } from "react-redux";
import { hideRules } from "../easySlice";

const Rules = () => {
  const dispatch = useDispatch();
  return (
    <StyledRules>
      <h1>rules</h1>
      <div className="rules">
        <img src="/images/image-rules.svg" alt="rules" />
      </div>
      <button className="btn close" onClick={() => dispatch(hideRules())}>
        <img src="/images/icon-close.svg" alt="close" />
      </button>
    </StyledRules>
  );
};
export default Rules;

/****************** styled component ***************/
/****************** styled component ***************/

export const StyledRules = styled.section`
  background-color: var(--White);
  color: var(--Dark-Text);
  display: grid;
  place-content: center;
  gap: 4rem;
  padding: 4rem 2rem;
  text-align: center;
  border-radius: var(--border-radius);
  text-transform: uppercase;
  letter-spacing: 0.25rem;

  .close {
    margin: 2rem auto;
    width: fit-content;
    cursor: pointer;

    img {
      width: 2.5rem;
    }
  }

  @media screen and (min-width: 768px) {
    img {
      width: 30rem;
    }
  }
`;
