import axios from "./axiosUtils";

export function getMatchup(handler) {
  const response = axios({
    method: "post",
    url: "/match",
  })
    .then((response) => handler(response.data))
    .catch((error) => console.log(error));
}

export function getLeaderboard(handler) {
  const response = axios({
    method: "get",
    url: "/leaderboard",
  })
    .then((response) => handler(response.data))
    .catch((error) => console.log(error));
}
