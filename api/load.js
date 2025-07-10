// api/load.js

const axios = require('axios');

export default async function handler(req, res) {
  try {
    const response = await axios.get('https://www.profitableratecpm.com/bpiguvmv?key=9bcb012ff76a8fd5498dfc3cf401f784');
    res.setHeader('Content-Type', 'text/html');
    res.status(200).send(response.data);
  } catch (error) {
    res.status(500).send('Failed to load external page');
  }
}
