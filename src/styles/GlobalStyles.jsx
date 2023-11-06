import styled, { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    
*,
::after,
::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  /* general variables */
  --box-shadow: 0 0 20px hsl(150, 100%, 66%);
  --transition: all 0.3s linear;
  --transition-2: all 0.5s linear;
  --border-radius: 0.5rem;
  --border-radius-2: 1rem;
  --line-3: 2px solid rgb(9, 224, 88);

  /* variables for this project */
  --White: #ffffff;
  --Orange:rgb(236, 99, 14);
  --Light-Cyan: hsl(193, 38%, 86%);
  --Neon-Green: hsl(150, 100%, 66%);
  --Grayish-Blue: hsl(217, 19%, 38%);
  --Dark-Grayish-Blue: hsl(217, 19%, 24%);
  --Dark-Blue: hsl(218, 23%, 16%);


    /* colors from the project */
--Scissors-Gradient: linear-gradient( hsl(39, 89%, 49%), hsl(40, 84%, 53%));
--Paper-Gradient: linear-gradient( hsl(230, 89%, 62%), hsl(230, 89%, 65%));
--Rock-Gradient: linear-gradient( hsl(349, 71%, 52%), hsl(349, 70%, 56%));
--Lizard-Gradient: linear-gradient( hsl(261, 73%, 60%), hsl(261, 72%, 63%));
--Spock-Gradient: linear-gradient( hsl(189, 59%, 53%), hsl(189, 58%, 57%));

/* text colors */
--Dark-Text: hsl(229, 25%, 31%);
--Score-Text: hsl(229, 64%, 46%);
--Header-Outline: hsl(217, 16%, 45%);
--line: 3px solid var(--Header-Outline);
--line-2: 2px solid var(--Neon-Green);

/* gradient */
--Radial-Gradient: radial-gradient( hsl(214, 47%, 23%),  hsl(237, 49%, 15%));

}


body {
  display: grid;
  font-family: "Barlow Semi Condensed", "Open Sans", Arial, Helvetica, sans-serif;
  height: 100vh;
  place-items: center;
  color: var(--White);
  background-image: var(--Radial-Gradient);
}
/* 
.btn {
  background: none;
  color: var(--White);
  border: none;
  border-radius: var(--border-radius);
  padding: 0.75rem 1.5rem;
  font-weight: 500;
  text-transform: uppercase;
  font-size: 1rem;
  letter-spacing: 0.125rem;
  transition: var(--transition);
  outline: none;
  cursor: pointer;
} */

a{
  text-decoration: none;
  color: var(--Light-Cyan);
  font-weight: 500;
}




`;

export default GlobalStyles;

export const StyledButton = styled.button`
  background: none;
  border-radius: var(--border-radius);
  border: var(--line);
  color: var(--White);
  cursor: pointer;
  font-size: 1rem;
  font-weight: 500;
  letter-spacing: 0.125rem;
  margin: 1rem auto;
  outline: none;
  padding: 0.75rem 1.5rem;
  text-transform: uppercase;
  transition: var(--transition);
  width: fit-content;
`;

export const StyledWinnerRipple = styled.div`
  .box-ripples {
    border-radius: 50%;
    background-size: cover;
    position: relative;
    box-shadow: 0 0 16px rgba(0, 0, 0, 0.5);
  }

  .box-ripples:before {
    position: absolute;
    content: "";
    inset: 0;
    border-radius: 50%;
    box-shadow: 0 0 var(--Neon-Green), 0 0 0 16px var(--Neon-Green),
      0 0 0 32px var(--Neon-Green), 0 0 0 48px var(--Neon-Green);
    z-index: -1;
    opacity: 0.3;
    animation: ripples 1s linear infinite;
    transition: 0.5s;
    transform: scale(0.5);
    animation-play-state: running;
    transform: scale(1.2);
  }

  @keyframes ripples {
    to {
      box-shadow: 0 0 0 16px var(--Orange), 0 0 0 32px var(--Grayish-Blue),
        0 0 0 48px var(--Neon-Green), 0 0 0 64px var(--Light-Cyan);
    }
  }
`;
