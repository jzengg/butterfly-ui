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
      return callback(response.data);
    })
    .catch((error) => console.log(error));
}

export function getMatches({ callback }) {
  const response = axios({
    method: "get",
    url: "/api/matches",
  })
    .then((response) => {
      return callback(response.data);
    })
    .catch((error) => console.log(error));
}

export function getIp({ callback }) {
  const response = axios({
    method: "get",
    url: "/api/getip",
  })
    .then((response) => {
      return callback(response.data);
    })
    .catch((error) => console.log(error));
}

export function clearLocalStorage() {
  localStorage.removeItem("hotbutterfly-sessionid");
  localStorage.removeItem("hotbutterfly-numvotes");
}
