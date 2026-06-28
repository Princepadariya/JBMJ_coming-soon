const https = require('https');
const fs = require('fs');

const options = {
  hostname: 'resource.cdn.icai.org',
  port: 443,
  path: '/59231icai-logo.jpg',
  method: 'GET',
  headers: {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
  }
};

const req = https.request(options, res => {
  if (res.statusCode === 200) {
    const file = fs.createWriteStream('icai_logo.jpg');
    res.pipe(file);
    file.on('finish', () => {
      file.close();
      console.log('Download complete icai_logo.jpg');
    });
  } else {
    console.log(`Failed with status: ${res.statusCode}`);
  }
});

req.on('error', error => {
  console.error(error);
});

req.end();
