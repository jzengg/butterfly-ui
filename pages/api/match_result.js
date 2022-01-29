import axios from "axios";

export default async (req, res) => {
  const {
    method,
    body: { winner_id, loser_id, session_id },
  } = req;
  if (req.method === "POST") {
    const URL = `${process.env.API_BASE_URL}/match_result`;
    const data = req.body;
    const { winner_id, loser_id, session_id } = data;
    const response = await axios.post(URL, {
      winner_id,
      loser_id,
      session_id,
    });
    return res.status(200).json(response.data);
  }
  return res.status(400).json({ message: "only post is supported" });
};
