/* eslint-disable react/prop-types */
import { useSelector, useDispatch } from "react-redux";
import styled, { css } from "styled-components";
import { useEffect } from "react";
import {
  checkWinner,
  computersChoiceFunc,
  playersChoiceFunc,
} from "../easySlice";
import { Winner } from "./Winner";
import { StyledWinnerRipple } from "../../../styles/GlobalStyles";

function Options({ type, winner: winnerProp }) {
  const { currentStep, winner } = useSelector((state) => state.easy);
  const dispatch = useDispatch();

  if (currentStep === 1) {
    return (
      <div
        className={`game-card ${type}`}
        onClick={() => dispatch(playersChoiceFunc(type))}
      >
        <img src={`/images/icon-${type}.svg`} alt={type} />
      </div>
    );
  }

  if (currentStep === 4) {
    if (winner === winnerProp) {
      return (
        <StyledWinnerRipple className={`game-card ${type}`}>
          <div className="box-ripples">
            <img src={`/images/icon-${type}.svg`} alt={type} />
          </div>
        </StyledWinnerRipple>
      );
    }

    return (
      <div className={`game-card ${type}`}>
        <img src={`/images/icon-${type}.svg`} alt={type} />
      </div>
    );
  }

  return (
    <div className={`game-card ${type}`}>
      <img src={`/images/icon-${type}.svg`} alt={type} />
    </div>
  );
}

function Steps() {
  const { currentStep, playersChoice, computersChoice } = useSelector(
    (state) => state.easy
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (currentStep === 2) {
      setTimeout(() => {
        dispatch(computersChoiceFunc());
      }, 2000);
    }

    if (currentStep === 3) {
      dispatch(checkWinner());
    }
  }, [dispatch, currentStep]);

  //   step 2
  if (currentStep > 1) {
    return (
      <StyledStepsEasy>
        <StyledSteps type={currentStep}>
          {/* players choice */}
          <div className="pick">
            {playersChoice ? (
              <Options type={playersChoice} winner={"you win"} />
            ) : (
              <div className="waiting"></div>
            )}
            <h1>you picked</h1>
          </div>
          {currentStep === 4 && <Winner type={"desktop"} />}

          {/* computers choice */}
          <div className="pick">
            {currentStep === 2 && <div className="waiting"></div>}
            {currentStep === 3 && <Options type={computersChoice} />}
            {currentStep === 4 && (
              <Options type={computersChoice} winner={"you lose"} />
            )}
            <h1>the house picked</h1>
          </div>
        </StyledSteps>
      </StyledStepsEasy>
    );
  }

  //   step 1
  if (currentStep === 1) {
    return (
      <StyledStepsEasy type={currentStep}>
        <StyledSteps>
          <Options type="paper" />
          <Options type="scissors" />
          <Options type="rock" />
        </StyledSteps>
      </StyledStepsEasy>
    );
  }

  return null;
}

export default Steps;

/****************** styled component ***************/
/****************** styled component ***************/

const StyledStepsEasy = styled.article`
  > div {
    gap: 2rem;
  }

  .paper {
    background-image: var(--Paper-Gradient);
  }

  .scissors {
    background-image: var(--Scissors-Gradient);
  }

  .rock {
    background-image: var(--Rock-Gradient);
    grid-column: span 2;
  }

  ${(props) =>
    props.type === 1 &&
    css`
      background-image: url(/images/bg-triangle.svg);
      background-repeat: no-repeat;
      background-position: center;
      padding: 1rem;
      background-size: 55%;

      @media (min-width: 45rem) {
        background-size: 50%;
      }
    `};

  @media (min-width: 55rem) {
    > div {
      gap: 2rem;
    }
  }
`;

export const StyledSteps = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  justify-items: center;
  padding: 2rem 0;
  margin: 0 auto;
  max-width: 30rem;

  .game-card {
    border-radius: var(--border-radius);
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    cursor: pointer;
    margin: 0.75rem;
  }

  img {
    padding: 1rem;
    background-color: var(--White);
    border-radius: 50%;
  }

  .game-ctn {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
  }

  .pick {
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5rem;
    justify-content: space-between;
  }

  @media (min-width: 45rem) {
    max-width: 40rem;
    img {
      padding: 2rem;
    }
  }

  @media (min-width: 55rem) {
    /* border: var(--line); */
    max-width: 60rem;
    padding: 4rem;

    .game-card {
      padding: 1.5rem;
    }

    img {
      padding: 3rem;
    }

    .waiting {
      width: 10rem;
      height: 10rem;
    }

    .pick {
      flex-direction: column-reverse;
      gap: 5rem;

      h1 {
        font-size: 1.5rem;
      }
    }

    ${(props) =>
      props.type === 4 &&
      css`
        grid-template-columns: repeat(3, 1fr);
        max-width: 100%;
      `}
  }

  .waiting {
    width: 7.5rem;
    height: 7.5rem;
    border-radius: 50%;
    border: var(--line);
    display: grid;
    place-content: center;
    margin: 1rem auto;
    font-size: 2rem;
    font-weight: 700;
  }

  .waiting:after {
    content: " ";
    display: block;
    border-radius: 50%;
    width: 0;
    height: 0;
    margin: 8px;
    box-sizing: border-box;
    border: 32px solid #dfc;
    border-color: #dfc transparent #dfc transparent;
    animation: lds-hourglass 1.2s infinite;
    transform: translateX(50%, -50%);
  }
  @keyframes lds-hourglass {
    0% {
      transform: rotate(0);
      animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
    }
    50% {
      transform: rotate(900deg);
      animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    }
    100% {
      transform: rotate(1800deg);
    }
  }
`;
