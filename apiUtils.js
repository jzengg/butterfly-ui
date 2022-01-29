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

export function isDev() {
  if (typeof window !== "undefined") {
    const value = localStorage.getItem("hotbutterfly-isdev");
    return value === 'true';
  }
  return false;
}

export function clearLocalStorage() {
  localStorage.removeItem('hotbutterfly-sessionid')
  localStorage.removeItem('hotbutterfly-numvotes')
}
