// import express and geoip-lite
import express from "express";
import geoip from "geoip-lite";
import dotenv from "dotenv";
dotenv.config();
const app = express();

// set the port of our application using dotenv or default to 3000
const port = process.env.PORT || 3000;

app.get("/", (req: any, res: any) => {
  if (!req.query.ip) {
    res.json({ error: `Please provide an IP address., you can use query parameter "ip" to do so, example url would look like: http://localhost:${port}/?ip=8.8.8.8` });
    return;
  }
  const geo = geoip.lookup(req.query.ip);
  if (geo) {
    res.json({
      lat: geo.ll[0],
      lon: geo.ll[1],
      country: geo.country,
      city: geo.city
    });
  } else {
    res.status(404).json({ error: "Geo information not found for the provided IP address." });
  }
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
})