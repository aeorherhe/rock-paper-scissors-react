// set session storage
export function setSessionStorage(score) {
  sessionStorage.setItem("score", JSON.stringify(score));
}

// get session storage
export function getSessionStorage() {
  return sessionStorage.getItem("score");
}

// remove session storage

// sessionStorage.removeItem("score");
