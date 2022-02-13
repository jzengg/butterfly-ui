import axios from "axios";

export default async (req, res) => {
  const {
    method,
    body: { worker_id, session_id },
  } = req;
  if (req.method === "POST") {
    const URL = `${process.env.API_BASE_URL}:${process.env.API_PORT}/worker?apikey=${process.env.API_KEY}`;
    const response = await axios.post(URL, {
      session_id,
      worker_id,
    });
    return res.status(200).json(response.data);
  }
  return res.status(400).json({ message: "only post is supported" });
};
