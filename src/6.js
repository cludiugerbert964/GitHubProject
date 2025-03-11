const https = require('https');

function getData(url) {
  return new Promise((resolve, reject) => {
    const request = https.get(url, (response) => {
      if (response.statusCode === 200) {
        resolve(JSON.parse(response.data));
      } else {
        reject(new Error(`Failed to fetch data: ${response.statusCode}`));
      }
    });

    request.on('error', (error) => {
      reject(error);
    });
  });
}

async function main() {
  try {
    const data = await getData('https://api.example.com/data');
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

main();
