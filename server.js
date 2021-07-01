const path = require('path');
const express = require('express');
const app = express();
const port = 80;
app.use(express.static('./dist/airtm-front'));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname,'/dist/airtm-front/index.html'));
});
app.listen(port, () => {
  console.log('Server is up!');
});
