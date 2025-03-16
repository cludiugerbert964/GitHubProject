const fetch = require('node-fetch');

async function getData() {
  const response = await fetch('https://api.github.com/repos/<username>/<repo>');
  const data = await response.json();
  return data;
}

getData().then(data => console.log(data));
