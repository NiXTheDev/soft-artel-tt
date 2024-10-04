// import express and geoip-lite
import express from "express";
import geoip from "geoip-lite";
import dotenv from "dotenv";
dotenv.config({ path: "./.env"});
const app = express();

// set the port of the application using dotenv or default to 3000
const port = process.env.PORT || 3000;

app.get("/", async (req: express.Request, res: express.Response) => {
  const ip = req.query.ip as string; // Explicitly cast received ip to string
  if (!ip) {
    res.status(400).json({ error: `Please provide an IP address to be checked, you can do so using 'ip' query parameter, so the example link would look like: http://localhost:${port}/?ip=8.8.8.8` });
    console.log(`Received request for a null IP address`);
    return;
  } else if (!isValidIPv4(ip) && !isValidIPv6(ip)) {
    res.status(400).json({ error: "IP address is invalid, please provide a valid IPv4 or IPv6 address" });
    console.log(`${ip} is not a valid IPv4 or IPv6 address`);
    return;
  }

  console.log(`Received request for IP address: ${ip}, which is an ${await isValidIPv4(ip) ? "IPv4" : await isValidIPv6(ip) ? "IPv6" : "unknown type of"} address`);
  const geo = await geoip.lookup(ip);

  if (geo) {
    res.status(200).json({
      lat: geo.ll[0],
      lon: geo.ll[1],
      country: geo.country,
      city: geo.city
    });
    console.log(`Lookup succesful for ${ip}`);
  } else {
    res.status(404).json({ error: `There is no geographic data for this IP${await isValidIPv4(ip) ? "v4" : await isValidIPv6(ip) ? "v6" : ""} address` });
    console.log(`No geographic data found for ${ip}, database may be outdated`);
  }
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
})

function isValidIPv4(ip: string): Promise<boolean> {
  return new Promise((resolve, reject) => {
    try {
      const ipv4Pattern = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9]{1,2})\.(25[0-5]|2[0-4][0-9]|[01]?[0-9]{1,2})\.(25[0-5]|2[0-4][0-9]|[01]?[0-9]{1,2})\.(25[0-5]|2[0-4][0-9]|[01]?[0-9]{1,2})$/;
      resolve(ipv4Pattern.test(ip));
    } catch (error) {
      reject(error);
    }
  });
}

function isValidIPv6(ip: string):Promise<Boolean> {
  return new Promise((resolve, reject) => {
    try {
      const ipv6Pattern = /^([0-9a-fA-F]{1,4}:){7}([0-9a-fA-F]{1,4})$/;
      resolve(ipv6Pattern.test(ip));
    } catch (error) {
      reject(error);
    }
  });
}