let express = require('express');
const app = express();
app.use(express.static(__dirname + '/public'));

app.listen(3000, () => {
  console.log(`Server is running on port 3000`);
});
