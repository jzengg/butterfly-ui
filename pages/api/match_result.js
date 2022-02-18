import axios from "axios";
import requestIp from "request-ip";
import geoip from "geoip-lite";

export default async (req, res) => {
  const voter_ip = requestIp.getClientIp(req);
  const geo = geoip.lookup(voter_ip);
  const region = geo?.region ?? "";
  const city = geo?.city ?? "";
  const country = geo?.country ?? "";
  const {
    method,
    body: { winner_id, loser_id, session_id, position, worker_id },
  } = req;
  if (req.method === "POST") {
    const URL = `${process.env.API_BASE_URL}:${process.env.API_PORT}/match_result?apikey=${process.env.API_KEY}`;
    const response = await axios.post(URL, {
      winner_id,
      worker_id,
      loser_id,
      session_id,
      voter_ip,
      city,
      country,
      region,
      position,
    });
    return res.status(200).json(response.data);
  }
  return res.status(400).json({ message: "only post is supported" });
};
