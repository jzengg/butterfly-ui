import axios from "axios";

export function getMatchup({ callback }) {
  const response = axios({
    method: "post",
    url: "/api/match",
  })
    .then((response) => callback(response.data))
    .catch((error) => console.log(error));
}

export function createMatchupResult({ data, callback }) {
  const response = axios({
    method: "post",
    url: "/api/match_result",
    data,
  })
    .then((response) => callback(response.data))
    .catch((error) => console.log(error));
}

export function getLeaderboard({ callback }) {
  const response = axios({
    method: "get",
    url: "/api/leaderboard",
  })
    .then((response) => {
      console.log(response);
      return callback(response.data);
    })
    .catch((error) => console.log(error));
}

export function isDev() {
  if (typeof window !== "undefined") {
    const value = localStorage.getItem("hotbutterfly-isdev");
    return value === "true";
  }
  return false;
}

export function clearLocalStorage() {
  localStorage.removeItem("hotbutterfly-sessionid");
  localStorage.removeItem("hotbutterfly-numvotes");
}
