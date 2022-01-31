import axios from "axios";
import requestIp from 'request-ip'
import geoip from 'geoip-lite'


export default async (req, res) => {
  if (req.method === "GET") {
    const URL = 'http://www.geoplugin.net/json.gp';
    const detectedIp = requestIp.getClientIp(req)
    console.log('detected ip', detectedIp)
    const geo = geoip.lookup(detectedIp);
    console.log('geo', geo)
    const response = await axios.get(URL);
    return res.status(200).json(response.data);
  }
  return res.status(400).json({ message: "only get is supported" });
};
