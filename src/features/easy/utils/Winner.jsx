import styled, { css } from "styled-components";
import { playAgain } from "../easySlice";
import { useSelector, useDispatch } from "react-redux";
import { StyledButton } from "../../../styles/GlobalStyles";

/* eslint-disable react/prop-types */
export function Winner({ type }) {
  const { currentStep, winner } = useSelector((state) => state.easy);
  const dispatch = useDispatch();

  return (
    <StyledWinner type={currentStep} className={`${type}`}>
      <h1>{winner}</h1>
      <StyledButton
        className="btn play-again"
        onClick={() => dispatch(playAgain())}
      >
        play again
      </StyledButton>
    </StyledWinner>
  );
}

// /****************** styled component ***************/
// /****************** styled component ***************/

export const StyledWinner = styled.div`
  margin: 1rem;
  visibility: hidden;
  height: 0;
  overflow: hidden;
  transition: var(--transition);

  .play-again {
    padding: 1rem 2rem;
    background-color: var(--White);
    color: var(--Dark-Text);
    margin: 1rem auto;
  }

  &.desktop {
    display: none;
  }

  @media (min-width: 55rem) {
    h1 {
      font-size: 2.5rem;
    }
    &.mobile {
      display: none;
    }

    &.desktop {
      display: block;
    }
  }

  ${(props) =>
    props.type === 4 &&
    css`
      padding: 1rem;
      height: 13rem;
      visibility: visible;
    `}
`;
