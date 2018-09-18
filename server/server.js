const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
app.use('/spreetail', express.static(__dirname + '../public'));

const port = 8082;
app.listen(port, () => {
  console.log('Listening on port ' + port);
});