const axios = require("axios");
const http = require("http");

const hostname = "https://charge-fetcher.onrender.com";
const port = 3000;

const server = http.createServer((req: any, res: any) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello World");
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

const fetchChargeFinder = async () => {
  const data = await axios.get("https://api.chargefinder.com/status/556gm2");
  console.log(data.data);
};

fetchChargeFinder();

setInterval(fetchChargeFinder, 1000 * 60);
