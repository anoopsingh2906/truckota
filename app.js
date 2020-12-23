const express = require('express')()
const json = require('./json.json')

express.get('/data', (req, res) => {
  res.json(json)
})

const hostname = '127.0.0.1';
const port = 3000;

express.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});