let express = require('express');
const app = express();
app.get('/', function(req, res) {
  res.send('Hello World!');
});
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
