import requestIp from 'request-ip'
import geoip from 'geoip-lite'


export default async (req, res) => {
  if (req.method === "GET") {
    const ip = requestIp.getClientIp(req)
    const geo = geoip.lookup(ip)
    const region = geo?.region ?? ''
    const city = geo?.city ?? ''
    const country = geo?.country ?? ''
    return res.status(200).json({ip, region, city, country});
  }
  return res.status(400).json({ message: "only get is supported" });
};
