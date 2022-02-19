const axios = require('axios');

const fetchChargeFinder = async () => {
    const data = await axios.get("https://api.chargefinder.com/status/556gm2");
    console.log(data.data);
}

fetchChargeFinder();

setInterval(fetchChargeFinder, 1000 * 60)