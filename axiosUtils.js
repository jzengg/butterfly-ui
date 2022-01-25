import axios from "axios";
const baseURL = "http://localhost:5001";
// axios.defaults.baseURL = 'http://localhost:5001';

// axios.defaults.headers.post['Content-Type'] = 'application/json';

const instance = axios.create({
  baseURL: baseURL,
  // headers: {'Access-Control-Allow-Origin': '*', Origin: "ststs"}
});

export default instance;
