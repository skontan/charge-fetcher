const axios = require("axios");

const express = require("express");
const app = express();
const port = 3001;

app.get("/", (req: any, res: any) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello World");
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

const fetchChargeFinder = async () => {
  const data = await axios.get("https://api.chargefinder.com/status/556gm2");
  console.log(data.data);
};

fetchChargeFinder();

setInterval(fetchChargeFinder, 1000 * 60);
