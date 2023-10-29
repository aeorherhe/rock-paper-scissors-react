export function setLocalStorage(score) {
  localStorage.setItem("score", JSON.stringify(score));
}

export function getLocalStorage() {
  return localStorage.getItem("score");
}
