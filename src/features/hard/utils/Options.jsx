/* eslint-disable react/prop-types */
import { useSelector, useDispatch } from "react-redux";
import {
  checkWinner,
  computersChoiceFunc,
  playersChoiceFunc,
} from "../hardSlice";
import { useEffect } from "react";
import { StyledSteps } from "../../easy/utils/Options";
import styled, { css } from "styled-components";
import { Winner } from "../../hard/utils/Winner";
import { StyledWinnerRipple } from "../../../styles/GlobalStyles";

function Options({ type, winner: winnerProp }) {
  const { currentStep, winner } = useSelector((state) => state.hard);
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
    (state) => state.hard
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
      <StyledStepsHard>
        <StyledSteps type={currentStep}>
          <div className="pick">
            {playersChoice ? (
              <Options type={playersChoice} winner={"you win"} />
            ) : (
              <div className="waiting"></div>
            )}
            <h1>the house picked</h1>
          </div>
          {currentStep === 4 && <Winner type={"desktop"} />}
          <div className="pick">
            {currentStep === 2 && <div className="waiting"></div>}
            {currentStep === 3 && <Options type={computersChoice} />}
            {currentStep === 4 && (
              <Options type={computersChoice} winner={"you lose"} />
            )}
            <h1>the house picked</h1>
          </div>
        </StyledSteps>
      </StyledStepsHard>
    );
  }

  //   step 1
  if (currentStep === 1) {
    return (
      <StyledStepsHard type={currentStep}>
        <StyledSteps>
          <Options type="paper" />
          <Options type="scissors" />
          <Options type="rock" />
          <Options type="lizard" />
          <Options type="spock" />
        </StyledSteps>
      </StyledStepsHard>
    );
  }

  return null;
}

export default Steps;

/****************** styled component ***************/
/****************** styled component ***************/

const StyledStepsHard = styled.article`
  > div {
    gap: 1rem;

    @media (min-width: 55rem) {
      gap: 3rem;
    }
  }

  .paper {
    background-image: var(--Paper-Gradient);
    grid-column: span 2;
  }

  .scissors {
    background-image: var(--Scissors-Gradient);
    justify-self: start;
  }

  .rock {
    background-image: var(--Rock-Gradient);
    justify-self: end;
  }

  .lizard {
    background-image: var(--Lizard-Gradient);
    justify-self: end;
  }

  .spock {
    background-image: var(--Spock-Gradient);
    justify-self: start;
  }

  ${(props) =>
    props.type === 1 &&
    css`
      background-image: url(/images/bg-pentagon.svg);
      background-repeat: no-repeat;
      background-position: center;
      padding: 1rem;

      @media (min-width: 55rem) {
        background-size: 70%;
      }
    `};
`;
