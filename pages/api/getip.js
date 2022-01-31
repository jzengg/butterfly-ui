import axios from "axios";

export default async (req, res) => {
  if (req.method === "GET") {
    const URL = 'http://www.geoplugin.net/json.gp';
    const response = await axios.get(URL);
    return res.status(200).json(response.data);
  }
  return res.status(400).json({ message: "only get is supported" });
};
