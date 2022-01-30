import axios from "axios";

export default async (req, res) => {
  if (req.method === "GET") {
    const URL = `${process.env.API_BASE_URL}/matches?apikey=${process.env.API_KEY}`;
    const response = await axios.get(URL);
    return res.status(200).json(response.data);
  }
  return res.status(400).json({ message: "only get is supported" });
};
