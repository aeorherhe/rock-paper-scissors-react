export function getWinnerEasy(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) return "it's tie";
  if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "scissors" && computerChoice === "paper") ||
    (playerChoice === "paper" && computerChoice === "rock")
  ) {
    return "you win";
  } else {
    return "you lose";
  }
}

export function getWinnerHard(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) return "it's tie";
  if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "scissors" && computerChoice === "paper") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "rock" && computerChoice === "lizard") ||
    (playerChoice === "lizard" && computerChoice === "spock") ||
    (playerChoice === "spock" && computerChoice === "scissors") ||
    (playerChoice === "scissors" && computerChoice === "lizard") ||
    (playerChoice === "lizard" && computerChoice === "paper") ||
    (playerChoice === "paper" && computerChoice === "spock") ||
    (playerChoice === "spock" && computerChoice === "rock")
  ) {
    return "you win";
  } else {
    return "you lose";
  }
}
