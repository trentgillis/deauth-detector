const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'deauth-web-ui', 'build')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'deauth-web-ui', 'build', 'index.html'));
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});
