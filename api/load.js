const axios = require('axios');

export default async function handler(req, res) {
  const { url } = req.query;

  // Validate the URL
  if (!url || !url.startsWith('http')) {
    return res.status(400).send('Invalid or missing "url" parameter');
  }

  try {
    // Fetch the external content
    const response = await axios.get(url);

    // Set caching headers to reduce frequent hits
    //res.setHeader('Cache-Control', 's-maxage=60, stale-while-revalidate');
    res.setHeader('Content-Type', 'text/html');
    res.status(200).send(response.data);
  } catch (error) {
    res.status(500).send('Failed to fetch content');
  }
}
